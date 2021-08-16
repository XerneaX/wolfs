export interface IAddress {
  id?: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  stateProvince?: string | null;
  country?: string | null;
}

export const defaultValue: Readonly<IAddress> = {};
