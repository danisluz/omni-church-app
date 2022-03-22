export interface Address {
  id?: number;
  street: string;
  number: string;
  apartment?: string;
  zip_code: string;
  district: string;
  city: string;
  state: string;
  createdAt: string;
  updatetedAt: string;
  church_id?: number;
  member_id?: number;
  congregation_id?: number;
}
