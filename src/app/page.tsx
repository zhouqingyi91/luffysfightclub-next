import { homepageAlbum } from "@/assets/s3Constants";
import { PageCollection } from "@/features/pageCollection";

export default async function Home() {

  return (
    <article>
      {/* @ts-expect-error Async Server Component */}
      <PageCollection album={homepageAlbum} />
    </article>
  )
}
