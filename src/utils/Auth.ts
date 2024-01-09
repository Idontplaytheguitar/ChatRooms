import axios from "axios";
import { cookies } from "next/headers";

export const profileGet = async (): Promise<{
  loggedIn: boolean;
  data: any;
}> => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get(
    "access_token"
  )?.value;
  let loggedIn = false;
  let data;
  try {
    loggedIn = false;
    data = (
      await axios.get(
        `${process.env.API_BASE_URL}/profile`,
        {
          headers: {
            authorization:
              "Bearer " + accessToken,
          },
        }
      )
    ).data;
    loggedIn = true;
    return {
      loggedIn,
      data,
    };
  } catch (e) {
    loggedIn = false;
    // console.log(e);
    return { loggedIn, data };
  }
};
