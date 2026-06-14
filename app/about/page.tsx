'use client';

export default function AboutPage() {
  return (
    <main>
      <section className="features" style={{ marginTop: '3.5rem', marginBottom: '2.5rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', background: '#fff', borderRadius: '1.25rem', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', padding: '2.5rem 2rem', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '1.2rem', letterSpacing: '-0.01em' }}>
            Our Story
          </h1>
          <p style={{ fontSize: '1.13rem', color: '#444', opacity: 0.93, marginBottom: '1.5rem', lineHeight: 1.7 }}>
            <b>Home Harmony Creations</b> was born from a passion for turning houses into homes. We believe every space should reflect the people who live in it. That’s why we handcraft personalized decor that’s as unique as you are.
          </p>
          <p style={{ fontSize: '1.13rem', color: '#444', opacity: 0.93, marginBottom: '1.5rem', lineHeight: 1.7 }}>
            From custom wall art to bespoke doormats and cozy throw pillows, each piece is made to order with care and premium materials. Whether you’re looking for the perfect gift or a statement piece for your own home, we’re here to help you craft your space, your way.
          </p>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--brand-primary)', marginTop: '2.5rem', marginBottom: '0.7rem' }}>
            Why Choose Us?
          </h2>
          <ul style={{ fontSize: '1.07rem', color: '#222', opacity: 0.93, marginLeft: '1.2em', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            <li style={{ marginBottom: '0.6em' }}>🖼️ <b>Fully Customizable:</b> Choose colors, fonts, and designs to match your unique taste.</li>
            <li style={{ marginBottom: '0.6em' }}>🎁 <b>Perfect for Gifting:</b> Thoughtful, one-of-a-kind presents for every occasion.</li>
            <li style={{ marginBottom: '0.6em' }}>🏠 <b>Handcrafted Quality:</b> Every item is made with love and attention to detail.</li>
            <li style={{ marginBottom: '0.6em' }}>🚚 <b>Free Shipping:</b> Enjoy free shipping on all orders, always.</li>
          </ul>
          <div style={{ fontSize: '1.13rem', color: '#444', opacity: 0.93, marginBottom: '0.5rem', lineHeight: 1.7 }}>
            Thank you for supporting our small business and letting us be a part of your story.
          </div>
          <div style={{ fontWeight: 600, color: 'var(--brand-primary)', marginTop: '1.5rem', fontSize: '1.13rem' }}>
            – The Home Harmony Creations Team
          </div>
        </div>
      </section>
    </main>
  );
}
