import Image from 'next/image'
import { GiFrenchFries } from 'react-icons/gi'
import { PiHamburgerFill } from 'react-icons/pi'
import foto from '../../public/Vinarm/quienesSomos.png'

const aboutData = [
  {
    text: 'Descubre el sabor irresistible de nuestras papas fritas en Los Teques. ¡Ven y disfruta de la mejor experiencia, crujientes y deliciosas!',
    icon: <GiFrenchFries />,
  },
  {
    text: 'Descubre el sabor único de nuestro bistro en Los Teques, donde cada plato es una experiencia gourmet que deleitará tus sentidos. ¡Te esperamos!',
    icon: <PiHamburgerFill />,
  },
]

const AboutSection = () => {
  return (
    <section className="bg-vinarmGreen " id="quienes somos?">
      <div className="py-10 ">
        <h5 className="text-vinarmYellow  text-5xl font-montserrat font-extrabold text-center">
          Quienes Somos?
        </h5>
        <div className="grid grid-cols-1 text-vinarmBeige font-montserrat font-extrabold lg:grid-cols-2 place-content-center place-items-center gap-8 mt-8">
          {aboutData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="text-center text-6xl">{data.icon}</div>
                <p className="text-center w-[250px] lg:w-[400px] text-lg">
                  {data.text}
                </p>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col w-full items-center justify-center lg:grid lg:grid-cols-2 lg:place-items-start mt-16 ">
          <Image
            src={foto}
            alt="local de vinarm"
            width={340}
            height={200}
            className="w-full lg:mx-8 lg:w-[80vh] lg:h-[400px]  "
          />
          <div className="flex justify-center h-[250px] w-[300px] md:w-[500px] md:h-[450px]  items-center text-vinarmBeige">
            <p className="text-justify font-montserrat font-extrabold ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              vel perferendis iure consequatur rem vero incidunt vitae enim,
              fugit unde aspernatur error dolorum adipisci in assumenda autem
              facere, nisi eos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
