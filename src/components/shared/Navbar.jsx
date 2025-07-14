"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  // console.log(session);
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "My Booking",
      path: "/my-booking",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-Dark-02"
          >
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/">
          <Image src="/assets/logo.svg" alt="logo" width={107} height={87} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-Dark-02 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Image
          className="mr-5"
          src="/assets/Cart.svg"
          alt="cart"
          width={24}
          height={24}
        ></Image>
        <Image
          className="mr-8"
          src="/assets/Search.svg"
          alt="search"
          width={24}
          height={24}
        ></Image>
        <a className="btn btn-outline btn-primary px-7 py-4 text-lg font-semibold">
          Appointment
        </a>
        {session?.data && (
          <div>
            <Image
              alt={session?.data?.user?.name}
              src={session?.data?.user?.image}
              height={50}
              width={50}
              className="ml-4 rounded-full"
            />
          </div>
        )}
        {session?.status === "loading" && <h6>Loading....</h6>}
        {session?.status === "unauthenticated" && (
          <Link href="/login" className="btn btn-primary ml-4 px-8">
            Login
          </Link>
        )}
        {session?.status === "authenticated" && (
          <button
            className="btn btn-primary ml-4 px-8"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
