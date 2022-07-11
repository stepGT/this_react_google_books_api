import axios from 'axios';

export const fetchBooksLoadMore = async (q: string, orderBy: string, startIndex: number, maxResults: number) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_GOOGLEAPIS_BOOKS_V1}?q=${q}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`,
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
