import { portraitAlbum } from "@/assets/s3Constants";
import { GalleryCollection } from "@/features/galleryCollection";

export default async function PortraitPage() {
  return (
    <article>
      {/* @ts-expect-error Async Server Component */}
      <GalleryCollection album={portraitAlbum} />
    </article>
  )
}
