import LunchDiningIcon from "@mui/icons-material/LunchDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import ChefNavLink from "./ChefNavLink";

function Navigation() {
  return (
    <ul className="bg-emerald-200 border-b-2 shadow-md z-50 fixed w-full flex justify-between items-center text-sm px-3 p-4">
      <li className="mx-4">
        <ChefNavLink href="/starters">
          <SoupKitchenIcon />
          Starters
        </ChefNavLink>
      </li>
      <li className="mx-4">
        <ChefNavLink href="/mains">
          <LunchDiningIcon />
          Mains
        </ChefNavLink>
      </li>
      <li className="mx-4">
        <ChefNavLink href="/desserts">
          <IcecreamIcon />
          Desserts
        </ChefNavLink>
      </li>
    </ul>
  );
}

export default Navigation;
