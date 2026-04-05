import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet, 
  Clock, 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  Hospital, 
  Database, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Hero = () => (
      <section className="section" style={{ paddingTop: '10rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -2,
      opacity: 0.3,
      filter: 'grayscale(100%)'
    }}>
      <img src={heroBg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--hero-overlay)' }}></div>
    </div>
    
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ color: 'var(--hero-text)', marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: 'clamp(3rem, 10vw, 5rem)' }}>
          Get verified blood <br />
          <span className="text-gradient">Under 20 Minutes.</span>
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-secondary)', fontSize: '1.3rem', lineHeight: '1.8' }}>
          SwiftAid is Nigeria's trusted coordination platform bridging the gap between hospitals and donors when seconds matter most.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/join" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
            Get Started Now <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </Link>
          <Link to="/about" className="btn btn-outline" style={{ fontSize: '1.2rem', padding: '1.2rem 2.5rem' }}>
            Our Mission
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{ marginTop: '6rem' }}
      >
        <div style={{ backgroundColor: 'var(--card-bg)', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '1px solid var(--glass-border)', padding: '3rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
              <div>
                 <Clock size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                 <h3 style={{ fontSize: '2.5rem' }}>20m</h3>
                 <p style={{ color: 'var(--text-muted)' }}>Response Target</p>
              </div>
              <div>
                 <Hospital size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                 <h3 style={{ fontSize: '2.5rem' }}>100%</h3>
                 <p style={{ color: 'var(--text-muted)' }}>Verified Access</p>
              </div>
              <div>
                 <Activity size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                 <h3 style={{ fontSize: '2.5rem' }}>24/7</h3>
                 <p style={{ color: 'var(--text-muted)' }}>Active Coordination</p>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="section" style={{ background: 'var(--bg-dark)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>The <span className="text-gradient">Critical Need</span> in Nigeria</h2>
          <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            Over 70% of blood needed in emergencies is currenty unavailable in time. SwiftAid addresses the fragmented systems resulting in dangerous delays.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             {[
               "Critical delays in treating childbirth complications",
               "Fragmented hematology lab networks",
               "Severe blood shortage in urban and rural clusters"
             ].map((text, i) => (
               <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                 <CheckCircle2 color="var(--accent)" size={28} style={{ flexShrink: 0 }} />
                 <span style={{ fontSize: '1.1rem' }}>{text}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="card glow" style={{ padding: '3rem' }}>
          <Activity size={80} color="var(--accent)" style={{ marginBottom: '2rem' }} />
          <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Always Ready</h3>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            SwiftAid is the coordination layer that connects hospitals to blood banks in real-time. We eliminate the search, so you can focus on the patient.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section id="solution" className="section" style={{ background: 'var(--bg-darker)' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}>Intelligent <span className="text-gradient">Coordination</span></h2>
      <p style={{ maxWidth: '800px', margin: '2rem auto 5rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
        A unified coordination platform that scales with your hospital's needs.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Database size={48} color="var(--accent)" style={{ marginBottom: '2rem' }} />
          <h3>Real-time Inventory</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Direct integration with supply partners for instant visibility into available blood types.
          </p>
        </motion.div>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Zap size={48} color="var(--accent)" style={{ marginBottom: '2rem' }} />
          <h3>Automated Matching</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Our matching engine identifies the best source and coordinates logistics simultaneously.
          </p>
        </motion.div>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '2rem' }} />
          <h3>Safety First</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Rigorous verification protocols for every unit of blood fulfilled through our network.
          </p>
        </motion.div>
        <motion.div 
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Droplet size={48} color="var(--accent)" style={{ marginBottom: '2rem' }} />
          <h3>Guardian Donation Hub</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            A tamper-proof ecosystem designed to protect donor data and ensure the safe, verified tracking of every life-saving gift.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Home = () => (
  <>
    <Hero />
    <ProblemSection />
    <SolutionSection />
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="glass-card" style={{ padding: '4rem', borderRadius: '40px', background: 'var(--glass)', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '2rem' }}>Ready to Secure Your Supply?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            Join the network of hospitals relying on SwiftAid for life-saving coordination.
          </p>
          <Link to="/join" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Join as a hospital
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
