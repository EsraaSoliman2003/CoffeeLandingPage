
import React from 'react'

export default function AboutFeatured(){
  return (
    <section id="about" className="hero card" style={{gridTemplateColumns:'1fr 1fr'}}>
      <div>
        <h2>قصة النكهة</h2>
        <p className="lead">من المزرعة إلى فنجانك، نهتم بكل تفصيلة: اختيار الحبوب، درجات التحميص، وسلاسة الاستخلاص.</p>
        <a className="primary" href="#contact">اعرف المزيد</a>
      </div>
      <div className="hero-visual">
        <div className="hero-plate" style={{width:'260px',height:'260px'}}></div>
        <div className="coffee-art" style={{width:'160px',height:'160px'}}></div>
        <div className="price-badge">$2.50</div>
      </div>
    </section>
  )
}
