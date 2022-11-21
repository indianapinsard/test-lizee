export interface ItemImageType {
  cachedPath: string;
};

export interface ItemType {
  slug: string;
  name: string;
  shortDescription: string;
  images: ItemImageType[];
};

export interface ItemSizeType {
  name: string;
  code: string;
};

export interface VariantType {
  code: string;
  name: string;
  price: {
    current: number;
    currency: string;
  };
};

export interface ItemDataType {
  name: string;
  description: string;
  images: ItemImageType[];
  variants: Record<string,VariantType>
};

export interface ItemListResponseType {
  page: number;
  pages: number;
  items: ItemType[];
};
