import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

const links = [['How it works', '#how-it-works'], ['Features', '#features'], ['Solutions', '#solutions'], ['Pricing', '#pricing'], ['FAQ', '#faq']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap">
    <a className="brand" href="#top" aria-label="WorkPulse home"><span className="brand-mark"><i /><i /><i /></span><span>work<span>pulse</span></span></a>
    <nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <div className="nav-actions"><ThemeSwitcher /><a className="sign-in" href="/sign-in">Sign in</a><a className="button button-dark small" href="/get-started">Get started <span>↗</span></a></div>
    <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
  </header>
}
