import axios from "axios";

const API = {
  data: {
    async getFilterInstalador(obj) {
      const response = await axios.get(`/api/filterInstalador`);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getFilterContainer(obj) {
      const response = await axios.get(`/api/filterContainer`);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getFilterSitio(obj) {
      const response = await axios.get(
        `/api/filterSitio/${encodeURIComponent(JSON.stringify(obj))}`
      );
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getFilterProduct(obj) {
      const response = await axios.get(
        `/api/filterProduct/${encodeURIComponent(JSON.stringify(obj))}`
      );
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getFilterHours(obj) {
      const response = await axios.get(`/api/filterHours`);
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
