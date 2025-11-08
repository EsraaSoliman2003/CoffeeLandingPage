
import React from 'react'

export default function Navbar(){
  return (
    <header className="navbar card">
      <div className="brand">
        <div className="brand-icon"></div>
        <div>Flavored <small>استيقظ على شيء مميز</small></div>
      </div>
      <nav className="nav">
        <a href="#menu">قائمة القهوة</a>
        <a href="#about">من نحن</a>
        <a href="#contact">تواصل</a>
        <a className="btn" href="#shop">متجر القهوة</a>
      </nav>
    </header>
  )
}
