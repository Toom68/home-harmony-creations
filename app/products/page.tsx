'use client';
import { useCallback } from 'react';

const products = [
  {
    title: 'Customizable Wall Art',
    price: '$49',
    img: 'https://source.unsplash.com/600x450/?custom-wall-art',
    badge: 'Best Seller',
    alt: 'Customizable Wall Art',
  },
  {
    title: 'Personalized Throw Pillows',
    price: '$35',
    img: 'https://source.unsplash.com/600x450/?personalized-throw-pillow',
    badge: '',
    alt: 'Personalized Throw Pillows',
  },
  {
    title: 'Bespoke Doormats',
    price: '$29',
    img: 'https://source.unsplash.com/600x450/?bespoke-doormat',
    badge: '',
    alt: 'Bespoke Doormats',
  },
  {
    title: 'Custom Name Signs',
    price: '$59',
    img: 'https://source.unsplash.com/600x450/?custom-name-sign',
    badge: 'New',
    alt: 'Custom Name Signs',
  },
  {
    title: 'Personalized Family Mugs',
    price: '$24',
    img: 'https://source.unsplash.com/600x450/?personalized-mug',
    badge: '',
    alt: 'Personalized Family Mugs',
  },
  {
    title: 'Engraved Wooden Trays',
    price: '$39',
    img: 'https://source.unsplash.com/600x450/?engraved-wooden-tray',
    badge: '',
    alt: 'Engraved Wooden Trays',
  },
  {
    title: 'Custom House Portraits',
    price: '$79',
    img: 'https://source.unsplash.com/600x450/?house-portrait',
    badge: '',
    alt: 'Custom House Portraits',
  },
  {
    title: 'Personalized Candle Holders',
    price: '$27',
    img: 'https://source.unsplash.com/600x450/?personalized-candle-holder',
    badge: '',
    alt: 'Personalized Candle Holders',
  },
  {
    title: 'Custom Quote Prints',
    price: '$22',
    img: 'https://source.unsplash.com/600x450/?custom-quote-print',
    badge: '',
    alt: 'Custom Quote Prints',
  },
];

export default function ProductsPage() {
  // Keyboard accessibility for product cards
  const handleCardKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const btn = (e.currentTarget as HTMLElement).querySelector('button') as HTMLButtonElement | null;
      if (btn) btn.click();
    }
  }, []);

  return (
    <main>
      <section className="products" id="products">
        <div className="products__title">All Personalized Decor</div>
        <div className="product-grid">
          {products.map((product, idx) => (
            <div
              className="product-card"
              tabIndex={0}
              key={product.title}
              onKeyDown={handleCardKeyDown}
            >
              {product.badge && (
                <div className="product-card__badge">{product.badge}</div>
              )}
              <div className="product-card__img-wrap">
                <img
                  className="product-card__img"
                  src={product.img}
                  alt={product.alt}
                />
              </div>
              <div className="product-card__body">
                <div className="product-card__title">{product.title}</div>
                <div className="product-card__price">{product.price}</div>
                <button className="product-card__btn" aria-label={`Add ${product.title} to cart`} type="button">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
