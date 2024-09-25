// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { DodavateliaService, KlientiService, KontaktneOsobyDodavatelaService, UzivateliaService } from "../requests/services.gen";
import * as Common from "./common";
export const useKlientiServiceGetClientsSuspense = <TData = Common.KlientiServiceGetClientsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ count }: {
  count?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseKlientiServiceGetClientsKeyFn({ count }, queryKey), queryFn: () => KlientiService.getClients({ count }) as TData, ...options });
export const useKlientiServiceGetClientsByIdSuspense = <TData = Common.KlientiServiceGetClientsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseKlientiServiceGetClientsByIdKeyFn({ id }, queryKey), queryFn: () => KlientiService.getClientsById({ id }) as TData, ...options });
export const useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsSuspense = <TData = Common.KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ suppid }: {
  suppid: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsKeyFn({ suppid }, queryKey), queryFn: () => KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersons({ suppid }) as TData, ...options });
export const useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdSuspense = <TData = Common.KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, suppid }: {
  id: number;
  suppid: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdKeyFn({ id, suppid }, queryKey), queryFn: () => KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersonsById({ id, suppid }) as TData, ...options });
export const useDodavateliaServiceGetSuppliersSuspense = <TData = Common.DodavateliaServiceGetSuppliersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDodavateliaServiceGetSuppliersKeyFn(queryKey), queryFn: () => DodavateliaService.getSuppliers() as TData, ...options });
export const useDodavateliaServiceGetSuppliersByIdSuspense = <TData = Common.DodavateliaServiceGetSuppliersByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseDodavateliaServiceGetSuppliersByIdKeyFn({ id }, queryKey), queryFn: () => DodavateliaService.getSuppliersById({ id }) as TData, ...options });
export const useUzivateliaServiceGetApiUsersSuspense = <TData = Common.UzivateliaServiceGetApiUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useSuspenseQuery<TData, TError>({ queryKey: Common.UseUzivateliaServiceGetApiUsersKeyFn(queryKey), queryFn: () => UzivateliaService.getApiUsers() as TData, ...options });
