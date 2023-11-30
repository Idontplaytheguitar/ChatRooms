import axios from "axios";

export const logOutCall = async () => {
  axios
    .post(`api/authorization/logout`)
    .then(() => window.location.reload())
    .catch((e) => console.error(e));
};
