import React from "react";
import CustomSwiper from "@/components/ui/CustomSwiper/CustomSwiper";
import CategoryGrid from "../../components/shop/CategoryGrid";
import { CATEGORIES } from "../../data/categories";

interface HomeProps {
  slidesPerView?: number;
  spaceBetween?: number;
  arrow?: boolean;
  pagination?: boolean;
  autoplay?: boolean;
  imageClassName?: string;
  className?: string;
}

export default function Home({
  slidesPerView = 6,
  spaceBetween = 10,
  arrow = false,
  pagination = false,
  autoplay = false,
  className,
  imageClassName= "rounded-3xl",
}: HomeProps) {
  return (
    <main>
      <div className="container m-auto">
        <section className="mt-6">
          <CustomSwiper
            height={350}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            arrow={arrow}
            pagination={pagination}
            autoplay={autoplay}
            className={className}
            imageClassName={imageClassName}
            images={[
              { src: "/swiper-images/slide_1.jpg", alt: "Sushi Promo Slide" },
              { src: "/swiper-images/slide_2.jpg", alt: "Sushi Promo Slide" },
              { src: "/swiper-images/slide_3.jpg", alt: "Sushi Promo Slide" },
              { src: "/swiper-images/slide_4.jpg", alt: "Sushi Promo Slide" },
              { src: "/swiper-images/slide_5.jpg", alt: "Sushi Promo Slide" },
              { src: "/swiper-images/slide_6.jpg", alt: "Sushi Promo Slide" },
              { src: "/swiper-images/slide_7.jpg", alt: "Sushi Promo Slide" },
            ]}
          />
        </section>
        <section className="mt-10">
          <h2 className="font-secondary text-4xl font-bold mb-6">Categorii</h2>
          <CategoryGrid categories={CATEGORIES} />
        </section>
      </div>
    </main>
  );
}
