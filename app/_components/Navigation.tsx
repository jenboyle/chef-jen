import Link from "next/link";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import StorefrontIcon from "@mui/icons-material/Storefront";

function Navigation() {
  return (
    <ul className="bg-emerald-400 border-b-2 shadow-md z-50 fixed w-full flex justify-between items-center text-[6px] px-3">
      <li>
        <Link href="/" className="hover:bg-emerald-700">
          👩🏼‍🍳 <StorefrontIcon style={{ fontSize: 8 }} />
        </Link>
      </li>
      <li>
        <Link href="/starters" className="hover:bg-emerald-700">
          <SoupKitchenIcon style={{ fontSize: 8 }} />
          Starters
        </Link>
      </li>
      <li>
        <Link href="/mains" className="hover:bg-emerald-700">
          <LunchDiningIcon style={{ fontSize: 8 }} />
          Mains
        </Link>
      </li>
      <li>
        <Link href="/desserts" className="hover:bg-emerald-700">
          <IcecreamIcon style={{ fontSize: 8 }} />
          Desserts
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
