import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import ChefNavLink from "./ChefNavLink";

function Navigation() {
  return (
    <ul
      data-testid="mainNav"
      className="bg-yellow-100 border-b-2 shadow-md z-50 fixed w-full flex justify-between items-center text-sm px-1 p-2 md:px-3 md:p-4"
    >
      <li className="mx-4">
        <ChefNavLink href="/lunch">
          <LunchDiningIcon />
          Lunch
        </ChefNavLink>
      </li>
      <li className="mx-4">
        <ChefNavLink href="/main">
          <DinnerDiningIcon />
          Main
        </ChefNavLink>
      </li>
      <li className="mx-4">
        <ChefNavLink href="/dessert">
          <IcecreamIcon />
          Dessert
        </ChefNavLink>
      </li>
    </ul>
  );
}

export default Navigation;
