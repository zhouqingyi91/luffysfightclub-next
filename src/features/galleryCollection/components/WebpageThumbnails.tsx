'use client';

import { bucketPathPrefix } from "@/assets/s3Constants";
import { ImgData } from "@/lib/getAlbumPhotos";
import { useCallback, useState } from "react";
import SlideshowModal from "./SlideshowModal";
import Thumbnail from "./Thumbnail";

type Props = {
  imgData: ImgData[]
}

export default function WebpageThumbnails({ imgData }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [slideIndex, setSlideIndex] = useState(-1);

  const openModalSlideshow = useCallback((idx: number) => {
    setSlideIndex(idx);
    setOpenModal(true);
  }, [])
  const closeModal = () => {
    setOpenModal(false);
  }

  const prevSlideHandler = () => {
    const newSlideIndex = slideIndex === 0 ? imgData.length - 1 : slideIndex - 1;
    setSlideIndex(newSlideIndex);
  }

  const nextSlideHandler = () => {
    const newSlideIndex = slideIndex === imgData.length - 1 ? 0 : slideIndex + 1;
    setSlideIndex(newSlideIndex)
  }
  return (
    <section className="hidden md:block">
      {openModal && <SlideshowModal
        imgData={imgData}
        nextSlide={nextSlideHandler}
        prevSlide={prevSlideHandler}
        slideIndex={slideIndex}
        closeModal={closeModal}
      />}
      <section className='grid gap-4 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 6xl:grid-cols-7 7xl:grid-cols-8 8xl:grid-cols-9 9xl:grid-cols-10 10xl:grid-cols-11 11xl:grid-cols-12 12xl:grid-cols-16 13xl:grid-cols-20'>
        {imgData?.map(({ imgName }, idx) => {
          return (
            <Thumbnail
              openModalSlideshow={openModalSlideshow}
              key={imgName}
              imgUrl={bucketPathPrefix + imgName}
              slideIndex={idx}
            />
          )
        })}
      </section>
    </section>
  )
}
