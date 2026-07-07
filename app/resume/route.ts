import { NextResponse } from "next/server";
import { resumeUrl } from "@/datas/data";

export function GET() {
  return NextResponse.redirect(resumeUrl, 302);
}