import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { InvitationData } from '../../types';

interface PreviewProps {
  data: InvitationData;
}

const Location: React.FC<PreviewProps> = ({ data }) => {
  const navLinks = [
    { name: '카카오내비', url: 'https://map.kakao.com/' },
    { name: '네이버 지도', url: 'https://map.naver.com/' },
    { name: 'T맵', url: 'https://www.tmap.co.kr/' },
  ];

  return (
    <section className="location section">
      <h2>오시는 길</h2>
      <div className="location-info">
        <h3 className="venue-name">{data.venueName}</h3>
        <p className="address">{data.venueAddress}</p>
      </div>

      <div className="map-placeholder">
        <MapPin size={40} color="#ddd" />
        <p>지도 영역 (API 연결 필요)</p>
      </div>

      <div className="nav-grid">
        {navLinks.map((nav, index) => (
          <a key={index} href={nav.url} target="_blank" rel="noreferrer" className="nav-item">
            <Navigation size={18} />
            <span>{nav.name}</span>
          </a>
        ))}
      </div>

      <style>{`
        .location-info {
          margin-bottom: 20px;
        }
        .venue-name {
          font-size: 1.1rem;
          margin-bottom: 5px;
        }
        .address {
          color: #888;
          font-size: 0.9rem;
        }
        .map-placeholder {
          width: 100%;
          height: 200px;
          background: #f5f5f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #aaa;
          font-size: 0.8rem;
          gap: 10px;
        }
        .nav-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 30px;
        }
        .nav-item {
          padding: 10px;
          border: 1px solid #eee;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
};

export default Location;
