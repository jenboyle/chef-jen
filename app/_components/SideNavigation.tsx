"use client";
import ChefNavLink from "./ChefNavLink";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import PinIcon from "@mui/icons-material/Pin";
import { useUser } from "./authentication/useUser";

function SideNavigation() {
  const { user } = useUser();
  return (
    <div className="row-span-full bg-yellow-100 border-r-2 shadow-md">
      <ul>
        <li className="px-6 py-8">
          <ChefNavLink href="/">
            <StorefrontIcon /> Home
          </ChefNavLink>
        </li>
        <li className="px-6 py-8">
          <ChefNavLink href="/daily">
            <SensorOccupiedIcon /> Daily
          </ChefNavLink>
        </li>
        <li className="px-6 py-8">
          <ChefNavLink href="/points">
            <PinIcon /> Points
          </ChefNavLink>
        </li>
        <li className="px-6 py-8">
          {user ? (
            <ChefNavLink href="/logout">
              <PersonIcon /> Logout
            </ChefNavLink>
          ) : (
            <ChefNavLink href="/login">
              <PersonIcon /> Login
            </ChefNavLink>
          )}
        </li>
      </ul>
    </div>
  );
}

export default SideNavigation;
