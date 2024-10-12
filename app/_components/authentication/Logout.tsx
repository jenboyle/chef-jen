"use client";
import ChefButton from "../ChefButton";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <div>
      Are you sure you wish to logout?
      <ChefButton handleClick={handleLogout}>Logout</ChefButton>
    </div>
  );
}

export default Logout;
