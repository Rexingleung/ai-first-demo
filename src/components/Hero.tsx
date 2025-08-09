import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            你好，我是 <span className="highlight">AI开发者</span>
          </h1>
          <p className="hero-subtitle">
            专注于AI驱动的前端开发，创造智能化的用户体验
          </p>
          <p className="hero-description">
            这是一个基于React + TypeScript构建的个人博客首页，
            展示现代化的设计理念和最佳的开发实践。
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToNext()}>
              了解更多
            </button>
            <button className="btn btn-secondary" onClick={() => window.open('https://github.com/Rexingleung/ai-first-demo', '_blank')}>
              查看源码
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/Rexingleung" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rexingleung@126.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual float">
          <div className="hero-avatar">
            <div className="avatar-circle">
              <span className="avatar-text">AI</span>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToNext}>
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
