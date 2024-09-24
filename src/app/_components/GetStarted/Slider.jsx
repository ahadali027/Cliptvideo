"use client";

import img_1 from "../../../../public/images/future_video_sec/image-1.webp";
import img_2 from "../../../../public/images/future_video_sec/img_2.webp";
import img_3 from "../../../../public/images/future_video_sec/img_3.webp";
import img_4 from "../../../../public/images/future_video_sec/img_4.webp";
import img_5 from "../../../../public/images/future_video_sec/img_5.webp";
import img_6 from "../../../../public/images/future_video_sec/img_6.webp";
import img_7 from "../../../../public/images/future_video_sec/img_7.webp";
import img_8 from "../../../../public/images/future_video_sec/img_8.webp";
import img_9 from "../../../../public/images/future_video_sec/img_9.webp";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Carouseles() {
  const Autoscr = React.useRef(AutoScroll({ playOnInit: true, startDelay: 0 }));

  return (
    <Carousel
      plugins={[Autoscr.current]}
      opts={{ loop: true }}
      className="w-full "
      
    >
      <CarouselContent className="max-w-sm py-5 mt-10">
        <CarouselItem>
          <div className="border-8 border-white border-opacity-15 rounded-3xl  ">
            <Image src={img_1} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_2} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_3} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_4} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_5} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_6} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_7} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl ">
            <Image src={img_8} className="rounded-2xl" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className=" border-8 border-white border-opacity-15 rounded-3xl  ">
            <Image src={img_9} className="rounded-2xl" />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
