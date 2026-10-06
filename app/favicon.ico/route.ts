import { NextResponse } from "next/server";
import { site } from "@/lib/site-data";

export function GET() {
  return NextResponse.redirect(new URL(site.logoPath, site.url));
}
