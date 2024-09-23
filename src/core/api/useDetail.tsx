import { DefaultError, useQuery } from '@tanstack/react-query';

interface DetailResponse<D> {
  data: D;
}

export default function useDetail<D>(url: string) {
  // @ts-ignore TODO: ... url ...
  return useQuery<unknown, DefaultError, DetailResponse<D>>({ queryKey: [url] });
}
