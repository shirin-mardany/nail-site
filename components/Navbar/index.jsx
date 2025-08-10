import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";

export function Nav() {
  return (
    <Navbar fluid rounded>
      {/* brand img-------------------- */}
      {/* <NavbarBrand href="https://flowbite-react.com"> */}
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
        <Image
          src="https://icqvgpldfkxzybfhygaf.supabase.co/storage/v1/object/public/assets/header/mahsa%20rahimi.svg"
          alt="Picture of the author"
          width={100}
          height={52}
        />
      {/* </NavbarBrand> */}
      {/* profile img  and dropdown ------------------- */}
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // profile pic icon => is login ----------------------
            // <Avatar
            //   alt="User settings"
            //   img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            //   rounded
            // />
            // icon => don't login ----------------------
            <svg
              className="w-[23px] h-[23px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.9"
                d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      {/* nav items -------------------------- */}
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
        <NavbarLink href="/portfolio">Portfolios</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
