import LunchDiningIcon from "@mui/icons-material/LunchDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ChefNavLink from "./ChefNavLink";

function Navigation() {
  return (
    <ul className="bg-emerald-200 border-b-2 shadow-md z-50 fixed w-full flex justify-between items-center text-sm px-3">
      <li>
        <ChefNavLink href="/">
          👩🏼‍🍳 <StorefrontIcon />
        </ChefNavLink>
      </li>
      <li>
        <ChefNavLink href="/starters">
          <SoupKitchenIcon />
          Starters
        </ChefNavLink>
      </li>
      <li>
        <ChefNavLink href="/mains">
          <LunchDiningIcon />
          Mains
        </ChefNavLink>
      </li>
      <li>
        <ChefNavLink href="/desserts">
          <IcecreamIcon />
          Desserts
        </ChefNavLink>
      </li>
    </ul>
  );
}

export default Navigation;
