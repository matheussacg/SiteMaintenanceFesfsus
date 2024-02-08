'use client';

import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const data = [
    { id: '1', image: 'https://media.istockphoto.com/id/1337232523/pt/foto/high-angle-view-of-a-lake-and-forest.jpg?s=2048x2048&w=is&k=20&c=0EZqyyZ_IJmRvdxEPQp4yK3LSk3kdYU9eyIOo56dFMY=' },
    { id: '2', image: 'https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=2048x2048&w=is&k=20&c=2TGA0cyeoOVzKZTZpMMNKy-Tj9nNT7NO33Z7Lf3f9nE=' },
    { id: '3', image: 'https://media.istockphoto.com/id/178149253/pt/foto/fundo-de-espa%C3%A7o-profundo.jpg?s=2048x2048&w=is&k=20&c=bskC1HCEv7tvxv0ZF9XFR6SX3cHfsvttG5XbZUgHezs=' },
    { id: '4', image: 'https://media.istockphoto.com/id/471926619/pt/foto/lago-moraine-ao-nascer-do-sol-parque-nacional-de-banff-canad%C3%A1.jpg?s=2048x2048&w=is&k=20&c=1lNY2obtG8y7CQ2bCRUJU4kU-96NqTFO3gUm1AtoUxs=' },
]

export default function Slide() {
    return (
        <div className="w-full max-w-screen-2xl m-0 mb-28">

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                effect='fade'
                spaceBetween={50}
                slidesPerView={1}   
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 5000 }}
                >
                {data.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt='Slider'
                            className='w-full object-cover md:h-[28rem] xl:h-[34rem]'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
