
import React from 'react'

export default function AppShowcase(){
  return (
    <section className="app card">
      <div className="phones">
        <div className="phone">
          <div className="screen"></div>
          <b>عرض القائمة</b>
          <p className="meta">نموذج شاشة تطبيق — استبدليها بواجهات حقيقية لاحقًا.</p>
        </div>
        <div className="phone">
          <div className="screen"></div>
          <b>لاتيه جراند</b>
          <p className="meta">اجعل الطلب أسهل بنقرة واحدة.</p>
          <div className="actions" style={{marginTop:'auto'}}>
            <span className="price">$3.50</span>
            <a className="primary" href="#shop">أضِف إلى السلة</a>
          </div>
        </div>
      </div>
      <div className="copy">
        <h2>التطبيق متاح</h2>
        <p className="lead">حمّل تطبيقنا وتابع الطلبات والعروض، واكتشف نكهات جديدة أسبوعيًا.</p>
        <div className="store-buttons">
          <button className="store">App Store</button>
          <button className="store">Google Play</button>
        </div>
      </div>
    </section>
  )
}
