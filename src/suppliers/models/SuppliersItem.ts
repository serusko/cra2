import Address from './Address';
import ContactPerson from './ContactPerson';

export default interface SuppliersItem {
  id: number;
  name: string;
  headquarters_address_id: number;
  mail_address_id: number;
  days_of_invoices: number;
  ico: string; // Company identifier
  dic: string; // Tax identifier
  ic_dph: string; // VAT identifier
  dph_payer: number; // Boolean as 0 or 1
  iban: string;
  bank: string;
  swift_code: string;
  provide_electricity: number; // Boolean as 0 or 1
  provide_gas: number; // Boolean as 0 or 1
  address_one_line: Address;
  first_contact_person_one_line: string;
  provide_one_line: string;
  repurchase_one_line: string;
  contact_persons: ContactPerson[];
  address: Address;
  mail_address: Address;
  notes: string[]; // Assuming notes is an array, could specify further if needed
}
