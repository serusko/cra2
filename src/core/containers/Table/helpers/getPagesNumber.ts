export default function getPagesNumber(length: number, limit: number) {
  if (limit <= 1) {
    return length;
  }

  const v = length / limit;
  const vc = Math.ceil(v);

  return vc + (vc < v ? 1 : 0);
}
