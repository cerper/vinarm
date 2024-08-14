'use client'
import { Link as ScrollLink } from 'react-scroll'

const linksData = [
  {
    name: 'quienesSomos?',
    target: 'quienes somos?',
    offset: -140,
  },
  {
    name: 'menu',
    target: 'menu',
    offset: -110,
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
