import axios from 'axios';

const ACCESS_KEY = 'rGEYlzYsQCd3aojwSTVw88n5302as3KtfpihGZ0iOkE'; // заміни на свій ключ
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: ACCESS_KEY,
    },
  });

  return {
    images: response.data.results,
    totalPages: Math.ceil(response.data.total / perPage),
  };
};
