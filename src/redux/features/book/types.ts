// From server
export type TBookSlice = {
  items: TBookItem[];
  status: string;
  error: any;
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

export type TSearchParams = {
  q: string;
  orderBy: string;
  startIndex: string;
  maxResults: string;
};

export enum EStatusBook {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}
