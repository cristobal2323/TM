import axios from "axios";

const API = {
  data: {
    async postGroup(obj) {
      const response = await axios.post(
        `/api/group`,
        {
          name: obj.name,
          stains: obj.stains,
          laboratory: obj.laboratory,
          user: obj.user,
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
  },
};
export default API;
