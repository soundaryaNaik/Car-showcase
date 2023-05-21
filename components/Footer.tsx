import Image from "next/image";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="flex max-md:flex-col flex-wrap lg:justify-between gap-x-32 gap-y-12 text-black-400 sm:px-16 px-6 py-10 mt-5">
    <div className="flex flex-col justify-start items-start gap-6 pr-10">
      <Image
        src="/logo.svg"
        alt="logo"
        width={118}
        height={18}
        className="object-contain"
      />
      <p className="text-base text-gray-700">
        Carhub 2023 <br />
        All Rights Reserved &copy;
      </p>
    </div>

    {footerLinks.map((item) => (
      <div
        key={item.title}
        className="flex flex-col justify-start items-start gap-6 text-20 leading-24"
      >
        <h3 className="font-bold">{item.title}</h3>
        <div className="flex flex-col gap-5">
          {item.isSocialMedia ? (
            <div className="flex gap-5">
              {item.links.map((link) => (
                <a href={link.url} target="_blank" rel="noreferrer">
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          ) : (
            item.links.map((link) => (
              <a key={link.title} href={link.url} className="text-gray-500">
                {link.title}
              </a>
            ))
          )}
        </div>
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
      <p>@2023 CarHub. All rights reserved</p>

      <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
        <Link href='/' className='text-gray-500'>
          Privacy & Policy
        </Link>
        <Link href='/' className='text-gray-500'>
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
