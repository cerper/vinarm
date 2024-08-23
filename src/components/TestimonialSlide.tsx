'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { FaArrowDown } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import foto from '../../public/Vinarm/combo.png'

const testimonialData = [
  {
    name: 'Luis',
    referencia: 'Las mejores papas que he probado y excelente servicio',
    imagen: foto,
  },
  {
    name: 'Luis',
    referencia: 'Las mejores papas que he probado y excelente servicio',
    imagen: foto,
  },
  {
    name: 'Luis',
    referencia: 'Las mejores papas que he probado y excelente servicio',
    imagen: foto,
  },
]

const TestimonialSlide = () => {
  return (
    <section>
      <Swiper
        className="mb-8 min-h-[500px]  py-8"
        id="testimonial"
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {testimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="mb-4 pb-0 pt-6 lg:mt-8 lg:pb-8">
                <h3 className="mb-2 text-center text-3xl font-montserrat font-extrabold text-vinarmBeige">
                  {item.name}
                </h3>
                <div className=" container mt-10 flex h-[300px] w-[300px] flex-col items-center justify-center md:h-[450px] md:w-[350px] md:flex-col">
                  {' '}
                  <Image
                    src={item.imagen}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="mt-6 h-[250px] w-[300px] rounded-full md:h-[350px] md:w-[350px]"
                  />
                  <div className="mt-4 text-center font-bold text-vinarmYellow  font-montserrat text-xl md:mb-8 ">
                    &quot;{item.referencia}&quot;
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <h6 className="text-center text-xl font-montserrat text-vinarmBeige font-bold capitalize">
        Dejanos tu referencia
      </h6>
      <div className="flex mt-4 text-vinarmBeige items-center justify-center">
        <FaArrowDown />
      </div>
      <Link href="/" className="flex items-center mt-6 justify-center">
        <Button
          variant={'default'}
          className="bg-vinarmBeige text-base w-[160px] text-vinarmBlack hover:bg-vinarmYellow"
        >
          Click aquí
        </Button>
      </Link>
    </section>
  )
}
export default TestimonialSlide
