'use client';
import './globals.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Home Harmony Creations | Craft Your Space, Your Way',
  description: 'Personalized home decor, handcrafted for your unique style. Craft Your Space, Your Way.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Mobile nav state
  const [navOpen, setNavOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);

  // Close nav on link click (mobile)
  useEffect(() => {
    if (!navMenuRef.current) return;
    const links = navMenuRef.current.querySelectorAll('a');
    const closeNav = () => {
      if (window.innerWidth < 650) {
        setNavOpen(false);
        document.body.classList.remove('nav-open');
      }
    };
    links.forEach(link => link.addEventListener('click', closeNav));
    return () => {
      links.forEach(link => link.removeEventListener('click', closeNav));
    };
  }, [navMenuRef, navOpen]);

  // Body class for nav-open
  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [navOpen]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const el = document.querySelector(target.getAttribute('href')!);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Keyboard accessibility for nav toggle
  const handleNavToggleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setNavOpen(v => !v);
    }
  };

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" />
        <title>Home Harmony Creations | Craft Your Space, Your Way</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body>
        {/* Sticky Nav */}
        <header className="navbar" id="navbar">
          <Link href="/" className="logo" aria-label="Home Harmony Creations">
            <span style={{ fontSize: '1.35em' }}>🏡</span> Home Harmony
          </Link>
          <nav
            id="nav-menu"
            aria-label="Main Navigation"
            className={navOpen ? 'open' : ''}
            ref={navMenuRef as any}
          >
            <a href="#features">Features</a>
            <Link href="/products">Shop</Link>
            <Link href="/about">About</Link>
            <a href="#contact">Contact</a>
            <button
              className="shop-btn"
              type="button"
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Shop Now
            </button>
          </nav>
          <div
            className="hamburger"
            id="nav-toggle"
            aria-label="Open navigation"
            tabIndex={0}
            onClick={() => setNavOpen(v => !v)}
            onKeyDown={handleNavToggleKey}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
        {children}
        {/* Footer */}
        <footer className="footer" id="about">
          <div className="footer__cols">
            <div>
              <div className="footer__brand">🏡 Home Harmony Creations</div>
              <div className="footer__desc">
                Personalized home decor, handcrafted for your unique style. <br />Craft Your Space, Your Way.
              </div>
            </div>
            <div>
              <div className="footer__links-title">Shop</div>
              <div className="footer__links">
                <a href="#products">All Products</a>
                <a href="#products">Wall Art</a>
                <a href="#products">Throw Pillows</a>
                <a href="#products">Doormats</a>
              </div>
            </div>
            <div>
              <div className="footer__links-title">Company</div>
              <div className="footer__links">
                <Link href="/about">About Us</Link>
                <a href="#features">How It Works</a>
                <a href="#contact">Contact</a>
                <a href="#">Returns &amp; Shipping</a>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            &copy; 2024 Home Harmony Creations. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
