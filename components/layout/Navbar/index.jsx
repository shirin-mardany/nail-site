// flowbite 
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
// next component >>
import Link from "next/link";
import Image from "next/image";
// style >>
import styles from "./Navbar.module.css";

// __________________________________________________________
export function Nav() {
  return (
    <Navbar fluid className={styles.nav}>
      {/* brand img-------------------- */}
      {/* <NavbarBrand href="https://flowbite-react.com"> */}
      {/* <span className="self-center whitespace-nowrap text-xl font-semibold">
          Flowbite React
        </span> */}
      <Image
        src="https://icqvgpldfkxzybfhygaf.supabase.co/storage/v1/object/public/assets/header/mahsa%20rahimi.svg"
        alt="Picture of the author"
        width={100}
        height={52}
        // priority
      />
      {/* </NavbarBrand> */}
      {/* profile img  and dropdown ------------------- */}
      <div className="flex md:order-2 [&_*]:text-black">
        <Dropdown
          className={styles.DropdowBnox}
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
              className="w-[23px] h-[23px] text-black"
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
          <DropdownItem as={Link} href="/dashboard">
            Dashboard
          </DropdownItem>
          <DropdownItem as={Link} href="/dashboard/settings">
            Settings
          </DropdownItem>
          <DropdownItem as={Link} href="/dashboard/orders">
            View Orders
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem as={Link} href="/logout">
            Sign out
          </DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      {/* nav items -------------------------- */}
      <NavbarCollapse className="[&_*]:text-black">
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
        <NavbarLink href="/portfolio">Portfolios</NavbarLink>
        <NavbarLink href="/admin">admin</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
