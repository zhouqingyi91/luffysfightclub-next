'use client';

import { ImgData } from '@/lib/getAlbumPhotos';
import { useEffect } from 'react';
import { bucketPathPrefix } from '../../../assets/s3Constants';

type PropsType = {
  imgData: ImgData[],
  slideIndex: number,
  closeModal: () => void,
  nextSlide: () => void,
  prevSlide: () => void
}
const SlideshowModal = ({ imgData, slideIndex, closeModal, nextSlide, prevSlide }: PropsType) => {

  const imgUrl = bucketPathPrefix + imgData[slideIndex].imgName;

  useEffect(() => {
    const handleEscAndArrow = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    }
    document.addEventListener('keydown', handleEscAndArrow);
    return () => {
      document.removeEventListener('keydown', handleEscAndArrow);
    }
  }, [slideIndex]);


  return (
    <section className='z-10 flex items-center justify-center bg-default-bg fixed top-0 bottom-0 right-20 left-[336px] '>
      <button onClick={closeModal} className='z-10 text-5xl hover:text-white absolute top-5 right-5'>&times;</button>
      <button onClick={prevSlide} className='z-10 absolute left-5 top-1/2 -translate-y-1/2 text-3xl hover:text-white'>&#10094;</button>
      <button onClick={nextSlide} className='z-10 absolute right-5 top-1/2 -translate-y-1/2  text-3xl  hover:text-white'>&#10095;</button>

      <div onClick={prevSlide} className='absolute top-1/2 -translate-y-1/2 h-1/2 w-1/5 left-0 cursor-w-resize'></div>
      <div onClick={nextSlide} className='absolute top-1/2 -translate-y-1/2 h-1/2 w-1/5 left-[80%] cursor-e-resize'></div>

      <img className='w-4/5 h-4/5 object-contain' src={imgUrl} alt={imgData[slideIndex].imgName.substring(imgData[slideIndex].imgName.lastIndexOf("/") + 1, imgData[slideIndex].imgName.lastIndexOf("."))} />
    </section>
  )
};

export default SlideshowModal;