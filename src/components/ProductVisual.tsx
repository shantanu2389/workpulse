import { Check, ChevronDown, Clock3, MoreHorizontal, Play, Users } from 'lucide-react'

export function ProductVisual() {
  return <div className="visual-stage" aria-label="WorkPulse product preview">
    <div className="glow glow-one" /><div className="glow glow-two" />
    <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    <div className="float-card attendance-card">
      <div className="card-kicker"><span className="icon-pink"><Users size={14} /></span><span>Attendance</span><MoreHorizontal size={16} className="muted" /></div>
      <div className="attendance-number">92.8<span>%</span></div><div className="progress-line"><i style={{width: '92.8%'}} /></div><div className="stat-row"><span>24 present</span><span>3 absent</span></div>
    </div>
    <div className="float-card progress-card"><div className="card-kicker"><span className="icon-purple"><Check size={14} /></span><span>Work progress</span></div><strong>Homepage redesign</strong><div className="mini-progress"><i /></div><div className="stat-row"><span>75% completed</span><em>In progress</em></div></div>
    <div className="float-card update-card"><div className="avatar avatar-orange">AM</div><div><strong>Daily update</strong><p>Alex completed a task</p><small>Just now</small></div><Check size={17} className="check" /></div>
    <div className="float-card team-card"><div className="card-kicker"><span className="icon-green"><Users size={14} /></span><span>Team activity</span><span className="live-dot" /></div><div className="avatar-stack"><span className="avatar avatar-purple">JL</span><span className="avatar avatar-blue">SK</span><span className="avatar avatar-yellow">RN</span><span className="avatar more">+8</span></div><p>8 updates this morning</p></div>
    <div className="session-card"><div className="session-top"><span className="live-pill"><b /> Live work session</span><span className="session-menu"><MoreHorizontal size={16} /></span></div><div className="session-person"><div className="avatar avatar-large">AM</div><div><strong>Alex Morgan</strong><span>Product Designer</span></div></div><div className="session-task"><span>Current task</span><strong>Designing the new onboarding flow</strong></div><div className="timer-row"><div><Clock3 size={16} /><span>02:34:18</span></div><button><Play size={13} fill="currentColor" /> Pause session</button></div><div className="session-progress"><div className="progress-label"><span>Today's progress</span><b>68%</b></div><div className="progress-line"><i style={{width: '68%'}} /></div></div></div>
    <div className="visual-caption"><span className="pulse-dot" /> Live workspace · Updated just now</div>
  </div>
}
