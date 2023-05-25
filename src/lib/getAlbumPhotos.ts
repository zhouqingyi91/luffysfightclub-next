export type ImgData = {
  imgName: string
}
export default async function getAlbumPhotos(album: string): Promise<ImgData[] | undefined> {
  const res = await fetch(
    `https://zerraccfbd.execute-api.us-west-2.amazonaws.com/dev/s3/album/${album}`,
    { next: { revalidate: 86400 } })

  if (!res.ok) return undefined

  return res.json();
}
