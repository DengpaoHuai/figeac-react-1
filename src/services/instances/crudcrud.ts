import axios from "axios";

const crucrud = axios.create({
  baseURL: "https://crudcrud.com/api/eba3b2c0cbc44427a9a745a9084b6ace",
});

export default crucrud;
