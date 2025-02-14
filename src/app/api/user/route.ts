import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return new NextResponse("Data fetched", { status: 200 });
  } catch (err) {
    return new NextResponse("Error fetching data", { status: 500 });
  }
}