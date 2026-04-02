import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Droplet, Hospital, Send } from 'lucide-react';

const Join = () => {
  const [activeTab, setActiveTab] = useState('donor');

  const tabs = [
    { id: 'donor', label: 'Donor Network', icon: <Users size={18} /> },
    { id: 'hospital', label: 'Join as Hospital', icon: <Hospital size={18} /> },
    { id: 'bloodbank', label: 'Blood Bank Partner', icon: <Droplet size={18} /> }
  ];

  const getTargetEmail = () => {
    if (activeTab === 'donor') return 'donors@swiftaid.ng';
    if (activeTab === 'hospital') return 'hospitals@swiftaid.ng';
    if (activeTab === 'bloodbank') return 'partners@swiftaid.ng';
    return 'contact@swiftaid.ng';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetEmail = getTargetEmail();
    alert(`Application successfully routed to ${targetEmail}. The SwiftAid team will contact you shortly.`);
    // In production, use a service like Formspree:
    // e.target.action = `https://formspree.io/f/YOUR_ID_HERE`;
    // e.target.submit();
  };

  const renderForm = () => {
    switch(activeTab) {
      case 'donor':
        return (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
             <h3 style={{ marginBottom: '1rem' }}>Join the SwiftAid donor network</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Adebayo" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Oluasegun" required />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>We'll use this to reach you when a match is found near you</p>
              <input type="tel" placeholder="+234 ..." required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Blood Group</label>
                <select required>
                  <option value="">Select...</option>
                  <option>A+</option> <option>A-</option>
                  <option>B+</option> <option>B-</option>
                  <option>AB+</option> <option>AB-</option>
                  <option>O+</option> <option>O-</option>
                  <option>I don't know</option>
                </select>
              </div>
              <div className="form-group">
                <label>State</label>
                <select required>
                  <option value="">Select...</option>
                  <option>Lagos</option> <option>Ogun</option>
                  <option>Oyo</option> <option>Rivers</option>
                  <option>Abuja FCT</option> <option>Kano</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Nearest area / LGA</label>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Helps us match you with nearby emergencies faster</p>
              <input type="text" placeholder="e.g. Ikeja, Lagos" required />
            </div>
            <div className="form-group">
              <label>How often are you available to donate?</label>
              <select required>
                <option value="">Select...</option>
                <option>On-call for urgent requests</option>
                <option>Monthly</option>
                <option>Every 3 months</option>
                <option>Occasional</option>
              </select>
            </div>
            <div className="form-group">
              <label>Preferred contact method (Tick all that apply)</label>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> WhatsApp</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> Phone call</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> SMS</label>
              </div>
            </div>
            <div className="form-group">
              <label>Have you donated blood before?</label>
              <select required>
                <option value="">Select...</option>
                <option>Yes regularly</option>
                <option>Yes once or twice</option>
                <option>No, first time</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem' }}>Join Donor Network</button>
          </form>
        );
      case 'hospital':
        return (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
             <h3 style={{ marginBottom: '1rem' }}>Get verified blood to your ward in under 20 minutes</h3>
            <div className="form-group">
              <label>Hospital / Clinic Name</label>
              <input type="text" placeholder="e.g. St. Nicholas Hospital" required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Contact Person Full Name</label>
                <input type="text" placeholder="Dr. Jane Doe" required />
              </div>
              <div className="form-group">
                <label>Role / Department</label>
                <select required>
                  <option value="">Select...</option>
                  <option>Chief Medical Officer</option>
                  <option>Procurement Officer</option>
                  <option>Hospital Administrator</option>
                  <option>Head of Surgery</option>
                  <option>Head of Obstetrics</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 ..." required />
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" placeholder="procurement@hospital.ng" required />
              </div>
            </div>
            <div className="form-group">
              <label>Hospital Address</label>
              <textarea rows="2" placeholder="Street, City, State" required></textarea>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Average blood requests per month</label>
                <select required>
                  <option value="">Select...</option>
                  <option>1–5</option>
                  <option>6–15</option>
                  <option>16–30</option>
                  <option>30+</option>
                </select>
              </div>
              <div className="form-group">
                <label>Most common blood group needed</label>
                <select required>
                  <option value="">Select...</option>
                  <option>O+</option> <option>A+</option>
                  <option>B+</option> <option>AB+</option>
                  <option>O-</option> <option>Varies/unsure</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>How do you currently source blood? (Tick all that apply)</label>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> In-house blood bank</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> WhatsApp/calls</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> Family donors</label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><input type="checkbox" /> External labs</label>
              </div>
            </div>
            <div className="form-group">
              <label>How often do you face blood sourcing delays (&gt; 2 hours)?</label>
              <select required>
                <option value="">Select...</option>
                <option>Almost never</option>
                <option>Once or twice a month</option>
                <option>Weekly</option>
                <option>Multiple times a week</option>
              </select>
            </div>
            <div className="form-group">
              <label>What would make the biggest difference to your blood procurement? (Optional)</label>
              <textarea rows="3" placeholder="Tell us your biggest bottleneck."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem' }}>Join as a Hospital</button>
          </form>
        );
      case 'bloodbank':
        return (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
             <h3 style={{ marginBottom: '1rem' }}>Partner with SwiftAid as a supply provider</h3>
            <div className="form-group">
              <label>Facility Name</label>
              <input type="text" placeholder="e.g. Lagos Central Blood Bank" required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Contact Person Full Name</label>
                <input type="text" placeholder="Aminu Garba" required />
              </div>
              <div className="form-group">
                <label>Role / Title</label>
                <input type="text" placeholder="Lab Director" required />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234 ..." required />
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" placeholder="facility@lab.ng" required />
              </div>
            </div>
            <div className="form-group">
              <label>Facility Address</label>
              <textarea rows="2" placeholder="Full address of the blood bank" required></textarea>
            </div>
            <div className="form-group">
              <label>Blood groups currently stocked (Tick all available)</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '0.5rem' }}>
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(group => (
                  <label key={group} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    <input type="checkbox" /> {group}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Average monthly units available</label>
                <select required>
                  <option value="">Select...</option>
                  <option>1–20</option>
                  <option>21–50</option>
                  <option>51–100</option>
                  <option>100+</option>
                </select>
              </div>
              <div className="form-group">
                <label>Operating Hours</label>
                <select required>
                  <option value="">Select...</option>
                  <option>24/7</option>
                  <option>Weekdays only</option>
                  <option>Weekdays + Saturday</option>
                  <option>By appointment</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>What is your biggest challenge with current blood demand?</label>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Your answer shapes how we build SwiftAid for blood banks.</p>
              <textarea rows="3" required placeholder="e.g. Cold chain logistics, finding new donors..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '1rem' }}>Register as Blood Bank Partner</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Join the <span className="text-gradient">Network</span></h1>
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.2rem' }}
              >
                {activeTab === 'donor' && "Join Nigeria's fastest growing life-saving community today."}
                {activeTab === 'hospital' && "Get verified blood to your ward in under 20 minutes."}
                {activeTab === 'bloodbank' && "Partner with SwiftAid as a supply provider and expand your reach."}
              </motion.p>
            </AnimatePresence>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Tab Navigation */}
            <div style={{ display: 'flex', overflowX: 'auto', gap: '10px', marginBottom: '3rem', paddingBottom: '10px', scrollbarWidth: 'none', justifyContent: 'center' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: activeTab === tab.id ? 'var(--accent)' : 'var(--glass-border)',
                    background: activeTab === tab.id ? 'var(--accent)' : 'var(--glass)',
                    color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="card"
              style={{ background: 'var(--card-bg)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            >
              {renderForm()}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .form-group label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        input, select, textarea {
          background: var(--glass);
          border: 1px solid var(--glass-border);
          padding: 0.875rem 1rem;
          border-radius: 12px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }
        select option {
          background: var(--bg-dark);
          color: var(--text-primary);
        }
        textarea {
          resize: vertical;
        }
      `}</style>
    </div>
  );
};

export default Join;
