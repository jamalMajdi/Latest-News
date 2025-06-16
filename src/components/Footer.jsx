import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer({language}) {
  return (
    language == "ar" ? (
      <footer className="footer">
        <div className="footer-inner">
          {/* الشعار والوصف */}
          <div className="footer-block">
            <h2 className="footer-logo">أخبارنا</h2>
            <p className="footer-text">
              نقدم لك تغطية شاملة لأحدث الأخبار المحلية والعالمية بدقة واحترافية.
            </p>
          </div>

          {/* روابط الموقع */}
          <div className="footer-block">
            <h3 className="footer-heading">روابط مهمة</h3>
            <ul className="footer-links">
              <li><a href="/">الرئيسية</a></li>
              <li><a href="/categories">الأقسام</a></li>
              <li><a href="/about">من نحن</a></li>
              <li><a href="/contact">تواصل معنا</a></li>
            </ul>
          </div>

          {/* السياسات */}
          <div className="footer-block">
            <h3 className="footer-heading">روابط قانونية</h3>
            <ul className="footer-links">
              <li><a href="/advertising">إعلانات</a></li>
              <li><a href="/privacy">سياسة الخصوصية</a></li>
              <li><a href="/terms">الشروط والأحكام</a></li>
            </ul>
          </div>

          {/* تواصل اجتماعي */}
          <div className="footer-block">
            <h3 className="footer-heading">تابعنا</h3>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} أخبارنا - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    ) : footerEnglish()
  );
}


function footerEnglish (){
    return(
        <footer className="footer">
      <div className="footer-inner">
        {/* Logo and Description */}
        <div className="footer-block">
          <h2 className="footer-logo">OurNews</h2>
          <p className="footer-text">
            We provide comprehensive coverage of the latest local and global news with accuracy and professionalism.
          </p>
        </div>

        {/* Website Links */}
        <div className="footer-block">
          <h3 className="footer-heading">Important Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Policies */}
        <div className="footer-block">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><a href="/advertising">Advertising</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-block">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OurNews - All rights reserved</p>
      </div>
    </footer>
    )
}
