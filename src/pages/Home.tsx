import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Navbar } from '../components/Navbar'
import { ProductVisual } from '../components/ProductVisual'
import { TrustSection } from '../components/TrustSection'
import { HowItWorks } from '../components/HowItWorks'
import { Features } from '../components/Features'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'

export function Home() { return <main id="top"><div className="site-shell"><Navbar /><section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> The new rhythm of work</p><h1>Your team.<br />Your <span>progress.</span><br />All in sync.</h1><p className="hero-description">Manage attendance, track daily work progress, and keep your entire team connected through one intelligent workspace.</p><div className="hero-actions"><a className="button button-dark" href="/get-started">Get started for free <ArrowUpRight size={17} /></a><a className="button button-outline" href="#features">Explore features <ArrowDown size={16} /></a></div><div className="hero-proof"><span><b>✦</b> Simple setup</span><span><b>✦</b> Real-time visibility</span><span><b>✦</b> Built for growth</span></div></div><ProductVisual /></section><TrustSection /><HowItWorks /><Features /><FinalCTA /><Footer /></div></main> }
