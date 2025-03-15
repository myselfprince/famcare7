// src/components/Footer.jsx
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const categories = [
    {
      title: 'CATEGORIES',
      links: [
        { name: 'First Link', href: '#' },
        { name: 'Second Link', href: '#' },
        { name: 'Third Link', href: '#' },
        { name: 'Fourth Link', href: '#' },
      ],
    },
    {
      title: 'CATEGORIES',
      links: [
        { name: 'First Link', href: '#' },
        { name: 'Second Link', href: '#' },
        { name: 'Third Link', href: '#' },
        { name: 'Fourth Link', href: '#' },
      ],
    },
    {
      title: 'CATEGORIES',
      links: [
        { name: 'First Link', href: '#' },
        { name: 'Second Link', href: '#' },
        { name: 'Third Link', href: '#' },
        { name: 'Fourth Link', href: '#' },
      ],
    },
    {
      title: 'CATEGORIES',
      links: [
        { name: 'First Link', href: '#' },
        { name: 'Second Link', href: '#' },
        { name: 'Third Link', href: '#' },
        { name: 'Fourth Link', href: '#' },
      ],
    },
  ];

  return (
    <footer className="text-gray-600 body-font">
      {/* Main Footer Section */}
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and Description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* Logo Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Famcare</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>

        {/* Categories Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {categories.map((category, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                {category.title}
              </h2>
              <nav className="list-none mb-10">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2025 Famcare —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @sameeksha
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="#" className="text-gray-500">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;