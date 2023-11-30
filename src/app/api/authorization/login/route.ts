import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const res = await axios.post(
      `${process.env.API_BASE_URL}/auth`,
      body
    );
    if (res.status === 200) {
      const res2 = await axios.post(
       `${process.env.API_BASE_URL}/auth/login`,
        body
      );
      const response = NextResponse.json(
        { data: res2.data },
        { status: res2.status }
      );
      response.cookies.set(
        "access_token",
        res2.data.access_token
      );
      return response;
    }
  } catch (e) {
    const error = JSON.parse(JSON.stringify(e));
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
