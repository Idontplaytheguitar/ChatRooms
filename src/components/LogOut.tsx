'use client'

import { logOutCall } from "fndtn/utils/authenticationFrontFunctions";
import { Button } from "./ui/button";

export default function LogOut() {
  return (
    <Button variant="destructive" onClick={logOutCall}>Log out</Button>
  );
}
