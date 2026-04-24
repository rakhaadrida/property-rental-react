export function getImageSrc(url?: string) {
  return url && url.trim() !== "" ? url : "/assets/images/no-image.png";
}
