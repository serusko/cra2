// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { AuthService, DodavateliaService, KlientiService, KontaktneOsobyDodavatelaService, UzivateliaService } from "../requests/services.gen";
import * as Common from "./common";
export const useKlientiServiceGetClients = <TData = Common.KlientiServiceGetClientsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ count }: {
  count?: string;
} = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseKlientiServiceGetClientsKeyFn({ count }, queryKey), queryFn: () => KlientiService.getClients({ count }) as TData, ...options });
export const useKlientiServiceGetClientsById = <TData = Common.KlientiServiceGetClientsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseKlientiServiceGetClientsByIdKeyFn({ id }, queryKey), queryFn: () => KlientiService.getClientsById({ id }) as TData, ...options });
export const useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersons = <TData = Common.KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ suppid }: {
  suppid: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsKeyFn({ suppid }, queryKey), queryFn: () => KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersons({ suppid }) as TData, ...options });
export const useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsById = <TData = Common.KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, suppid }: {
  id: number;
  suppid: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdKeyFn({ id, suppid }, queryKey), queryFn: () => KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersonsById({ id, suppid }) as TData, ...options });
export const useDodavateliaServiceGetSuppliers = <TData = Common.DodavateliaServiceGetSuppliersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDodavateliaServiceGetSuppliersKeyFn(queryKey), queryFn: () => DodavateliaService.getSuppliers() as TData, ...options });
export const useDodavateliaServiceGetSuppliersById = <TData = Common.DodavateliaServiceGetSuppliersByIdDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
  id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseDodavateliaServiceGetSuppliersByIdKeyFn({ id }, queryKey), queryFn: () => DodavateliaService.getSuppliersById({ id }) as TData, ...options });
export const useUzivateliaServiceGetApiUsers = <TData = Common.UzivateliaServiceGetApiUsersDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>(queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseUzivateliaServiceGetApiUsersKeyFn(queryKey), queryFn: () => UzivateliaService.getApiUsers() as TData, ...options });
export const useAuthServicePostAuthLogin = <TData = Common.AuthServicePostAuthLoginMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AuthService.postAuthLogin() as unknown as Promise<TData>, ...options });
export const useAuthServicePostAuthMe = <TData = Common.AuthServicePostAuthMeMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AuthService.postAuthMe() as unknown as Promise<TData>, ...options });
export const useAuthServicePostAuthLogout = <TData = Common.AuthServicePostAuthLogoutMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => AuthService.postAuthLogout() as unknown as Promise<TData>, ...options });
export const useKontaktneOsobyDodavatelaServicePostSuppliersBySuppidContactPersons = <TData = Common.KontaktneOsobyDodavatelaServicePostSuppliersBySuppidContactPersonsMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  suppid: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  suppid: number;
}, TContext>({ mutationFn: ({ suppid }) => KontaktneOsobyDodavatelaService.postSuppliersBySuppidContactPersons({ suppid }) as unknown as Promise<TData>, ...options });
export const useDodavateliaServicePostSuppliers = <TData = Common.DodavateliaServicePostSuppliersMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, void, TContext>, "mutationFn">) => useMutation<TData, TError, void, TContext>({ mutationFn: () => DodavateliaService.postSuppliers() as unknown as Promise<TData>, ...options });
export const useKontaktneOsobyDodavatelaServicePatchSuppliersBySuppidContactPersonsById = <TData = Common.KontaktneOsobyDodavatelaServicePatchSuppliersBySuppidContactPersonsByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  suppid: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  suppid: number;
}, TContext>({ mutationFn: ({ id, suppid }) => KontaktneOsobyDodavatelaService.patchSuppliersBySuppidContactPersonsById({ id, suppid }) as unknown as Promise<TData>, ...options });
export const useDodavateliaServicePatchSuppliersById = <TData = Common.DodavateliaServicePatchSuppliersByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => DodavateliaService.patchSuppliersById({ id }) as unknown as Promise<TData>, ...options });
export const useKontaktneOsobyDodavatelaServiceDeleteSuppliersBySuppidContactPersonsById = <TData = Common.KontaktneOsobyDodavatelaServiceDeleteSuppliersBySuppidContactPersonsByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
  suppid: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
  suppid: number;
}, TContext>({ mutationFn: ({ id, suppid }) => KontaktneOsobyDodavatelaService.deleteSuppliersBySuppidContactPersonsById({ id, suppid }) as unknown as Promise<TData>, ...options });
export const useDodavateliaServiceDeleteSuppliersById = <TData = Common.DodavateliaServiceDeleteSuppliersByIdMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
  id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
  id: number;
}, TContext>({ mutationFn: ({ id }) => DodavateliaService.deleteSuppliersById({ id }) as unknown as Promise<TData>, ...options });
