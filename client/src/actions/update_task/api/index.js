import axios from "axios";

const API = {
  data: {
    async getTaskId(obj) {
      const response = await axios.get(
        `/api/taskId/${encodeURIComponent(JSON.stringify(obj))}`
      );
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async updateTask(obj) {
      const response = await axios.post(`/api/taskUpdate`, obj);
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
