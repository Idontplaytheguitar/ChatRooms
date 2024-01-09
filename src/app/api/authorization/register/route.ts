import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const res = await axios.post(
      `${process.env.API_BASE_URL}/auth/register`,
      body
      );
      console.log(body)
    const response = NextResponse.json(
      { data: res.data },
      { status: res.status }
    );
    response.cookies.set(
      "access_token",
      res.data.access_token
    );
    return response;
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
