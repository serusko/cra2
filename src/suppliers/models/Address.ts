export default interface Address {
  id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  deleted_at: string | null;
  street_name: string;
  number: string;
  town: string;
  psc: string; // Postal code
  country_id: number;
}
