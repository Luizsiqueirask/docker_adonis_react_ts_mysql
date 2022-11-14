import axios from "axios";

export default axios.create({
  baseURL: 'http://127.0.0.1:3333/api',
});

/*
export default axios.create({
  baseURL: 'http://127.0.0.1:3333/api',
  headers: {
    "Content-type": "application/json"
  }
});
*/

// https://www.bezkoder.com/react-hooks-crud-axios-api/
// https://www.bezkoder.com/react-custom-hook/
// https://www.bezkoder.com/react-crud-web-api/
// https://www.bezkoder.com/react-table-example-hooks-crud/
// https://www.bezkoder.com/react-typescript-api-call/
// https://www.bezkoder.com/react-typescript-axios/
// https://www.bezkoder.com/react-hook-form-typescript/