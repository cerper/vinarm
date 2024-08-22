import Image from 'next/image'
import combo from '../../public/Vinarm/combo.png'
import { Button } from './ui/button'
import Link from 'next/link'

const menuData = [
  {
    name: 'Combo 1',
    description: 'hamburguesa con papas grandes y refresco',
    precio: 10,
    src: combo,
  },
  {
    name: 'Combo 2',
    description: 'hamburguesa con papas grandes y refresco',
    precio: 11,
    src: combo,
    link: '',
  },
  {
    name: 'Combo 3',
    description: 'hamburguesa con papas grandes y refresco',
    precio: 12,
    src: combo,
  },
  {
    name: 'Combo 4',
    description: 'hamburguesa con papas grandes y refresco',
    precio: 15,
    src: combo,
  },
]

const MenuSection = () => {
  return (
    <div className="bg-vinarmBlack py-6" id="menu">
      <h3 className="text-vinarmYellow text-5xl p-8 font-montserrat font-extrabold text-center">
        Menu
      </h3>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24">
          {menuData.map((menu, index) => {
            return (
              <div key={index}>
                <Image
                  src={menu.src}
                  alt="foto del combo "
                  height={300}
                  width={400}
                  className="rounded-full mt-10 lg:mt-4"
                />
                <h5 className="text-center mt-2 text-vinarmBeige font-montserrat font-extrabold">
                  {menu.name}
                </h5>
                <p className="text-center mx-4 text-vinarmBeige font-montserrat font-extrabold">
                  {menu.description}
                </p>
                <div className="text-center text-vinarmYellow font-montserrat font-extrabold">
                  {menu.precio}$
                </div>
                <Link
                  href={`https://wa.link/pa16nb `}
                  className="flex justify-center items-center mt-2"
                >
                  <Button
                    variant={'default'}
                    className="bg-vinarmYellow text-center font-montserrat font-bold text-vinarmGreen hover:bg-vinarmBeige"
                  >
                    Comprar {menu.name}
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default MenuSection
