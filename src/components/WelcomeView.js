/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const WelcomeView = ({ onDirectorSelect }) => {
  const [licenseCode, setLicenseCode] = useState(['', '', '', '', '', '']);
  const [licenseStatus, setLicenseStatus] = useState('trial');
  const [tournamentsRemaining, setTournamentsRemaining] = useState(10);
  const [daysRemaining, setDaysRemaining] = useState(21);
  const [message, setMessage] = useState('');

  const handleDigitChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    
    const newCode = [...licenseCode];
    newCode[index] = value.slice(-1);
    setLicenseCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const validateTrialCode = (code) => {
    return code === '111234';
  };

  const validateFullLicense = (code) => {
    if (code.length !== 6) return false;
    if (!/^\d{6}$/.test(code)) return false;
    const sum = code.split('').reduce((total, digit) => total + parseInt(digit), 0);
    return sum === 37;
  };

  const handleLicenseSubmit = () => {
    const codeString = licenseCode.join('');
    
    if (validateTrialCode(codeString)) {
      setMessage('Trial reset! You have 10 tournaments and 21 days.');
    } else if (validateFullLicense(codeString)) {
      setMessage('Full license activated! Thank you for your purchase.');
      setLicenseStatus('full');
    } else {
      setMessage('Invalid license code. Please check and try again.');
    }
    setLicenseCode(['', '', '', '', '', '']);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1e293b, #1e40af, #1e293b)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        padding: '40px',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #1e40af, #64748b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px'
          }}>
            Bridge Tournament Scorer
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Professional Scoring Software</p>
        </div>

        <div style={{
          background: '#f1f5f9',
          padding: '20px',
          borderRadius: '15px',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#1e40af', marginBottom: '15px' }}>Free Trial Active</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e40af' }}>{tournamentsRemaining}</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Tournaments Left</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e40af' }}>{daysRemaining}</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Days Left</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{ 
            display: 'block',
            textAlign: 'center', 
            marginBottom: '15px',
            color: '#64748b',
            fontWeight: '600'
          }}>
            Enter License Code
          </label>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px'
          }}>
            {licenseCode.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                style={{
                  width: '50px',
                  height: '50px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  background: digit ? '#f8fafc' : 'white'
                }}
                maxLength="1"
              />
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={handleLicenseSubmit}
              style={{
                padding: '12px 30px',
                background: 'linear-gradient(to right, #2563eb, #3b82f6)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Apply License
            </button>
          </div>
          {message && (
            <div style={{
              marginTop: '15px',
              padding: '12px',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '0.9rem',
              fontWeight: '500',
              background: message.includes('Invalid') ? '#fef2f2' : '#f0fdf4',
              color: message.includes('Invalid') ? '#dc2626' : '#16a34a',
              border: message.includes('Invalid') ? '1px solid #fecaca' : '1px solid #bbf7d0'
            }}>
              {message}
            </div>
          )}
        </div>

        <button
          onClick={onDirectorSelect}
          style={{
            width: '100%',
            padding: '18px',
            background: 'linear-gradient(to right, #2563eb, #3b82f6)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '30px'
          }}
        >
          Start Tournament Setup
        </button>

        <div style={{ textAlign: 'center', padding: '20px', background: '#f8fafc', borderRadius: '10px' }}>
          <p style={{ margin: '5px 0', color: '#64748b' }}>For annual license contact:</p>
          <a href="mailto:mike.calpe@gmail.com" style={{ color: '#2563eb', fontWeight: 'bold' }}>
            mike.calpe@gmail.com
          </a>
          <p style={{ margin: '10px 0 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>
            Trial reset code: 111234
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;