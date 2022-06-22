import React, { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import Transition from "../utils/Transition";
import Dropdown from "../utils/Dropdown";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
              <Link href="/" passHref>
                <Image
                  alt="GeekPara Logo"
                  src="/static/images/logo.png"
                  width="35"
                  height="35"
                  className="block"
                />
              </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">

              <li>
                <Link href="/">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    Solutioner&trade;
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    关于
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/projects">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    项目
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    博客
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/status">
                  <a className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
                    博客
                  </a>
                </Link>
              </li>

            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/about#join-process" passHref>
                  <a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                    <span>
                      加入我们
                    </span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>

          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">菜单</span>
              <svg
                className="w-6 h-6 fill-current text-gray-900"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag="nav"
                id="mobile-nav"
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >

                <ul className="px-5 py-2">

                  <li>
                    <h2 className="h2 flex text-gray-600 py-2">
                      GeekPara Organization
                    </h2>
                  </li>

                  <li>
                    <Link href="/">
                      <a className="flex text-gray-600 hover:text-gray-900 py-2">
                        Solutioner&trade;
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <a className="flex text-gray-600 hover:text-gray-900 py-2">
                        关于
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/projects">
                      <a className="flex text-gray-600 hover:text-gray-900 py-2">
                        项目
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <a className="flex text-gray-600 hover:text-gray-900 py-2">
                        博客
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/about">
                      <a className="flex text-gray-600 hover:text-gray-900 py-2">
                        状态
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/join-form" // @todo: 加入申请表单链接
                      passHref
                    >
                      <button className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full my-2">
                        <span>加入我们</span>
                        <svg
                          className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fill="#999"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </Link>
                  </li>

                </ul>

              </Transition>
            </div>
            
          </div>

        </div>

      </div>

    </header>
  );
}
