import React from 'react';

const ValueProposition = () => {
  const styles = {
    body: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f5f7fa',
      margin: 0,
      padding: '50px 20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.5em',
      marginBottom: '10px',
    },
    spanHighlight: {
      color: '#f7b733',
      fontStyle: 'italic',
    },
    tagline: {
      color: '#666',
      fontSize: '1em',
      marginBottom: '40px',
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#f9f9f9',
      padding: '25px',
      borderRadius: '10px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    },
    headingCard: {
      marginTop: 0,
      color: '#333',
    },
    paragraph: {
      color: '#666',
      fontSize: '0.95em',
    },
  };

  return (
    <div style={styles.body}>
      <h2 style={styles.heading}>
        Our <span style={styles.spanHighlight}>Value Proposition</span>
      </h2>



    <ul style={{ ...styles.tagline, listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
  <li>🚀 Speed</li>
  <li>⚡ Agility</li>
  <li>🤝 Trust</li>
  <li>💰 Cost Efficiency</li>
  <li>💡 Innovation</li>
  <li>📈 Scalability</li>
</ul>

<div style={{ textAlign: 'center', fontSize: '1.1em', color: '#555', display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center' }}>
  <span>Speed</span> <span>•</span> <span>Agility</span> <span>•</span> <span>Trust</span> <span>•</span> <span>Cost Efficiency</span>  <span>•</span>
  <span>Innovation</span> <span>•</span>
  <span>Scalability</span>
</div>
<div style={styles.tagline}>Speed | Agility | Trust | Cost Efficiency | Innovation | Scalability</div>



      <div style={styles.features}>
        {[
          {
            title: 'Faster Implementations',
            desc:
              'We accelerate your business transformation through in-house and marketplace accelerators, ensuring seamless integration and efficiency.',
          },
          {
            title: 'Agility to Evolve',
            desc:
              'We cater to evolving customer needs through our proven delivery frameworks, helping businesses stay ahead of the curve.',
          },
          {
            title: 'Trust and Transparency',
            desc:
              'We believe in transparent communication and act as your trusted advisor, ensuring seamless partnerships.',
          },
          {
            title: 'Cost Efficiency Through Automation',
            desc:
              'Our focus on year-over-year efficiencies helps businesses optimize costs through intelligent automation.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={e => {
              e.currentTarget.style.border = '2px solid #f7b733';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <h3 style={styles.headingCard}>{item.title}</h3>
            <p style={styles.paragraph}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueProposition;
