import Image from "next/image";
import React from "react";
import img1 from "../../../../public/images/Guide_images/6638582be7ee1498f060a31b_Thumbnail-p-500.jpg";
import img2 from "../../../../public/images/Guide_images/663864bc248c9068f0f0d4ed_Thumbnail (1)-p-500.jpg";
import img3 from "../../../../public/images/Guide_images/6638652819a4b4e588abb27a_Thumbnail (2)-p-500.jpg";
import img4 from "../../../../public/images/Guide_images/663865c1fa51552f449dca00_Thumbnail (3)-p-500.jpg";
import img5 from "../../../../public/images/Guide_images/6638660ddd2ab7f762bae96a_Thumbnail (4)-p-500.jpg";
import img6 from "../../../../public/images/Guide_images/663866441ea8f761f521b94e_Thumbnail (5)-p-500.jpg";
import img7 from "../../../../public/images/Guide_images/6638670f5c61c859b38d27a3_Thumbnail (6)-p-500.jpg";
import img8 from "../../../../public/images/Guide_images/6638673f19a4b4e588ad7051_Thumbnail (7)-p-500.jpg";
import img9 from "../../../../public/images/Guide_images/663867a07a69f37938e0e2cf_Thumbnail (8)-p-500.jpg";
import img10 from "../../../../public/images/Guide_images/66386851248c9068f0f3b042_Thumbnail (9)-p-500.jpg";
import img11 from "../../../../public/images/Guide_images/663868bf562959792ad38806_Thumbnail (10)-p-500.jpg";
import img12 from "../../../../public/images/Guide_images/6638690acfa7136ec126976a_Thumbnail (11)-p-500.jpg";
import img13 from "../../../../public/images/Guide_images/66386955d97c361d51e99e59_Thumbnail (12)-p-500.jpg";
import img14 from "../../../../public/images/Guide_images/66386998dd2ab7f762bdef1e_Thumbnail (13)-p-500.jpg";
import img15 from "../../../../public/images/Guide_images/663869d4690fe2f8076b0f00_Thumbnail (14)-p-500.jpg";
import img16 from "../../../../public/images/Guide_images/6638582be7ee1498f060a31b_Thumbnail-p-500.jpg";
import img17 from "../../../../public/images/Guide_images/6638582be7ee1498f060a31b_Thumbnail-p-500.jpg";
import img18 from "../../../../public/images/Guide_images/6638582be7ee1498f060a31b_Thumbnail-p-500.jpg";

const Images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
];

function Cards() {
  return (
    <div className="text-white grid max-w-7xl mt-16 mx-auto lg:grid-cols-3 sm:grid-cols-2 gap-6 px-10 ">
      {Images.map((img, index)=>{
        return <Cardss img={img} key={index}/>
      })}
    </div>
  );
}
const Cardss = ({img}) => {
  return (
    <div className="bg-white/5 hover:scale-105 duration-500 hover:bg-white/10 border border-white/10 hover:border-white/20 w-full flex flex-col px-2 py-2 rounded-lg items-center">
      <Image src={img} className="w-full rounded-lg" />
      <h1 className="text-center pt-3  text-base w-full">
        Should I Outsource Video Editing?
      </h1>
    </div>
  );
};

export default Cards;
