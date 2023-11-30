import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const res = await axios.post(
      `${process.env.API_BASE_URL}/auth/logout`
    );
    const response = new Response(null, {
      status: res.status,
      headers: {
        "Set-Cookie":
          "access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly",
      },
    });
    console.log(res.status, "responsee");
    return response;
  } catch (e) {
    const error = JSON.parse(JSON.stringify(e));
    console.log(e);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: error.status || 500,
      }
    );
  }
}
