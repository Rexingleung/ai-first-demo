import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('表单数据:', formData);
    alert('感谢您的留言！我会尽快回复您。');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: '邮箱',
      content: 'rexingleung@126.com',
      link: 'mailto:rexingleung@126.com'
    },
    {
      icon: <Phone size={24} />,
      title: '电话',
      content: '+86 138-0013-8000',
      link: 'tel:+8613800138000'
    },
    {
      icon: <MapPin size={24} />,
      title: '位置',
      content: '中国，深圳',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header fade-in-up">
          <h2 className="section-title">联系方式</h2>
          <p className="section-subtitle">
            有项目合作或技术交流的想法？欢迎随时联系我
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-up">
            <h3 className="info-title">让我们开始对话</h3>
            <p className="info-description">
              我很乐意听到您的想法和项目需求。无论是技术咨询、项目合作还是简单的交流，
              我都会认真对待每一次沟通。
            </p>
            
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4 className="contact-title">{item.title}</h4>
                    <p className="contact-content">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="您的姓名"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="您的邮箱"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="留言内容"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="form-textarea"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <Send size={20} />
              <span>发送消息</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;