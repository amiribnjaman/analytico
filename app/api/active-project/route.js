import {data} from "@/public/data/active-project";
import { NextResponse } from "next/server";

export function GET(request) {
  const report = data;
  return NextResponse.json(report, { status: 200 });
}
