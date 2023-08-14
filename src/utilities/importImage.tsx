export function importCover(imageCover: string) {
  const cover = require(`/public/img/${imageCover}`);
  return cover.default;
}
