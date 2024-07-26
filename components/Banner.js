import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css'
import { Pagination, Navigation } from 'swiper/modules'

const images = [
  'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
  'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
]
export default function Banner() {
  return (
    <section>
      <Swiper
        loop
        pagination={true}
        navigation
        modules={[Pagination, Navigation]}
        className="!h-[750px] !rounded-3xl !w-[98%]"
        style={{
          '--swiper-navigation-color': '#FEFEFE',
          '--swiper-pagination-color': '#FEFEFE',
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
