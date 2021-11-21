import axios from "axios";

const API = {
  data: {
    async getStains(obj) {
      const response = await axios.get(
        `/api/stainAll/${encodeURIComponent(JSON.stringify(obj))}`,
        {
          headers: {
            Authorization: `Bearer ${obj.token}`,
          },
        }
      );
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async putStain(obj) {
      const response = await axios.put(`/api/stain/${obj._id}`, obj, {
        headers: {
          accept: "application/json;",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${obj.token}`,
        },
      });

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
