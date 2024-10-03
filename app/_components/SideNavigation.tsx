import ChefNavLink from "./ChefNavLink";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PinIcon from "@mui/icons-material/Pin";

function SideNavigation() {
  return (
    <div className="row-span-full bg-emerald-200 border-r-2 shadow-md">
      <ul>
        <li className="px-6 py-8">
          <ChefNavLink href="/">
            <StorefrontIcon /> Home
          </ChefNavLink>
        </li>
        <li className="px-6 py-8">
          <ChefNavLink href="/points">
            <PinIcon /> Points
          </ChefNavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNavigation;
