import axios from "axios";

class Api {
  constructor() {
    this.baseUrl = "https://api.stackexchange.com/2.2/";
  }

  getTags() {
    const url = `${this.baseUrl}tags?order=desc&sort=popular&site=stackoverflow`;
    return axios.get(url).then((response) => response.data.items);
  }

}

export default Api;
