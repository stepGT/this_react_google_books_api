// From server
export type TBookSlice = {
  items: TBookItem[];
  status: string;
  error: any;
  totalItems: number;
};

export type TBookItem = {
  id: string;
  etag: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    imageLinks: {
      thumbnail: string;
    };
    title: string;
  };
};

export enum EStatusBook {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}
