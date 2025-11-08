
import React from 'react'

export default function Footer(){
  return (
    <footer className="card">
      <div>
        <div className="brand-foot">
          <div className="brand-icon"></div>
          Flavored — استيقظ على شيء مميز
        </div>
      </div>
      <div>
        <h4>خدماتنا</h4>
        <ul>
          <li><a href="#">الأسعار</a></li>
          <li><a href="#">التتبع</a></li>
          <li><a href="#">أبلغ عن مشكلة</a></li>
          <li><a href="#">الشروط</a></li>
        </ul>
      </div>
      <div>
        <h4>شركتنا</h4>
        <ul>
          <li><a href="#">قصتنا</a></li>
          <li><a href="#">الوظائف</a></li>
          <li><a href="#">المدونة</a></li>
          <li><a href="#">الأسئلة الشائعة</a></li>
        </ul>
      </div>
      <div>
        <h4>العنوان</h4>
        <ul>
          <li>القاهرة، مصر</li>
          <li>coffee@example.com</li>
          <li>+20 100 000 0000</li>
        </ul>
      </div>
    </footer>
  )
}
