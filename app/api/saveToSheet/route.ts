import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxAfS4MkLgm1_nZdYFwvJx9uEJM0JQTzngAuBVpjMFgw0VD_Cofqzh7eGphrqgBkHnoFQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save to Google Sheet" }, { status: 500 });
  }
}
