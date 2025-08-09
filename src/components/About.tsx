import React from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={48} />,
      title: '全栈开发',
      description: '精通前端和后端技术栈，能够独立完成完整的产品开发'
    },
    {
      icon: <Zap size={48} />,
      title: 'AI驱动',
      description: '利用AI工具提升开发效率，探索智能化的解决方案'
    },
    {
      icon: <Users size={48} />,
      title: '团队协作',
      description: '具备良好的团队协作能力，擅长敏捷开发和项目管理'
    },
    {
      icon: <Target size={48} />,
      title: '用户体验',
      description: '专注于用户体验设计，创造直观易用的产品界面'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header fade-in-up">
          <h2 className="section-title">关于我</h2>
          <p className="section-subtitle">
            一名充满热情的开发者，致力于用技术创造更美好的数字体验
          </p>
        </div>

        <div className="about-content">
          <div className="about-text fade-in-up">
            <p>
              我是一名专注于现代Web开发的全栈工程师，拥有丰富的React、TypeScript
              和Node.js开发经验。我热衷于探索最新的技术趋势，特别是AI在软件开发中的应用。
            </p>
            <p>
              在我的职业生涯中，我参与了多个大型项目的开发，从用户界面设计到后端架构，
              都有着深入的理解和实践经验。我相信优秀的代码不仅要功能完善，更要易于维护和扩展。
            </p>
            <p>
              除了技术开发，我也关注产品设计和用户体验，努力在技术实现和用户需求之间
              找到最佳的平衡点，创造真正有价值的产品。
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;