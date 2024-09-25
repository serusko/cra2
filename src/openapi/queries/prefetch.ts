// generated with @7nohe/openapi-react-query-codegen@1.6.1 

import { type QueryClient } from "@tanstack/react-query";
import { DodavateliaService, KlientiService, KontaktneOsobyDodavatelaService, UzivateliaService } from "../requests/services.gen";
import * as Common from "./common";
export const prefetchUseKlientiServiceGetClients = (queryClient: QueryClient, { count }: {
  count?: string;
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseKlientiServiceGetClientsKeyFn({ count }), queryFn: () => KlientiService.getClients({ count }) });
export const prefetchUseKlientiServiceGetClientsById = (queryClient: QueryClient, { id }: {
  id: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseKlientiServiceGetClientsByIdKeyFn({ id }), queryFn: () => KlientiService.getClientsById({ id }) });
export const prefetchUseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersons = (queryClient: QueryClient, { suppid }: {
  suppid: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsKeyFn({ suppid }), queryFn: () => KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersons({ suppid }) });
export const prefetchUseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsById = (queryClient: QueryClient, { id, suppid }: {
  id: number;
  suppid: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseKontaktneOsobyDodavatelaServiceGetSuppliersBySuppidContactPersonsByIdKeyFn({ id, suppid }), queryFn: () => KontaktneOsobyDodavatelaService.getSuppliersBySuppidContactPersonsById({ id, suppid }) });
export const prefetchUseDodavateliaServiceGetSuppliers = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseDodavateliaServiceGetSuppliersKeyFn(), queryFn: () => DodavateliaService.getSuppliers() });
export const prefetchUseDodavateliaServiceGetSuppliersById = (queryClient: QueryClient, { id }: {
  id: number;
}) => queryClient.prefetchQuery({ queryKey: Common.UseDodavateliaServiceGetSuppliersByIdKeyFn({ id }), queryFn: () => DodavateliaService.getSuppliersById({ id }) });
export const prefetchUseUzivateliaServiceGetApiUsers = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseUzivateliaServiceGetApiUsersKeyFn(), queryFn: () => UzivateliaService.getApiUsers() });
