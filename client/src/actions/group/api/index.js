import axios from "axios";

const API = {
  data: {
    async getGroups(obj) {
      const response = await axios.get(
        `/api/groupAll/${encodeURIComponent(JSON.stringify(obj))}`,
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
    async putGroup(obj) {
      const response = await axios.put(`/api/group/${obj._id}`, obj, {
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
