import axios from "axios";

const crucrud = axios.create({
  baseURL: "https://crudcrud.com/api/90548ee5b5984b50a710eb7e2e472af3",
});

export default crucrud;
