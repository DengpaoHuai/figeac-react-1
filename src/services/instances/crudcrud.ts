import axios from "axios";

const crucrud = axios.create({
  baseURL: "https://crudcrud.com/api/176ec36c7cc24bd7b4fea6120ca68776",
});

export default crucrud;
