import React from 'react';

type Props = {
  imgUrl: string,
  openModalSlideshow: (slideIndex: number) => void,
  slideIndex: number
}
const Thumbnail = ({ imgUrl, openModalSlideshow, slideIndex }: Props) => {

  return (
    <figure onClick={() => openModalSlideshow(slideIndex)} className={' relative after:content-[""] after:block after:pb-[100%]'}>
      <img loading='lazy' src={imgUrl} alt={imgUrl.substring(imgUrl.lastIndexOf("/") + 1, imgUrl.lastIndexOf("."))} className='hover:opacity-80 transition-opacity cursor-pointer w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0 ' />
    </figure>
  );
};

export default React.memo(Thumbnail);
