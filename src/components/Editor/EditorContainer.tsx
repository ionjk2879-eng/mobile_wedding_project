import React from 'react';
import { InvitationData } from '../../types';

interface EditorProps {
  data: InvitationData;
  onChange: (data: InvitationData) => void;
}

const EditorContainer: React.FC<EditorProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleContactChange = (index: number, field: string, value: string) => {
    const newContacts = [...data.contacts];
    newContacts[index] = { ...newContacts[index], [field]: value };
    onChange({ ...data, contacts: newContacts });
  };

  const handleAccountChange = (index: number, field: string, value: string) => {
    const newAccounts = [...data.accounts];
    newAccounts[index] = { ...newAccounts[index], [field]: value };
    onChange({ ...data, accounts: newAccounts });
  };

  return (
    <div className="editor-container">
      <div className="editor-section">
        <h3>기본 정보</h3>
        <div className="input-group">
          <label>신랑 이름</label>
          <input type="text" name="groomName" value={data.groomName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>신부 이름</label>
          <input type="text" name="brideName" value={data.brideName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>예식 날짜</label>
          <input type="text" name="date" value={data.date} onChange={handleChange} placeholder="2026. 10. 24. SAT" />
        </div>
        <div className="input-group">
          <label>예식 시간</label>
          <input type="text" name="time" value={data.time} onChange={handleChange} placeholder="PM 12:30" />
        </div>
      </div>

      <div className="editor-section">
        <h3>인사말</h3>
        <div className="input-group">
          <label>제목</label>
          <input type="text" name="greetingTitle" value={data.greetingTitle} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>내용</label>
          <textarea name="greetingContent" value={data.greetingContent} onChange={handleChange} rows={5} />
        </div>
      </div>

      <div className="editor-section">
        <h3>장소 정보</h3>
        <div className="input-group">
          <label>예식장 이름</label>
          <input type="text" name="venueName" value={data.venueName} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label>예식장 주소</label>
          <input type="text" name="venueAddress" value={data.venueAddress} onChange={handleChange} />
        </div>
      </div>

      <div className="editor-section">
        <h3>연락처 설정</h3>
        {data.contacts.map((contact, index) => (
          <div key={index} className="nested-input-group">
            <p className="sub-label">{contact.role}</p>
            <input 
              type="text" 
              placeholder="이름" 
              value={contact.name} 
              onChange={(e) => handleContactChange(index, 'name', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="전화번호" 
              value={contact.phone} 
              onChange={(e) => handleContactChange(index, 'phone', e.target.value)} 
            />
          </div>
        ))}
      </div>

      <div className="editor-section">
        <h3>계좌 정보</h3>
        {data.accounts.map((account, index) => (
          <div key={index} className="nested-input-group">
            <p className="sub-label">{account.side}</p>
            <input 
              type="text" 
              placeholder="은행" 
              value={account.bank} 
              onChange={(e) => handleAccountChange(index, 'bank', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="계좌번호" 
              value={account.number} 
              onChange={(e) => handleAccountChange(index, 'number', e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="예금주" 
              value={account.owner} 
              onChange={(e) => handleAccountChange(index, 'owner', e.target.value)} 
            />
          </div>
        ))}
      </div>

      <style>{`
        .editor-container {
          padding: 20px;
          background: #f8f9fa;
          height: 100%;
          overflow-y: auto;
          border-right: 1px solid #e9ecef;
        }
        .editor-section {
          background: white;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .editor-section h3 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 1.1rem;
          color: #333;
          border-left: 4px solid #ff8a8a;
          padding-left: 10px;
        }
        .input-group {
          margin-bottom: 15px;
        }
        .input-group label {
          display: block;
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 5px;
        }
        .input-group input, .input-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.9rem;
          box-sizing: border-box;
        }
        .nested-input-group {
          padding: 15px;
          background: #f9f9f9;
          border-radius: 8px;
          margin-bottom: 10px;
        }
        .nested-input-group input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 5px;
          font-size: 0.85rem;
          box-sizing: border-box;
        }
        .sub-label {
          font-weight: bold;
          font-size: 0.8rem;
          margin-top: 0;
          margin-bottom: 10px;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default EditorContainer;
