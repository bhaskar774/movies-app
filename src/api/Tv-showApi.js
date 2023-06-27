import axios from "axios";
import { BASE_URL, API_KEY } from "../config";
import { FAKE_POPULARS, FAKE_RECOMMENDATION_DATA } from "./fake_data";

export class TvShowApi {
  static async fetchPopulars() {
    let response = await axios.get(`${BASE_URL}movie/popular${API_KEY}`);

    return response.data.results;
    // return FAKE_POPULARS;
  }
  static async fetchRecommendations(tvShowId) {
    let response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY}`
    );

    return response.data.results;
    // return FAKE_RECOMMENDATION_DATA;
  }
  static async fetchByTitle(title) {
    let response = await axios.get(
      `${BASE_URL}/search/tv${API_KEY}&query=${title}`
    );

    return response.data.results;
    // return FAKE_RECOMMENDATION_DATA;
  }
}
