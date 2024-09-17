import axios from "axios";

const crucrud = axios.create({
  baseURL: "https://crudcrud.com/api/45a8e705dae24d1eacccc68d490e7a68",
});

export default crucrud;
