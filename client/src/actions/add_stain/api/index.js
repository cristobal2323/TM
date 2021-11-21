import axios from "axios";

const API = {
  data: {
    async postStain(obj) {
      const response = await axios.post(
        `/api/stain`,
        { name: obj.name },
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
