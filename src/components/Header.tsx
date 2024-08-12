import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/Vinarm/logoreal.png'
import MobileNav from './MobileNav'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 h-[130px] w-full max-w-[1920px] bg-vinarmBlack text-vinarmYellow transition-all lg:h-[122px]">
        <div className="container mx-auto h-full flex flex-col justify-between items-center lg:flex-row ">
          <Link href="/">
            <Image
              src={logo}
              alt="logo vinarm"
              width={200}
              height={90}
              className="h-[80px] mt-2 lg:h-[90px] "
            />
          </Link>

          <MobileNav containerStyles="capitalize gap-4 fixed flex font-extrabold z-30 mt-24  md:text-xl lg:hidden" />
          <Navbar containerStyles="capitalize flex gap-4 hidden font-extrabold  lg:flex" />
        </div>
      </header>
    </div>
  )
}
export default Header
