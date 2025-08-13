"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

type SlideImage = {
    src: string;
    alt: string;
};

type CustomSwiperProps = {
    images: SlideImage[];
    className?: string;
    imageClassName?: string;
    height?: number;
    slidesPerView?: number;
    spaceBetween?: number;
    arrow?: boolean;
    autoplay?: boolean;
    pagination?: boolean;
};

export default function CustomSwiper({
    images,
    className,
    imageClassName,
    height = 400,
    slidesPerView = 1,
    spaceBetween = 30,
    arrow = true,
    pagination = true,
    autoplay = true,
}: CustomSwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={arrow}
            pagination={pagination ? { clickable: true } : false}
            autoplay={autoplay ? { delay: 3000 } : false}
            className={className}
        >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="relative w-full"
                        style={{ height: `${height}px` }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={imageClassName}
                            priority={index === 0}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}