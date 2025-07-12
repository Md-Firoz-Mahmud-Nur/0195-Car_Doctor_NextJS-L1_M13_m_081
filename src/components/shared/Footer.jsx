import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-Dark-01">
      <footer className="footer sm:footer-horizontal container mx-auto py-10 text-white">
        <aside>
          <Link href="/">
            <Image
              src="/assets/logoFooter.svg"
              alt="logo"
              width={79}
              height={65}
            />
          </Link>
          <p className="max-w-[283px] leading-6 text-[#E8E8E8]">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex gap-1.5">
            <div className="rounded-full bg-[#2c2c2c] p-3">
              <FaGoogle className="text-white"></FaGoogle>
            </div>
            <div className="rounded-full bg-[#2c2c2c] p-3">
              <FaTwitter className="text-white"></FaTwitter>
            </div>
            <div className="rounded-full bg-[#2c2c2c] p-3">
              <FaInstagram className="text-white"></FaInstagram>
            </div>
            <div className="rounded-full bg-[#2c2c2c] p-3">
              <FaLinkedin className="text-white"></FaLinkedin>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accessability</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
