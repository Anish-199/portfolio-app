import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="text-xl font-serif font-semibold tracking-tighter text-foreground"
            >
              SAUGAT NAZARANA
            </Link>
            <p className="mt-2 text-muted-foreground">
              Creating digital experiences with precision and care.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://x.com/SaugatNazarana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-subtle text-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.facebook.com/SaugatNazarana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-subtle text-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:saugatkumar10@gmail.com"
              className="hover-subtle text-foreground hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SAUGAT NAZARANA. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Work
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
