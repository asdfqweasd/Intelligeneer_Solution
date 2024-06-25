import { useState, useRef } from "react";
import { pos_AndroidLink } from "@/lib/data";

interface LanguageData {
  zh: { name: string; value: string }[];
  en: { name: string; value: string }[];
  zhme: { name: string; value: string }[];
  enme: { name: string; value: string }[];
  zhbc: { name: string; value: string }[];
  enbc: { name: string; value: string }[];
}

export default function Training() {
  const [language, setLanguage] = useState<keyof LanguageData | null>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleLanguageChange = (lang: keyof LanguageData) => {
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
      <h1 className="font-bold text-4xl my-4 left-2/3 mx-4">PosPal Training Page</h1>
      {!language ? (
        <div className="my-4 flex space-x-4">
          <div className="relative group">
            <button
              className="bg-blue-500 text-white px-4 py-2 w-48 rounded hover:bg-blue-600"
              onClick={() => handleLanguageChange("zh")}
            >
              选择中文视频
            </button>
          </div>
          <div className="relative group">
            <button
              className="bg-blue-500 text-white px-4 py-2 w-60 rounded hover:bg-blue-600"
              onClick={() => handleLanguageChange("en")}
            >
              Select English Videos
            </button>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex-1 flex flex-col items-center">
            <div className="my-4 flex space-x-4">
              <div className="relative group">
                <button
                  className="bg-blue-500 text-white px-4 py-2 w-48 rounded hover:bg-blue-600"
                  onClick={() => handleLanguageChange("zh")}
                >
                  银豹教学
                </button>
                <ul className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white border border-gray-200 mt-1 rounded shadow-lg transition-all duration-300 ease-in-out delay-75">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("zh")}
                    >
                      收银端教学-安卓版
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("zhme")}
                    >
                      收银端教学-会员功能
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("zhbc")}
                    >
                      后台教学
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative group">
                <button
                  className="bg-blue-500 text-white px-4 py-2 w-48 rounded hover:bg-blue-600"
                  onClick={() => handleLanguageChange("en")}
                >
                  PosPal Training
                </button>
                <ul className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white border border-gray-200 mt-1 rounded shadow-lg transition-all duration-300 ease-in-out delay-75">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("en")}
                    >
                      PosPal -Android Version
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("enme")}
                    >
                      PosPal Training - Membership Function
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleLanguageChange("enbc")}
                    >
                      Backend Training
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 视频容器 */}
            <div className="video-container my-5 w-full flex flex-col items-center">
              {pos_AndroidLink[language].map((video, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="mb-5"
                >
                  <h2 className="text-xl font-semibold text-center">
                    {video.name}
                  </h2>
                  <iframe
                    width="660"
                    height="450"
                    src={`https://www.youtube.com/embed/${video.value}&vq=hd1080`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                {pos_AndroidLink[language].map((video, index) => (
                  <li key={index} className="my-1">
                    <button
                      className="text-blue-500 hover:text-blue-700 truncate break-all text-left"
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
