import axios from "axios";

const API = {
  data: {
    async putGroup(obj) {
      const response = await axios.put(
        `/api/group/${obj._id}`,
        {
          name: obj.name,
          stains: obj.stains,
          state: obj.state,
        },
        {
          headers: {
            accept: "application/json;",
            "Content-Type": "application/json;charset=UTF-8",
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
    async getGroup(obj) {
      const response = await axios.get(`/api/group/${obj._id}`, {
        headers: {
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
