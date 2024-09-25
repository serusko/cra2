// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { UseQueryResult } from "@tanstack/react-query";
import { AuthService, DodavateliaService, KlientiService, KontaktneOsobyDodavatelaService, UzivateliaService } from "../requests/services.gen";
export type KlientiServiceGetClientsDefaultResponse = Awaited<ReturnType<typeof KlientiService.getClients>>;
export type KlientiServiceGetClientsQueryResult<TData = KlientiServiceGetClientsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useKlientiServiceGetClientsKey = "KlientiServiceGetClients";
export const UseKlientiServiceGetClientsKeyFn = ({ count }: {
  count?: string;
} = {}, queryKey?: Array<unknown>) => [useKlientiServiceGetClientsKey, ...(queryKey ?? [{ count }])];
export type KlientiServiceGetClientsByIdDefaultResponse = Awaited<ReturnType<typeof KlientiService.getClientsById>>;
export type KlientiServiceGetClientsByIdQueryResult<TData = KlientiServiceGetClientsByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useKlientiServiceGetClientsByIdKey = "KlientiServiceGetClientsById";
export const UseKlientiServiceGetClientsByIdKeyFn = ({ id }: {
  id: string;
}, queryKey?: Array<unknown>) => [useKlientiServiceGetClientsByIdKey, ...(queryKey ?? [{ id }])];
export type KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsDefaultResponse = Awaited<ReturnType<typeof KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersons>>;
export type KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsQueryResult<TData = KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsKey = "KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersons";
export const UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsKeyFn = ({ suppid }: {
  suppid: number;
}, queryKey?: Array<unknown>) => [useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsKey, ...(queryKey ?? [{ suppid }])];
export type KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdDefaultResponse = Awaited<ReturnType<typeof KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersonsById>>;
export type KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdQueryResult<TData = KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdKey = "KontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsById";
export const UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdKeyFn = ({ id, suppid }: {
  id: number;
  suppid: number;
}, queryKey?: Array<unknown>) => [useKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdKey, ...(queryKey ?? [{ id, suppid }])];
export type DodavateliaServiceGetSuppliersDefaultResponse = Awaited<ReturnType<typeof DodavateliaService.getSuppliers>>;
export type DodavateliaServiceGetSuppliersQueryResult<TData = DodavateliaServiceGetSuppliersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDodavateliaServiceGetSuppliersKey = "DodavateliaServiceGetSuppliers";
export const UseDodavateliaServiceGetSuppliersKeyFn = (queryKey?: Array<unknown>) => [useDodavateliaServiceGetSuppliersKey, ...(queryKey ?? [])];
export type DodavateliaServiceGetSuppliersByIdDefaultResponse = Awaited<ReturnType<typeof DodavateliaService.getSuppliersById>>;
export type DodavateliaServiceGetSuppliersByIdQueryResult<TData = DodavateliaServiceGetSuppliersByIdDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useDodavateliaServiceGetSuppliersByIdKey = "DodavateliaServiceGetSuppliersById";
export const UseDodavateliaServiceGetSuppliersByIdKeyFn = ({ id }: {
  id: number;
}, queryKey?: Array<unknown>) => [useDodavateliaServiceGetSuppliersByIdKey, ...(queryKey ?? [{ id }])];
export type UzivateliaServiceGetApiUsersDefaultResponse = Awaited<ReturnType<typeof UzivateliaService.getApiUsers>>;
export type UzivateliaServiceGetApiUsersQueryResult<TData = UzivateliaServiceGetApiUsersDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useUzivateliaServiceGetApiUsersKey = "UzivateliaServiceGetApiUsers";
export const UseUzivateliaServiceGetApiUsersKeyFn = (queryKey?: Array<unknown>) => [useUzivateliaServiceGetApiUsersKey, ...(queryKey ?? [])];
export type AuthServicePostAuthLoginMutationResult = Awaited<ReturnType<typeof AuthService.postAuthLogin>>;
export type AuthServicePostAuthMeMutationResult = Awaited<ReturnType<typeof AuthService.postAuthMe>>;
export type AuthServicePostAuthLogoutMutationResult = Awaited<ReturnType<typeof AuthService.postAuthLogout>>;
export type KontaktneOsobyDodavatelaServicePostSuppliersBySuppidContactPersonsMutationResult = Awaited<ReturnType<typeof KontaktneOsobyDodavatelaService.postSuppliersBySuppidContactPersons>>;
export type DodavateliaServicePostSuppliersMutationResult = Awaited<ReturnType<typeof DodavateliaService.postSuppliers>>;
export type KontaktneOsobyDodavatelaServicePatchSuppliersBySuppidContactPersonsByIdMutationResult = Awaited<ReturnType<typeof KontaktneOsobyDodavatelaService.patchSuppliersBySuppidContactPersonsById>>;
export type DodavateliaServicePatchSuppliersByIdMutationResult = Awaited<ReturnType<typeof DodavateliaService.patchSuppliersById>>;
export type KontaktneOsobyDodavatelaServiceDeleteSuppliersBySuppidContactPersonsByIdMutationResult = Awaited<ReturnType<typeof KontaktneOsobyDodavatelaService.deleteSuppliersBySuppidContactPersonsById>>;
export type DodavateliaServiceDeleteSuppliersByIdMutationResult = Awaited<ReturnType<typeof DodavateliaService.deleteSuppliersById>>;
