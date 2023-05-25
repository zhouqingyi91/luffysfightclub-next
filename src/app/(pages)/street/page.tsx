import { streetAlbum } from "@/assets/s3Constants";
import { GalleryCollection } from "@/features/galleryCollection";

export default async function StreetPage() {
  return (
    <article>
      {/* @ts-expect-error Async Server Component */}
      <GalleryCollection album={streetAlbum} />
    </article>
  )
}
