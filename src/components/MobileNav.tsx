'use client'
import { Link as ScrollLink } from 'react-scroll'

const linksData = [
  {
    name: 'home',
    target: 'home',
    offset: 100,
  },
  {
    name: 'quienesSomos?',
    target: 'quienes somos?',
    offset: 80,
  },
  {
    name: 'menu',
    target: 'menu',
    offset: 60,
  },
  {
    name: 'testimonios',
    target: 'testimonios',
    offset: -80,
  },
  {
    name: 'contacto',
    target: 'contact',
    offset: -100,
  },
]

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {linksData.map((link, index) => {
        return (
          <ScrollLink
            key={index}
            offset={link.offset}
            to={link.target}
            spy
            smooth
            className=" cursor-pointer transition-all hover:text-vinarmBeige"
          >
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}
export default MobileNav
