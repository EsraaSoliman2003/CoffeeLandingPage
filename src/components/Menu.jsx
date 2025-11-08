
import React from 'react'

function Card({title, meta, price}){
  return (
    <article className="card-item">
      <div className="thumb"></div>
      <div className="item-header">
        <div>{title}</div><span className="price">{price}</span>
      </div>
      <div className="meta">{meta}</div>
      <div className="actions">
        <div className="icons">
          <div className="icon">🛒</div>
          <div className="icon">♡</div>
          <div className="icon">ℹ︎</div>
        </div>
      </div>
    </article>
  )
}

export default function Menu(){
  return (
    <section id="menu" className="menu card">
      <div className="copy">
        <h2>اختيارات منتقاة من القهوة</h2>
        <p>نص تجريبي يوضح فكرة الوصف القصير للقسم. استبدليه بوصف علامتك التجارية لاحقًا.</p>
        <a className="primary" href="#about">تعرف أكثر</a>
      </div>
      <div className="cards">
        <Card title="أمريكانو" meta="100% أرابيكا طبيعية — 30 مل" price="$2.50" />
        <Card title="كابتشينو" meta="قهوة 50%، حليب 50% — 280 مل" price="$2.50" />
      </div>
    </section>
  )
}
