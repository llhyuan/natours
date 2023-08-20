"use server";

import { cookies } from "next/headers";

async function create() {
  const jwt = cookies().get("jwt");
  if (jwt) {
    cookies().set("jwt", jwt.value);
  }
}
