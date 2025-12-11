import React, { useState } from 'react';

const baseStyle: React.CSSProperties = {
  fontFamily: "'Malgun Gothic', '맑은 고딕', Dotum, '돋움', sans-serif",
  lineHeight: 1.6,
  margin: '20px auto',
  padding: 0,
  maxWidth: 800,
  color: '#333',
};

export default function Privacy() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');

  return (
    <main style={baseStyle}>
      <div
        style={{
          textAlign: 'right',
          marginBottom: 20,
          paddingBottom: 10,
          borderBottom: '1px dashed #ccc',
        }}
      >
        <button onClick={() => setLang('ko')}>한국어(Korean)</button>
        <button onClick={() => setLang('en')} style={{ marginLeft: 8 }}>
          영어(English)
        </button>
      </div>

      <h1
        style={{
          color: '#2c3e50',
          borderBottom: '3px solid #3498db',
          paddingBottom: 5,
          marginTop: 30,
        }}
      >
        KonStudio 개인정보처리방침 (Privacy Policy)
      </h1>

      {lang === 'ko' ? <KoreanSection /> : <EnglishSection />}
    </main>
  );
}

const sectionTitle: React.CSSProperties = {
  color: '#2c3e50',
  borderBottom: '2px solid #ecf0f1',
  paddingBottom: 5,
  marginTop: 30,
};

const sectionContent: React.CSSProperties = {
  paddingLeft: 15,
  marginBottom: 20,
};

const contactInfo: React.CSSProperties = {
  backgroundColor: '#f8f8f8',
  padding: 15,
  borderRadius: 5,
  marginTop: 20,
};

function KoreanSection() {
  return (
    <section>
      <p>
        KonStudio(이하 “개발자”)가 제공하는 <strong style={{ color: '#3498db' }}>모든 앱 및 서비스(이하 “서비스”)</strong>
        는 이용자의 개인정보를 중요하게 생각하며, 「개인정보보호법」 및 Google Play 정책을 준수합니다.
      </p>
      <p>
        본 서비스는 개인정보를 서버로 전송하거나 외부에 저장하지 않으며, 모든 데이터는
        <strong style={{ color: '#3498db' }}> 사용자의 기기(로컬 저장소)</strong>에만 저장됩니다.
      </p>

      <h2 style={sectionTitle}>1. 수집하는 개인정보 항목</h2>
      <div style={sectionContent}>
        <p>본 서비스는 개인정보를 서버 또는 외부 DB에 수집·저장하지 않습니다.</p>
        <p>사용자가 앱 기능을 위해 직접 입력하는 정보(예: 이름, 생일 등)는 다음과 같이 처리됩니다:</p>
        <ul>
          <li>저장 위치: 사용자 기기(Local Storage)</li>
          <li>외부 전송: 없음</li>
          <li>개발자가 접근 가능 여부: 불가능</li>
        </ul>
        <p>자동으로 수집되는 정보도 없습니다.</p>
      </div>

      <h2 style={sectionTitle}>2. 개인정보의 이용 목적</h2>
      <div style={sectionContent}>
        <p>앱에서 입력한 정보는 오직 아래 목적에만 사용됩니다:</p>
        <ul>
          <li>음력 생일 계산 및 사용자 맞춤 기능 제공</li>
        </ul>
        <p>그 외 분석, 광고, 서버 저장 등의 목적으로 일절 사용하지 않습니다.</p>
      </div>

      <h2 style={sectionTitle}>3. 개인정보의 보관 및 이용 기간</h2>
      <div style={sectionContent}>
        <p>모든 정보는 사용자 기기에만 보관되며, 개발자가 확인하거나 접근할 수 없습니다.</p>
        <p>사용자가 앱을 삭제하면 해당 기기에 저장된 정보는 모두 함께 삭제됩니다.</p>
      </div>

      <h2 style={sectionTitle}>4. 개인정보의 제3자 제공</h2>
      <div style={sectionContent}>
        <p>본 서비스는 개인정보를 제3자에게 제공하지 않습니다.</p>
      </div>

      <h2 style={sectionTitle}>5. 개인정보 처리의 위탁</h2>
      <div style={sectionContent}>
        <p>본 서비스는 개인정보를 처리하는 어떠한 업무도 외부 업체에 위탁하지 않습니다.</p>
      </div>

      <h2 style={sectionTitle}>6. 사용자의 권리</h2>
      <div style={sectionContent}>
        <p>사용자는 언제든지 앱 내 기능을 통해 정보를 삭제할 수 있습니다.</p>
        <p>앱 삭제 시 해당 기기에 저장된 모든 정보가 자동으로 삭제됩니다.</p>
        <p>문의는 다음 이메일로 가능합니다.</p>
      </div>

      <h2 style={sectionTitle}>7. 개인정보 보호를 위한 조치</h2>
      <div style={sectionContent}>
        <p>비록 개인정보를 서버에 저장하지 않지만, 서비스는 다음과 같은 보호 조치를 따릅니다:</p>
        <ul>
          <li>개인정보를 외부로 전송하지 않음</li>
          <li>모든 정보는 사용자 디바이스에만 저장</li>
          <li>민감한 정보 최소/비수집 정책</li>
        </ul>
      </div>

      <h2 style={sectionTitle}>8. 어린이의 개인정보 보호</h2>
      <div style={sectionContent}>
        <p>서비스는 만 13세 미만 아동으로부터 개인정보를 별도로 수집하지 않습니다.</p>
        <p>사용자가 입력한 정보는 법적 개인정보로 취급되지 않으며 기기 내에서만 관리됩니다.</p>
      </div>

      <h2 style={sectionTitle}>9. 개인정보처리방침 변경</h2>
      <div style={sectionContent}>
        <p>본 개인정보처리방침은 법령 또는 서비스 변경에 따라 수정될 수 있으며, 변경 시 앱 또는 웹페이지를 통해 공지합니다.</p>
        <p>
          시행일: <strong style={{ color: '#3498db' }}>2025년 12월 09일</strong>
        </p>
      </div>

      <h2 style={sectionTitle}>10. 문의처</h2>
      <div style={{ ...sectionContent, ...contactInfo }}>
        <p>본 개인정보처리방침에 대한 문의는 아래로 연락해 주세요.</p>
        <p>
          📧{' '}
          <a href="mailto:ckk9114@naver.com" style={{ color: '#3498db' }}>
            ckk9114@naver.com
          </a>
        </p>
        <p>📌 KonStudio</p>
      </div>
    </section>
  );
}

function EnglishSection() {
  return (
    <section>
      <h1 style={{ ...sectionTitle, borderBottom: '3px solid #3498db' }}>Privacy Policy - KonStudio</h1>
      <p>
        KonStudio (“Developer”) provides <strong style={{ color: '#3498db' }}>all applications and services</strong>{' '}
        (“Service”) and values the privacy of its users. This Service complies with the Personal Information Protection
        Act of Korea and Google Play policies.
      </p>
      <p>
        The Service <strong>does not transmit or store any personal information on external servers</strong>, and all
        data is stored <strong>only on the user’s device (local storage)</strong>.
      </p>

      <h2 style={sectionTitle}>1. Personal Information Collected</h2>
      <div style={sectionContent}>
        <p>The Service does not collect or store any personal information on servers or external databases.</p>
        <p>Information entered directly by the user (e.g., name, birthday) is handled as follows:</p>
        <ul>
          <li>Storage location: User device (Local Storage)</li>
          <li>External transmission: None</li>
          <li>Developer access: Not possible</li>
        </ul>
        <p>The Service also <strong>does not automatically collect any information</strong>.</p>
      </div>

      <h2 style={sectionTitle}>2. Purpose of Using Personal Information</h2>
      <div style={sectionContent}>
        <p>Information entered within the app is used solely for the following purpose:</p>
        <ul>
          <li>Lunar birthday calculation and personalized features.</li>
        </ul>
        <p>It is <strong>not</strong> used for analytics, advertising, or server storage in any form.</p>
      </div>

      <h2 style={sectionTitle}>3. Retention and Use Period of Personal Information</h2>
      <div style={sectionContent}>
        <p>All information is stored only on the user’s device, and the developer cannot view or access it.</p>
        <p>When the user deletes the app, all locally stored data is permanently removed from the device.</p>
      </div>

      <h2 style={sectionTitle}>4. Provision of Personal Information to Third Parties</h2>
      <div style={sectionContent}>
        <p>The Service <strong>does not provide personal information to any third parties</strong>.</p>
      </div>

      <h2 style={sectionTitle}>5. Entrustment of Personal Information Processing</h2>
      <div style={sectionContent}>
        <p>The Service <strong>does not outsource any personal information processing</strong> to external companies.</p>
      </div>

      <h2 style={sectionTitle}>6. User Rights</h2>
      <div style={sectionContent}>
        <p>Users may delete their information at any time using available features within the app.</p>
        <p>When the app is deleted, all related data stored on the device is also deleted automatically.</p>
        <p>For inquiries, please contact:</p>
      </div>

      <h2 style={sectionTitle}>7. Measures to Protect Personal Information</h2>
      <div style={sectionContent}>
        <p>Although personal information is not stored on servers, the Service implements the following protective measures:</p>
        <ul>
          <li>No transmission of personal information outside the device</li>
          <li>All data stored locally on the user’s device</li>
          <li>Minimal and non-sensitive data collection policy</li>
        </ul>
      </div>

      <h2 style={sectionTitle}>8. Protection of Children’s Personal Information</h2>
      <div style={sectionContent}>
        <p>The Service <strong>does not knowingly collect personal information from children under the age of 13</strong>.</p>
        <p>Information entered by the user is not transmitted externally and is managed only within the device.</p>
      </div>

      <h2 style={sectionTitle}>9. Changes to the Privacy Policy</h2>
      <div style={sectionContent}>
        <p>This Privacy Policy may be updated according to legal or service changes. Any updates will be notified through the app or webpage.</p>
        <p>
          Effective Date: <strong style={{ color: '#3498db' }}>December 09, 2025</strong>
        </p>
      </div>

      <h2 style={sectionTitle}>10. Contact Information</h2>
      <div style={{ ...sectionContent, ...contactInfo }}>
        <p>If you have questions regarding this Privacy Policy, please contact:</p>
        <p>
          📧{' '}
          <a href="mailto:ckk9114@naver.com" style={{ color: '#3498db' }}>
            ckk9114@naver.com
          </a>
        </p>
        <p>📌 KonStudio</p>
      </div>
    </section>
  );
}

