import React from 'react'
import { motion } from 'framer-motion';
import './NewsSection.css';
import SolutionsBg from '../../../Assets/Home/Solutions.jpg';
import DataInsightsImg from '../../../Assets/Home/dataInsights.jpg';
import CbaImg from '../../../Assets/Home/cba.jpg';

const newsData = [
  {
    id: 1,
    image: DataInsightsImg,
    badge: 'Educational',
    badgeType: 'red',
    title: '7 Poweful Learning Tools ',
    subtitle: 'Check out our latest insights and updates on LinkedIn.',
    link: 'https://www.linkedin.com/posts/multiplierskraft_7-tools-for-ld-team-activity-7436653503110066176-tj8Q?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxnNk8B-3iEUf-nFUByxdCJcvLaKmY3Vcc'
  },
  {
    id: 2,
    image: CbaImg,
    badge: 'LinkedIn Post',
    badgeType: 'green',
    title: 'Recent News & Announcements',
    subtitle: 'Stay connected with our latest news and industry insights.',
    link: 'https://www.linkedin.com/company/multiplierskraft/'
  }
];

const NewsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <div className="news-outer-box">
      <motion.div
        className="news-inner-box"
        style={{ backgroundImage: `url(${SolutionsBg})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
          <motion.h2
            className="news-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent News &amp; Publications
          </motion.h2>
          <motion.div
            className="news-cards-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {newsData.map((news, index) => (
              <motion.div
                key={news.id}
                className="news-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div className="news-card-upper">
                  <img src={news.image} alt={news.badge} />
                </motion.div>
                <div className="news-card-lower">
                  <motion.div
                    className={`news-badge news-badge--${news.badgeType}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                  >
                    {news.badge}
                  </motion.div>
                  <h3 className="news-card-title">{news.title}</h3>
                  <p className="news-card-subtitle">{news.subtitle}</p>
                  <motion.a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-learn-more"
                    whileHover={{
                      x: 5,
                      textDecoration: 'underline',
                      transition: { duration: 0.2 }
                    }}
                  >
                    Learn more &gt;
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </motion.div>
    </div>
  )
}

export default NewsSection
