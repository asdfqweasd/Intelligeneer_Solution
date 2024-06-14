// pages/training.js
import { useState } from 'react';

export default function Training() {
  const [language, setLanguage] = useState('zh');

  const handleLanguageChange = (lang:string) => {
    setLanguage(lang);
  };

   // YouTube 播放列表 ID，根据语言选择不同的播放列表
   const playlistId = language === 'zh' ? 'PLARAy0Gh8lsbpj24ZXkit1nvr_k2tjoPK' : 'PLARAy0Gh8lsbpj24ZXkit1nvr_k2tjoPK';

  return (
    <div>
      <h1 className='left-1/2 font-bold text-2xl'>Training Page</h1>
      <div className=''>
        <button className='mx-4  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleLanguageChange('zh')}>中文</button>
        <button className='mx-4  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleLanguageChange('en')}>English</button>
      </div>
      <div>
        {/* 根据语言状态显示不同的内容 */}
        {language === 'zh' && (
          <p>中文组件</p>
        )}
        {language === 'en' && (
          <p>English Component</p>
        )}
      </div>
      <div className="video-container">
        <iframe
          width="860"
          height="515"
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <style jsx>{`
        .video-container {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
