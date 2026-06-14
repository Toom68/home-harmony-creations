'use client';
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  // Keyboard accessibility for product/feature cards
  const handleCardKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const btn = (e.currentTarget as HTMLElement).querySelector('button') as HTMLButtonElement | null;
      if (btn) btn.click();
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero">
        <img
          className="hero__bg"
          src="https://source.unsplash.com/1600x900/?personalized-home-decor"
          alt="Personalized home decor background"
        />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__headline">Personalize Your Home Decor</h1>
          <div className="hero__subtext">Discover bespoke items that reflect your unique style.</div>
          <div className="hero__actions">
            <button
              className="hero__btn"
              type="button"
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Shop Collection
            </button>
            <button
              className="hero__btn secondary"
              type="button"
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </button>
          </div>
        </div>
      </section>
      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar__item"><span className="icon">🚚</span> Free Shipping</div>
        <div className="trust-bar__item"><span className="icon">🔄</span> Easy Returns</div>
        <div className="trust-bar__item"><span className="icon">🔒</span> Secure Checkout</div>
        <div className="trust-bar__item"><span className="icon">✨</span> Craft Your Space, Your Way</div>
      </div>
      {/* Features */}
      <section className="features" id="features">
        <div className="features__cards">
          <div
            className="feature-card"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
          >
            <div className="feature-card__icon">🖼️</div>
            <div className="feature-card__title">Fully Customizable</div>
            <div className="feature-card__desc">
              Choose colors, fonts, and designs to match your unique taste. Every piece is made just for you.
            </div>
          </div>
          <div
            className="feature-card"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
          >
            <div className="feature-card__icon">🎁</div>
            <div className="feature-card__title">Perfect Gift</div>
            <div className="feature-card__desc">
              Personalized home decor makes thoughtful gifts for housewarmings, weddings, or any special occasion.
            </div>
          </div>
          <div
            className="feature-card"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
          >
            <div className="feature-card__icon">🏠</div>
            <div className="feature-card__title">Handcrafted Quality</div>
            <div className="feature-card__desc">
              Each item is carefully crafted with premium materials to ensure it’s as lasting as it is beautiful.
            </div>
          </div>
        </div>
      </section>
      {/* Products */}
      <section className="products" id="products">
        <div className="products__title">Shop Personalized Decor</div>
        <div className="product-grid">
          {/* Product 1 */}
          <div
            className="product-card"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
          >
            <div className="product-card__badge">Best Seller</div>
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src="https://source.unsplash.com/600x450/?custom-wall-art"
                alt="Customizable Wall Art"
              />
            </div>
            <div className="product-card__body">
              <div className="product-card__title">Customizable Wall Art</div>
              <div className="product-card__price">$49</div>
              <button className="product-card__btn" aria-label="Add Customizable Wall Art to cart" type="button">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 2 */}
          <div
            className="product-card"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
          >
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src="https://source.unsplash.com/600x450/?personalized-throw-pillow"
                alt="Personalized Throw Pillows"
              />
            </div>
            <div className="product-card__body">
              <div className="product-card__title">Personalized Throw Pillows</div>
              <div className="product-card__price">$35</div>
              <button className="product-card__btn" aria-label="Add Personalized Throw Pillows to cart" type="button">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Product 3 */}
          <div
            className="product-card"
            tabIndex={0}
            onKeyDown={handleCardKeyDown}
          >
            <div className="product-card__img-wrap">
              <img
                className="product-card__img"
                src="https://source.unsplash.com/600x450/?bespoke-doormat"
                alt="Bespoke Doormats"
              />
            </div>
            <div className="product-card__body">
              <div className="product-card__title">Bespoke Doormats</div>
              <div className="product-card__price">$29</div>
              <button className="product-card__btn" aria-label="Add Bespoke Doormats to cart" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <section className="cta-banner" id="cta">
        <div className="cta-banner__headline">Ready to Craft Your Space?</div>
        <button
          className="cta-banner__btn"
          type="button"
          onClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Personalizing
        </button>
      </section>
    </>
  );
}
