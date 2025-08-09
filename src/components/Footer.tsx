import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/Rexingleung',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:rexingleung@126.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: '首页', href: '#hero' },
    { name: '关于', href: '#about' },
    { name: '技能', href: '#skills' },
    { name: '项目', href: '#projects' },
    { name: '联系', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">AI-First Demo</h3>
            <p className="footer-description">
              一个基于React + TypeScript的现代化个人博客首页，
              展示最佳实践和设计理念。
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">快速导航</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">技术栈</h4>
            <ul className="tech-list">
              <li>React + TypeScript</li>
              <li>CSS3 + 响应式设计</li>
              <li>Lucide React Icons</li>
              <li>Modern Web Standards</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">联系信息</h4>
            <div className="contact-info">
              <p>📧 rexingleung@126.com</p>
              <p>📍 中国，深圳</p>
              <p>🕰️ 全天候在线</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              &copy; {currentYear} AI-First Demo. 由 <Heart size={16} className="heart" /> 精心打造
            </p>
          </div>
          <div className="footer-info">
            <p>使用 React + TypeScript 构建</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;