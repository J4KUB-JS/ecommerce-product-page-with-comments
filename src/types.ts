export interface cartItem {
  productName: string;
  price: number;
  amount: number;
  size: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type photo = { id: number; src: any };

export interface photos {
  currentPhoto: photo;
  allPhotos: { [key: string]: photo };
  photosCount: number;
}
