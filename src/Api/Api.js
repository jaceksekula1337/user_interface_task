import axios from "axios";

class Api {
  constructor() {
    this.baseUrl = "https://api.stackexchange.com/2.2/";
  }

  async getTagsWithState() {
    const url = `${this.baseUrl}tags?order=desc&sort=popular&site=stackoverflow`;

    try {
      const response = await axios.get(url);
      return {
        tags: response.data.items,
        error: null,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        tags: [],
        error: error.message,
      };
    }
  }

  getTags() {
    return this.getTagsWithState().then((response) => response.tags);
  }
}

export default Api;
