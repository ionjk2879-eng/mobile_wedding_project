import React, { useState } from 'react';
import EditorContainer from './components/Editor/EditorContainer';
import Hero from './components/Preview/Hero';
import Greeting from './components/Preview/Greeting';
import Gallery from './components/Preview/Gallery';
import Location from './components/Preview/Location';
import Money from './components/Preview/Money';
import Share from './components/Preview/Share';
import { InvitationData } from './types';

const App: React.FC = () => {
  const [data, setData] = useState<InvitationData>({
    groomName: '김지현',
    brideName: '이민지',
    date: '2026. 10. 24. SAT',
    time: 'PM 12:30',
    venueName: '서울 웨딩 가든',
    venueAddress: '서울 강남구 테헤란로 123',
    greetingTitle: '초대합니다',
    greetingContent: '곁에 있을 때 가장 나다운 모습이 되게 하는 사람,\n꿈을 꾸게 하고, 그 꿈을 함께 나누고 싶은 사람을 만났습니다.\n\n서로의 다름을 인정하며,\n서로의 부족함을 채워주는 사랑으로\n행복한 가정을 일구어 나가겠습니다.\n\n저희의 시작을 축복해 주시면 감사하겠습니다.',
    contacts: [
      { role: '신랑', name: '김지현', phone: '010-1234-5678' },
      { role: '신부', name: '이민지', phone: '010-8765-4321' },
    ],
    accounts: [
      { side: '신랑측', bank: '국민은행', number: '123456-78-901234', owner: '김지현' },
      { side: '신부측', bank: '신한은행', number: '110-123-456789', owner: '이민지' },
    ],
    photos: [
      '/src/assets/hero.png',
      '/src/assets/hero.png',
      '/src/assets/hero.png',
      '/src/assets/hero.png',
      '/src/assets/hero.png',
      '/src/assets/hero.png',
    ],
  });

  return (
    <div className="builder-layout">
      <div className="editor-panel">
        <header className="builder-header">
          <h1>💍 Invitation Builder</h1>
          <p>내용을 입력하면 오른쪽에서 실시간으로 확인할 수 있습니다.</p>
        </header>
        <EditorContainer data={data} onChange={setData} />
      </div>

      <div className="preview-panel">
        <div className="phone-frame">
          <div className="phone-content">
            <Hero data={data} />
            <Greeting data={data} />
            <Gallery data={data} />
            <Location data={data} />
            <Money data={data} />
            <Share data={data} />
          </div>
        </div>
      </div>

      <style>{`
        .builder-layout {
          display: grid;
          grid-template-columns: 400px 1fr;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: #f0f2f5;
        }
        .editor-panel {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          z-index: 10;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }
        .builder-header {
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        .builder-header h1 {
          font-size: 1.4rem;
          margin: 0;
          color: #333;
        }
        .builder-header p {
          font-size: 0.8rem;
          color: #888;
          margin: 5px 0 0 0;
        }
        .preview-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          overflow-y: auto;
        }
        .phone-frame {
          width: 375px;
          height: 812px;
          background: white;
          border: 12px solid #333;
          border-radius: 40px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.2);
          overflow: hidden;
          position: relative;
        }
        .phone-content {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .phone-content::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 900px) {
          .builder-layout {
            grid-template-columns: 1fr;
            overflow-y: auto;
          }
          .editor-panel {
            height: auto;
          }
          .preview-panel {
            padding: 20px;
          }
          .phone-frame {
            width: 100%;
            max-width: 375px;
            height: 667px;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
