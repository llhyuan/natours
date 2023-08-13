export function importCover(imageCover: string) {
  const cover = require(`/public/img/tours/${imageCover}`);
  return cover.default;
}
