// pages/training.tsx
import { useState, useRef } from "react";
import { pos_AndroidLink } from "@/lib/data";

export default function Training() {
  const [language, setLanguage] = useState("zh");
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleLanguageChange = (lang: string) => {
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
    <div className="flex">
      <div className="flex-1 flex flex-col items-center">
        <h1 className="font-bold text-2xl my-4">Training Page</h1>
        <div className="my-4">
          <button
            className="mx-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => handleLanguageChange("zh")}
          >
            中文
          </button>
          <button
            className="mx-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => handleLanguageChange("en")}
          >
            English
          </button>
        </div>

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
      <div className="ml-10 w-40">
        <div className="fixed top-20 text-left">
          <h2 className="font-bold text-xl">
            {language === "zh" ? "导航" : "Navigation"}
          </h2>
          <ul className=" list-item">
            {pos_AndroidLink[language].map((video, index) => (
              <li key={index} className="my-1 ">
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
  );
}
