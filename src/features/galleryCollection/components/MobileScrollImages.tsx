import { ImgData } from "@/lib/getAlbumPhotos";
import { bucketPathPrefix } from "../../../assets/s3Constants";

type Props = {
  imgData: ImgData[];
}
const MobileScrollImages = ({ imgData }: Props) => {

  return (
    <section className='md:hidden space-y-5'>
      {imgData.map(({ imgName }) => {
        return <img loading="lazy" key={imgName} src={bucketPathPrefix + imgName} alt={imgName.substring(0, imgName.lastIndexOf("."))} />
      })}
    </section>
  );
};

export default MobileScrollImages;