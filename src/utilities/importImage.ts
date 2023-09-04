export function importCover(imageCover: string) {
  if (imageCover.startsWith("http")) {
    return imageCover;
  }
  const cover = require(`/public/img/${imageCover}`);
  return cover.default;
}
