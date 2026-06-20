import { NavbarUser } from "./navbar-user";
import { Logo } from "./logo";
import { NavbarNotifications } from "./navbar-notifications";
import { NavbarSearch } from "./navbar-search";

export function AppNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6">
        <Logo />

        <div className="flex-1 flex justify-center">
          <NavbarSearch />
        </div>

        <div className="flex items-center gap-2">
          <NavbarNotifications />
          <NavbarUser />
        </div>
      </div>
    </header>
  );
}
