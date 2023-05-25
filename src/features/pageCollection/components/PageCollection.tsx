import PageImgContainer from './PageImgContainer';
import { bucketPathPrefix } from '../../../assets/s3Constants'
import getAlbumPhotos from '@/lib/getAlbumPhotos';

const PageCollection = async ({ album }: { album: string }) => {
  const photos = await getAlbumPhotos(album);

  return (
    <section className='md:flex md:flex-wrap'>
      {photos?.map(({ imgName }) => {
        const caption = imgName.substring(imgName.lastIndexOf('/') + 1, imgName.lastIndexOf('.'));
        return <PageImgContainer
          imgUrl={bucketPathPrefix + imgName}
          caption={caption}
          key={caption}
        />
      })}
    </section>
  );
};

export default PageCollection;