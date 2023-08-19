import { LoginStatus } from "@/components/UserInfo";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function fetchUsers(id?: string) {
  const url = `${process.env.API_HOST}/users/` + id ?? "";
  const cookie: RequestCookie | undefined = cookies().get(
    "natoursLoggedinUser"
  );
  let token: string = "";

  if (cookie) {
    let user: LoginStatus = JSON.parse(cookie.value);
    token = `Bearer ${user.loginToken}`;
  }

  const results = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  return results.json();
}
