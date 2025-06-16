import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
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
  );
}
