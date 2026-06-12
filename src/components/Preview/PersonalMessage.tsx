import React from 'react';
import { InvitationData } from '../../types';

interface PreviewProps {
  data: InvitationData;
}

const PersonalMessage: React.FC<PreviewProps> = ({ data }) => {
  return (
    <section className="personal-message section" style={{ fontFamily: data.fontFamily }}>
      <div className="message-container">
        <div className="message-box groom">
          <div className="quote-icon">"</div>
          <p>{data.groomMessage}</p>
          <span className="message-name">신랑 {data.groomName}</span>
        </div>
        <div className="message-box bride">
          <div className="quote-icon">"</div>
          <p>{data.brideMessage}</p>
          <span className="message-name">신부 {data.brideName}</span>
        </div>
      </div>

      <style>{`
        .personal-message {
          background-color: #fdfbf9;
          padding: 80px 24px;
        }
        .message-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .message-box {
          position: relative;
          padding: 30px;
          background: #fff;
          border-radius: 24px;
          border: 1px solid #f0eae5;
          box-shadow: 0 10px 30px rgba(184, 156, 142, 0.05);
        }
        .quote-icon {
          font-family: 'Gowun Batang', serif;
          font-size: 3rem;
          color: #e5d1c8;
          position: absolute;
          top: -10px;
          left: 20px;
          line-height: 1;
        }
        .message-box p {
          font-size: 1rem;
          line-height: 1.8;
          color: #4a4543;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          word-break: keep-all;
        }
        .message-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #b89c8e;
          display: block;
          text-align: right;
          letter-spacing: 1px;
        }
        .groom {
          border-left: 4px solid #e5d1c8;
        }
        .bride {
          border-left: 4px solid #b89c8e;
        }
      `}</style>
    </section>
  );
};

export default PersonalMessage;
