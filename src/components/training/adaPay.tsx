import { useState, useRef } from "react";
import { adaPayLink as adapayData } from "@/lib/data";

interface AdapayLanguageData {
  zh: { name: string; value: string }[];
  en: { name: string; value: string }[];
}



export default function AdapayTraining() {
  const [language, setLanguage] = useState<keyof AdapayLanguageData | null>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleLanguageChange = (lang: keyof AdapayLanguageData) => {
    setLanguage(lang);
  };

  const handleScrollToVideo = (index: number) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      const elementRect = videoElement.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle =
        absoluteElementTop - (window.innerHeight / 2 - elementRect.height / 2);
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl my-4 left-2/3 mx-4">Adapay Training Page</h1>
      <div className="my-4 flex space-x-4">
        <button
          className={`bg-blue-500 text-white px-4 py-2 w-48 rounded hover:bg-blue-600 ${language === 'zh' ? 'bg-blue-700' : ''}`}
          onClick={() => handleLanguageChange("zh")}
        >
          选择中文视频
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 w-60 rounded hover:bg-blue-600 ${language === 'en' ? 'bg-blue-700' : ''}`}
          onClick={() => handleLanguageChange("en")}
        >
          Select English Videos
        </button>
      </div>
      {language && (
        <div className="flex w-full">
          <div className="flex-1 flex flex-col items-center">
            <div className="video-container my-5 w-full flex flex-col items-center">
              {adapayData[language].map((video, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="mb-5 w-full max-w-3xl mx-auto text-center"
                >
                  <h2 className="text-xl font-semibold text-center mb-2 max-w-full break-words">
                    {video.name}
                  </h2>
                  <iframe
                    width="660"
                    height="450"
                    src={`https://www.youtube.com/embed/${video.value}&vq=hd1080`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className=" mx-auto"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
          {/* 导航栏 */}
          <div className="ml-10 w-40">
            <div className="fixed top-48 text-left">
              <h2 className="font-bold text-xl">
                {language === "zh" ? "导航" : "Navigation"}
              </h2>
              <ul className="list-item">
                {adapayData[language].map((video, index) => (
                  <li key={index} className="my-1">
                    <button
                      className="text-blue-500 hover:text-blue-700 truncate break-all text-left mb-2 max-w-24 md:max-w-3xl break-words"
                      onClick={() => handleScrollToVideo(index)}
                    >
                      {video.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-left my-4">
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleScrollToTop}
                >
                  {language === "zh" ? "回到顶端" : "Scroll to Top"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}