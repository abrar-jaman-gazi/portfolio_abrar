import React from 'react';
import { 
  Users, 
  Dumbbell, 
  Brain, 
  AlertTriangle, 
  Radio, 
  Activity, 
  FileText, 
  Layers, 
  Zap, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';

export function ProjectPreview({ projectId }: { projectId: string }) {
  if (projectId === 'campus-collab') {
    return (
      <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-charcoal-900 to-slate-900 p-4 sm:p-5 flex flex-col justify-between font-sans border-b border-white/10 select-none overflow-hidden relative">
        <div className="absolute top-0 right-0 w-44 h-44 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Mock App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400 font-semibold flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-accent-blue" />
              CampusCollab Hub
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue border border-accent-blue/30">
            UIU Student Network
          </span>
        </div>

        {/* Mock Content Rows */}
        <div className="grid grid-cols-12 gap-3 my-auto pt-2">
          {/* Active Gig Card */}
          <div className="col-span-7 bg-zinc-800/70 rounded-xl p-3 border border-zinc-700/60 shadow-md">
            <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
              <span className="text-accent-blue font-mono font-medium">Campus Gig #204</span>
              <span className="text-emerald-400 font-semibold font-mono">Open</span>
            </div>
            <div className="text-xs font-bold text-white truncate">
              Full-Stack Event Management Portal
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950 text-[10px] font-mono text-zinc-300">React</span>
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950 text-[10px] font-mono text-zinc-300">Node</span>
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950 text-[10px] font-mono text-zinc-300">MongoDB</span>
            </div>
          </div>

          {/* Proposals & Collaboration Status */}
          <div className="col-span-5 flex flex-col gap-2">
            <div className="bg-zinc-800/60 rounded-xl p-2.5 border border-zinc-700/50">
              <div className="text-[10px] text-zinc-400 font-mono">Proposals Received</div>
              <div className="text-sm font-bold text-white flex items-center gap-1">
                <span>6 Submitted</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto" />
              </div>
            </div>
            <div className="bg-accent-blue/10 border border-accent-blue/30 rounded-xl p-2 text-center">
              <span className="text-[10px] font-mono text-accent-blue font-semibold">Active Team Sync</span>
            </div>
          </div>
        </div>

        {/* Mock Footer Status */}
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
          <span>Role: Freelancer & Client Portals</span>
          <span>Verified Student Profiles</span>
        </div>
      </div>
    );
  }

  if (projectId === 'fitlog') {
    return (
      <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-charcoal-900 to-indigo-950/40 p-4 sm:p-5 flex flex-col justify-between font-sans border-b border-white/10 select-none overflow-hidden relative">
        <div className="absolute top-0 right-0 w-44 h-44 bg-accent-indigo/15 rounded-full blur-2xl pointer-events-none" />

        {/* Mock App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400 font-semibold flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-accent-indigo" />
              FitLog Tracker
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/30">
            Next.js App
          </span>
        </div>

        {/* Mock Fitness Dashboard */}
        <div className="grid grid-cols-12 gap-3 my-auto pt-2">
          {/* Exercise Details Card */}
          <div className="col-span-7 bg-zinc-800/70 rounded-xl p-3 border border-zinc-700/60 shadow-md">
            <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
              <span className="text-accent-indigo font-mono font-medium">Exercise Library</span>
              <span className="text-zinc-400 font-mono">Upper Body</span>
            </div>
            <div className="text-xs font-bold text-white">
              Incline Dumbbell Press
            </div>
            <div className="text-[10px] text-zinc-400 mt-1">
              Target: Pectoralis Major • Triceps
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-zinc-300">
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950">4 Sets</span>
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950">8-12 Reps</span>
              <span className="px-1.5 py-0.5 rounded bg-accent-indigo/30 text-accent-indigo">Saved</span>
            </div>
          </div>

          {/* Routine Planner Side */}
          <div className="col-span-5 flex flex-col gap-2">
            <div className="bg-zinc-800/60 rounded-xl p-2.5 border border-zinc-700/50">
              <div className="text-[10px] text-zinc-400 font-mono">Weekly Split</div>
              <div className="text-xs font-bold text-zinc-200 mt-0.5">Push / Pull / Legs</div>
              <div className="w-full bg-charcoal-950 rounded-full h-1.5 mt-2">
                <div className="bg-accent-indigo h-1.5 rounded-full w-4/5" />
              </div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-2 text-center">
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">Offline Persistent</span>
            </div>
          </div>
        </div>

        {/* Mock Footer Status */}
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
          <span>Sort & Filter: Equipment / Muscle</span>
          <span>ExerciseDB API</span>
        </div>
      </div>
    );
  }

  if (projectId === 'meme-veracity-fydp') {
    return (
      <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-charcoal-900 to-purple-950/40 p-4 sm:p-5 flex flex-col justify-between font-sans border-b border-white/10 select-none overflow-hidden relative">
        <div className="absolute top-0 right-0 w-44 h-44 bg-accent-violet/20 rounded-full blur-2xl pointer-events-none" />

        {/* Mock Research Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400 font-semibold flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5 text-accent-violet" />
              FYDP II Multimodal AI Architecture
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-violet/20 text-accent-violet border border-accent-violet/30">
            Research Model
          </span>
        </div>

        {/* Multimodal Architecture Diagram Concept */}
        <div className="my-auto pt-2 space-y-2">
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
            <div className="bg-zinc-800/80 p-2 rounded-xl border border-zinc-700/60">
              <div className="text-accent-blue font-bold">Vision Stream</div>
              <div className="text-zinc-400 text-[9px] mt-0.5">Image Semantics</div>
            </div>
            <div className="bg-zinc-800/80 p-2 rounded-xl border border-zinc-700/60">
              <div className="text-accent-violet font-bold">Context Text</div>
              <div className="text-zinc-400 text-[9px] mt-0.5">Captions & World Knowl.</div>
            </div>
            <div className="bg-zinc-800/80 p-2 rounded-xl border border-zinc-700/60">
              <div className="text-emerald-400 font-bold">Fusion Layer</div>
              <div className="text-zinc-400 text-[9px] mt-0.5">Cross-Attention</div>
            </div>
          </div>

          <div className="bg-charcoal-950/80 rounded-xl p-2.5 border border-zinc-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-400">Classifiers:</span>
              <span className="px-2 py-0.5 rounded bg-accent-violet/20 text-accent-violet font-mono text-[10px] font-semibold">
                Veracity (Truth vs Misleading)
              </span>
              <span className="px-2 py-0.5 rounded bg-accent-blue/20 text-accent-blue font-mono text-[10px] font-semibold">
                Intent (Humor / Propaganda)
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">
              + Faithful XAI
            </span>
          </div>
        </div>

        {/* Mock Footer Status */}
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
          <span>Dual-Objective Classification</span>
          <span>UIU Completed Capstone</span>
        </div>
      </div>
    );
  }

  if (projectId === 'disaster-hub') {
    return (
      <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-charcoal-900 to-cyan-950/40 p-4 sm:p-5 flex flex-col justify-between font-sans border-b border-white/10 select-none overflow-hidden relative">
        <div className="absolute top-0 right-0 w-44 h-44 bg-accent-cyan/15 rounded-full blur-2xl pointer-events-none" />

        {/* Mock App Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400 font-semibold flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-accent-cyan" />
              Disaster Assistance Hub
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
            Emergency Network
          </span>
        </div>

        {/* Mock Emergency SOS Dashboard */}
        <div className="grid grid-cols-12 gap-3 my-auto pt-2">
          {/* Active SOS Alert Card */}
          <div className="col-span-7 bg-zinc-800/70 rounded-xl p-3 border border-zinc-700/60 shadow-md">
            <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
              <span className="text-red-400 font-mono font-medium flex items-center gap-1">
                <Radio className="w-3 h-3 animate-ping" />
                Live SOS Signal
              </span>
              <span className="text-zinc-400 font-mono text-[10px]">Dhaka Grid</span>
            </div>
            <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
              Flood Relief & Clean Water Needs
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-zinc-300">
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950">Food Supplies</span>
              <span className="px-1.5 py-0.5 rounded bg-charcoal-950">Water Packets</span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">12 Volunteers Dispatched</span>
            </div>
          </div>

          {/* Volunteer & Voice Dispatch */}
          <div className="col-span-5 flex flex-col gap-2">
            <div className="bg-zinc-800/60 rounded-xl p-2.5 border border-zinc-700/50">
              <div className="text-[10px] text-zinc-400 font-mono">Resource Balance</div>
              <div className="text-xs font-bold text-zinc-200 mt-0.5">Supplies: 94% Allocated</div>
              <div className="w-full bg-charcoal-950 rounded-full h-1.5 mt-2">
                <div className="bg-accent-cyan h-1.5 rounded-full w-11/12" />
              </div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-2 text-center">
              <span className="text-[10px] font-mono text-accent-cyan font-semibold">Voice Support Ready</span>
            </div>
          </div>
        </div>

        {/* Mock Footer Status */}
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
          <span>Real-time SOS Broadcast</span>
          <span>Admin Oversight Dashboard</span>
        </div>
      </div>
    );
  }

  // Smart Wheelchair Project
  return (
    <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-charcoal-900 to-emerald-950/40 p-4 sm:p-5 flex flex-col justify-between font-sans border-b border-white/10 select-none overflow-hidden relative">
      <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Mock Hardware Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs font-mono text-zinc-400 font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            Smart Wheelchair Telemetry
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
          Arduino IoT System
        </span>
      </div>

      {/* Mock Hardware Sensors */}
      <div className="grid grid-cols-12 gap-3 my-auto pt-2">
        {/* Gesture Orientation Card */}
        <div className="col-span-7 bg-zinc-800/70 rounded-xl p-3 border border-zinc-700/60 shadow-md">
          <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
            <span className="text-emerald-400 font-mono font-medium">MPU6050 Motion</span>
            <span className="text-zinc-400 font-mono">Gesture: Forward</span>
          </div>
          <div className="text-xs font-bold text-white flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Obstacle Radar: Clear (180cm)
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-zinc-300">
            <span className="px-1.5 py-0.5 rounded bg-charcoal-950">Ultrasonic Array</span>
            <span className="px-1.5 py-0.5 rounded bg-charcoal-950">Motor Bridge</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Lockout Safe</span>
          </div>
        </div>

        {/* Vital Telemetry */}
        <div className="col-span-5 flex flex-col gap-2">
          <div className="bg-zinc-800/60 rounded-xl p-2.5 border border-zinc-700/50">
            <div className="text-[10px] text-zinc-400 font-mono">Vital Telemetry</div>
            <div className="text-xs font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
              <span>74 BPM • Normal</span>
            </div>
            <div className="text-[10px] text-zinc-400 font-mono mt-1">BP: Stable Metric</div>
          </div>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-2 text-center">
            <span className="text-[10px] font-mono text-emerald-400 font-semibold">Emergency Buzzer Ready</span>
          </div>
        </div>
      </div>

      {/* Mock Footer Status */}
      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-zinc-800/80">
        <span>Hand-Gesture Tilt Navigation</span>
        <span>Arduino Embedded Prototype</span>
      </div>
    </div>
  );
}
