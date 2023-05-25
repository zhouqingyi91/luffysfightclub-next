import getAlbumPhotos from "@/lib/getAlbumPhotos";
import MobileScrollImages from "./MobileScrollImages";
import WebpageThumbnails from "./WebpageThumbnails"

type Props = {
  album: string
}
export default async function GalleryCollection({ album }: Props) {
  const imgData = await getAlbumPhotos(album);
  if (!imgData) {
    throw new Error('get album photos error')
  }
  return (
    <>
      <MobileScrollImages imgData={imgData} />
      <WebpageThumbnails imgData={imgData} />
    </>
  )
}
