import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide your name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json({ error: 'Please provide a subject.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please enter a message of at least 5 characters.' },
        { status: 400 }
      );
    }

    // Check if real email credentials (like RESEND_API_KEY or SMTP) are configured in environment
    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;

    if (resendApiKey) {
      // Connect to Resend if configured
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact Form <onboarding@resend.dev>',
          to: ['abrarjamangazi.study@gmail.com'],
          reply_to: email.trim(),
          subject: `[Portfolio Inquiry] ${subject.trim()} - from ${name.trim()}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Email dispatch error:', errorData);
        return NextResponse.json(
          { error: 'Failed to send message via email service. Please email me directly.' },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        delivered: true,
        message: 'Thank you! Your message has been sent directly to Abrar Jaman Gazi.',
      });
    }

    // Honest handling when external SMTP credentials are not yet configured in .env
    console.log('[Portfolio Contact Form Submission Received]', {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      delivered: false,
      message:
        'Thank you! Your message was received and validated. Since live email credentials (RESEND_API_KEY) are not yet configured in this deployment environment, you can also reach me directly at abrarjamangazi.study@gmail.com.',
    });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error while processing your message.' },
      { status: 500 }
    );
  }
}
