import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/Vinarm/logo2.png'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 h-[140px] w-full max-w-[1920px] bg-vinarmGreen text-vinarmYellow transition-all lg:h-[118px]">
        <div className="container mx-auto  h-full flex flex-col justify-between items-center lg:flex-row ">
          <Link href="/" className="mb-4">
            <Image
              src={logo}
              alt="logo vinarm"
              width={150}
              height={90}
              className="h-[85px] mt-0 lg:h-[90px] "
            />
          </Link>

          <MobileNav containerStyles="capitalize gap-2 fixed flex font-extrabold z-30 mt-24 text-base font-montserrat md:text-xl lg:hidden" />
          <Navbar containerStyles="capitalize flex gap-4 hidden font-extrabold  lg:flex" />
        </div>
      </header>
    </div>
  )
}
export default Header
