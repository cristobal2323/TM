import axios from "axios";
import Config from "../../config";

const API = {
  data: {
    async getTask(obj) {
      const response = await axios.get(
        `/api/task/${encodeURIComponent(JSON.stringify(obj))}`
      );
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getTaskCount(obj) {
      const response = await axios.get(
        `/api/taskCount/${encodeURIComponent(JSON.stringify(obj))}`
      );
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async addTaskAssign(obj) {
      const response = await axios.post(`/api/taskAssign`, obj);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async deleteTask(obj) {
      const response = await axios.post(`/api/taskDelete`, obj);
      const { status } = response;
      let data = await response.data;

      return {
        data,
        status,
      };
    },
    async getPdf(obj) {
      const response = await axios.get(
        `/api/pdf/${encodeURIComponent(JSON.stringify(obj))}`
      );
      const { status } = response;
      let data = await response.data;

      if (status === 200) {
        if (data.ejecucion.estado) {
          const link = document.createElement("a");
          link.setAttribute("target", "_blank");
          console.log(`${Config.api}${data.datos.reporte_final.archivo_pdf}`);
          link.href = `${Config.api}${data.datos.reporte_final.archivo_pdf}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }

      return {
        data,
        status,
      };
    },
  },
};
export default API;
