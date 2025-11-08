
import React from 'react'

export default function Hero(){
  return (
    <section className="hero card">
      <div>
        <h1>القهوة<br/>الأفضل من أجلك</h1>
        <p className="lead">نختار أجود حبوب البن ونُحَمِّصها طازجة يوميًا لنقدّم لك تجربة غنية بالنكهة والرائحة.</p>
        <div className="cta">
          <a className="primary" href="#menu">عرض القائمة</a>
        </div>
        <div className="chips">
          <div className="chip">أمريكانو</div>
          <div className="chip">كابتشينو</div>
          <div className="chip">لاتيه</div>
          <div className="chip">مكس خاص</div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-plate"></div>
        <div className="coffee-art"></div>
        <div className="price-badge">$2.50</div>
      </div>
    </section>
  )
}
