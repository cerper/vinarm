import { GiFrenchFries } from 'react-icons/gi'

const aboutData = [
  {
    text: 'Descubre el sabor irresistible de nuestras papas fritas en Los Teques. ¡Ven y disfruta de la mejor experiencia, crujientes y deliciosas!',
    icon: <GiFrenchFries />,
  },
  {
    text: 'Descubre el sabor irresistible de nuestras papas fritas en Los Teques. ¡Ven y disfruta de la mejor experiencia, crujientes y deliciosas!',
    icon: <GiFrenchFries />,
  },
  {
    text: 'Descubre el sabor irresistible de nuestras papas fritas en Los Teques. ¡Ven y disfruta de la mejor experiencia, crujientes y deliciosas!',
    icon: <GiFrenchFries />,
  },
]

const AboutSection = () => {
  return (
    <section className="bg-vinarmGreen h-[100vh]" id="quienes somos?">
      <div className="mt-8">
        <h5 className="text-vinarmYellow text-5xl font-montserrat font-extrabold text-center">
          Quienes Somos?
        </h5>
        <div className="grid grid-cols-1 mx-4 text-vinarmBeige font-montserrat font-extrabold lg:grid-cols-3 place-content-center place-items-center gap-8 mt-8">
          {aboutData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <div className="text-center text-6xl">{data.icon}</div>
                <p className="text-center text-lg">{data.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default AboutSection
