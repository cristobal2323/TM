import axios from "axios";

const API = {
  data: {
    async addTaskAccept(obj) {
      const response = await axios.post(`/api/taskAccept`, obj);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async addTaskImage(obj) {
      const response = await axios.post(`/api/taskAddImage`, obj);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async deleteTaskImage(obj) {
      const response = await axios.post(`/api/taskDeleteImage`, obj);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async updateOther(obj) {
      const response = await axios.post(`/api/updateOther`, obj);
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
