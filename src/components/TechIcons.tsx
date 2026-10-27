import React from 'react';

export function TechIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const norm = name.toLowerCase();

  if (norm.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.813v.825H3.92S0 5.753 0 11.906c0 6.155 3.42 5.928 3.42 5.928h2.04v-2.885s-.11-3.42 3.36-3.42h5.772s3.25.053 3.25-3.155V3.155S18.36 0 11.914 0zm-3.23 1.838a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02z" fill="#38BDF8"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.813v-.825h8.1s3.92.478 3.92-5.675c0-6.155-3.42-5.928-3.42-5.928h-2.04v2.885s.11 3.42-3.36 3.42H9.41s-3.25-.053-3.25 3.155v5.22s-.5 3.155 5.926 3.155zm3.23-1.838a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02z" fill="#FACC15"/>
      </svg>
    );
  }

  if (norm.includes('javascript') || norm === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M7 16.5c.5.8 1.4 1.4 2.5 1.4 1.3 0 2.1-.7 2.1-2.4v-6.9h-1.8v6.9c0 .7-.3 1-1 1-.5 0-.9-.3-1.2-.6l-.6 1.6zm6.8 0c.7.9 1.8 1.4 3.1 1.4 2.1 0 3.5-1.1 3.5-2.8 0-1.6-1-2.3-2.6-2.9l-.6-.3c-.9-.4-1.3-.7-1.3-1.3 0-.6.5-1.1 1.4-1.1.8 0 1.4.3 1.8.8l1.3-1.2c-.8-1-1.8-1.4-3.1-1.4-2 0-3.3 1.1-3.3 2.7 0 1.5 1 2.2 2.4 2.8l.6.3c1 .4 1.5.8 1.5 1.4 0 .7-.6 1.2-1.6 1.2-1 0-1.7-.5-2.2-1.2l-1.3 1.5z" fill="#000000"/>
      </svg>
    );
  }

  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.5">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="1.8" fill="#00D8FF"/>
      </svg>
    );
  }

  if (norm.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7v10m8-10v5.5M8 7l8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
        <path d="M12 2l8 4.6v9.2L12 20.4 4 15.8V6.6L12 2z" strokeLinejoin="round"/>
        <path d="M12 2v18.4M4 6.6l8 4.6 8-4.6" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (norm.includes('express')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 8h4M7 12h3M7 16h4M14 8l3 4-3 4M17 12h-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (norm.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 1.5C11.5 5 8 9 8 13.5c0 4 2.5 7.5 4 9 1.5-1.5 4-5 4-9C16 9 12.5 5 12 1.5z" fill="#10AA50"/>
        <path d="M12 1.5v21" stroke="#0D803D" strokeWidth="1.2"/>
      </svg>
    );
  }

  if (norm.includes('sql') || norm.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    );
  }

  if (norm.includes('git') && !norm.includes('hub')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#F05032">
        <path d="M23.546 10.93L13.067.452a1.498 1.498 0 0 0-2.12 0L8.84 2.56l3.084 3.084c.553-.19 1.189-.04 1.61.382.422.422.572 1.057.382 1.61l2.97 2.97c.553-.19 1.189-.04 1.61.382.607.607.607 1.593 0 2.2a1.554 1.554 0 0 1-2.2 0 1.55 1.55 0 0 1-.383-1.61l-2.774-2.774v5.337c.19.09.366.216.516.366.607.607.607 1.593 0 2.2a1.554 1.554 0 0 1-2.2 0 1.554 1.554 0 0 1 0-2.2c.2-.2.433-.332.686-.398V9.124a1.555 1.555 0 0 1-.686-.398 1.557 1.557 0 0 1-.382-1.61L7.766 4.032.454 11.344a1.498 1.498 0 0 0 0 2.12l10.48 10.478c.586.586 1.534.586 2.12 0l10.48-10.478a1.503 1.503 0 0 0 .012-2.134z"/>
      </svg>
    );
  }

  if (norm.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    );
  }

  if (norm.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
        <path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3zm14.8 5.7h-9l.2 2.2h8.6l-.6 6.9-4.8 1.3-4.8-1.3-.3-3.6h2.2l.2 1.8 2.7.7 2.7-.7.3-3.3H7.5L6.9 5.5h11.2l-.3 2.2z"/>
      </svg>
    );
  }

  if (norm.includes('css') && !norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
        <path d="M3 2l1.8 20.2 7.2 2 7.2-2L21 2H3zm14.8 5.7H7.7l-.2-2.2h10.8l-.5 5.5H8.3l.2 2.2h8.9l-.6 6.9-4.8 1.3-4.8-1.3-.3-3.6h2.2l.2 1.8 2.7.7 2.7-.7.3-3.3H7.5l-.2-2.2h10.8l-.3 2.2z"/>
      </svg>
    );
  }

  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
      </svg>
    );
  }

  if (norm.includes('learning') || norm === 'ml') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
        <path d="M6 13a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4z"/>
        <path d="M18 13a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4z"/>
        <path d="M10 7.5l-3 6m7-6l3 6M8.5 17h7"/>
      </svg>
    );
  }

  if (norm.includes('deep') || norm === 'dl') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <circle cx="5" cy="18" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <circle cx="12" cy="4" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <circle cx="12" cy="12" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <circle cx="12" cy="20" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <circle cx="19" cy="8" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <circle cx="19" cy="16" r="2.5" fill="#EC4899" fillOpacity="0.2"/>
        <line x1="7.5" y1="6" x2="9.5" y2="4"/>
        <line x1="7.5" y1="6" x2="9.5" y2="12"/>
        <line x1="7.5" y1="18" x2="9.5" y2="12"/>
        <line x1="7.5" y1="18" x2="9.5" y2="20"/>
        <line x1="14.5" y1="4" x2="16.5" y2="8"/>
        <line x1="14.5" y1="12" x2="16.5" y2="8"/>
        <line x1="14.5" y1="12" x2="16.5" y2="16"/>
        <line x1="14.5" y1="20" x2="16.5" y2="16"/>
      </svg>
    );
  }

  if (norm.includes('mining') || norm.includes('data')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    );
  }

  // Fallback generic code icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
