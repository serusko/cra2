// auth/me response model

export default interface User {
  /** Auto-Incremented Number */
  id: number;
  /** Full-name */
  name: string;
  /** login email */
  email: string;
  /** DateTime */
  email_verified_at: string;
  /** DateTime */
  created_at: string;
  /** DateTime */
  updated_at: string;
}
