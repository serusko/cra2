import { DefaultError, useQuery } from '@tanstack/react-query';

interface ListResponse<D> {
  data: D[];
  payload: {
    first_page_url: string;
    prev_page_url: string;
    items_per_page: number;
    last_page: number;
    page: number;
    from: number;
    to: number;
    total: number;
  };
}

export default function useList<D>(url: string) {
  // @ts-ignore TODO: ... url ...
  return useQuery<unknown, DefaultError, ListResponse<D>>({ queryKey: [url] });
}
