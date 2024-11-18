import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-gray-800 py-12 text-gray-400">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-4">Next Corporate</h3>
            <p className="mb-4">
              123 Business Avenue, Suite 100 <br /> City, Country 12345
            </p>
            <p>Email: contact@nextcorporate.com</p>
            <p>Phone: +1 (234) 567-890</p>
          </div>
  
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Social Media Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495V14.708H9.672v-3.534h3.149V8.413c0-3.114 1.897-4.812 4.67-4.812 1.328 0 2.468.099 2.799.144v3.24h-1.921c-1.506 0-1.797.715-1.797 1.765v2.314h3.588l-.467 3.534h-3.121V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.933 4.933 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.822 4.822 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.053 2.28 1.581 4.415 3.946 4.89a4.937 4.937 0 01-2.224.085 4.928 4.928 0 004.6 3.417A9.868 9.868 0 010 21.542a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646a9.935 9.935 0 002.411-2.539z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.998 0H4.002C1.794 0 0 1.793 0 4.002v15.996C0 22.206 1.794 24 4.002 24h15.996C22.206 24 24 22.206 24 20.002V4.002C24 1.793 22.206 0 19.998 0zM7.057 20.451H3.554V9.302h3.503v11.149zM5.304 7.852c-1.121 0-2.031-.914-2.031-2.041 0-1.127.91-2.042 2.031-2.042 1.121 0 2.031.914 2.031 2.042s-.91 2.041-2.031 2.041zM20.451 20.451h-3.503v-5.605c0-1.336-.027-3.059-1.867-3.059-1.867 0-2.154 1.46-2.154 2.968v5.696H9.422V9.302h3.36v1.524h.047c.468-.885 1.609-1.818 3.314-1.818 3.544 0 4.197 2.33 4.197 5.356v6.087z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center mt-12 text-gray-500">
          © 2024 Next Corporate. All Rights Reserved.
        </div>
      </footer>
    );
  }
  