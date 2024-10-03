import ChefNavLink from "./ChefNavLink";
import StorefrontIcon from "@mui/icons-material/Storefront";

function SideNavigation() {
  return (
    <div className="row-span-full">
      <ul>
        <li className="px-6 py-8">
          <ChefNavLink href="/">
            <StorefrontIcon /> Home
          </ChefNavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNavigation;
