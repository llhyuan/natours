import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieString } from "@/utilities/cookieString";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function POST(req: NextRequest, _res: NextResponse) {
  let cookieStr: string = getCookieString(cookies().getAll());
  const fetchUserId = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/users/fetchId`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieStr,
      },
      credentials: "include",
    }
  );
  const userId = await fetchUserId.json();

  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users/me/update-profile`;
  const reqBody = await req.json();

  const uploadResult = await cloudinary.uploader.upload(reqBody.file, {
    width: 500,
    height: 500,
    gravity: "auto",
    crop: "fill",
    public_id: `natours/users/${userId.id}`,
  });

  reqBody.photo = uploadResult.secure_url;
  reqBody.file = void 0;

  console.log(reqBody);
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStr,
    },
    body: JSON.stringify(reqBody),
    credentials: "include",
  });
  console.log(response);
  const result = await response.json();

  if (result.status === "success") {
    return NextResponse.json({
      status: "success",
      message: "Profile updated",
      url: uploadResult.url,
    });
  } else {
    return NextResponse.json(result);
  }
}
