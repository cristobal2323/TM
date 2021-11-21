import axios from "axios";

const API = {
  data: {
    async getLogin(obj) {
      const response = await axios.post(`/api/signin`, obj);

      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async postRegister(obj) {
      const response = await axios.post(`/api/signup`, obj);

      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getLaboratory(obj) {
      const response = await axios.get("/api/laboratoryAll");
      const { status } = response;
      let data = await response.data;
      return {
        data,
        status,
      };
    },
  },
};
export default API;
