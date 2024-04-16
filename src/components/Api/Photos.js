import axios from "axios";

const API_KEY = "3jJQzJDxECaGcqKlznxLi12ZuERIW6RvWp_lWJqN0A8";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers["Authorization"] = `Client-ID ${API_KEY}`;
// axios.defaults.headers.common["Version"] = "Accept-Version: v1";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos?page=${page}&query=${query}`);

  return data;
};