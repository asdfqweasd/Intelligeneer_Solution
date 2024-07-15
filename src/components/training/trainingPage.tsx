import { useState, useRef, useEffect } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const itemsPerPage = 10;

  const handleLanguageChange = (lang: keyof LanguageData) => {
    setLanguage(lang);
    setCurrentPage(1);
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

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    if (language) {
      const totalPages = Math.ceil(
        pos_AndroidLink[language].length / itemsPerPage
      );
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }
  };

  useEffect(() => {
    handleScrollToTop();
  }, [currentPage]);

  if (!language) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ">
        <h1 className="font-bold text-4xl my-8 text-center text-black">
          PosPal Training Page
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative group">
            <button
              className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300 w-full sm:w-48"
              onClick={() => handleLanguageChange("zh")}
            >
              选择中文视频
            </button>
            {/* 中文下拉菜单 */}
          </div>
          <div className="relative group">
            <button
              className="bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300 w-full sm:w-60"
              onClick={() => handleLanguageChange("en")}
            >
              Select English Videos
            </button>
            {/* 英文下拉菜单 */}
          </div>
        </div>
      </div>
    );
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pos_AndroidLink[language].slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(pos_AndroidLink[language].length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-r relative">
      <div className="relative z-10 flex flex-col items-center pt-8">
        <h1 className="font-bold text-4xl my-8 text-center text-black">
          PosPal Training Page
        </h1>
        {/* 导航栏在小屏幕时显示 */}
        <div className="w-full max-w-96 mx-auto px-4 mt-8 lg:hidden">
          <div className="bg-white rounded-lg shadow-lg p-6 mx-auto">
            <h2 className="font-bold text-2xl mb-4 truncate">
              {language.startsWith("zh") ? "导航" : "Navigation"}
            </h2>
            <ul className="space-y-2 mb-6 max-h-[50vh] overflow-y-auto">
              {currentItems.map((video, index) => (
                <li key={indexOfFirstItem + index}>
                  <button
                    className="text-blue-500 hover:text-blue-700 text-left w-full text-sm truncate"
                    onClick={() =>
                      handleScrollToVideo(indexOfFirstItem + index)
                    }
                  >
                    {indexOfFirstItem + index + 1 + " : " + video.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-4">
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                {language.startsWith("zh") ? "上一页" : "Prev"}
              </button>
              <span className="text-sm font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                {language.startsWith("zh") ? "下一页" : "Next"}
              </button>
            </div>
            <button
              className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 w-full"
              onClick={handleScrollToTop}
            >
              {language.startsWith("zh") ? "回到顶端" : "Scroll to Top"}
            </button>
          </div>
          {/* 回到顶部按钮 */}
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-4 right-4 bg-black text-white py-3 w-10 mb-8 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 z-10"
          >
            ⬆
          </button>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 items-start mt-8 space-y-8 lg:space-y-0">
          <div className="flex-1 flex flex-col items-center lg:mr-8">
            <div className="my-4 flex space-x-4">{/* 语言选择下拉菜单 */}</div>

            {/* 视频容器 */}
            <div className="video-container w-full flex flex-col items-center space-y-10">
              {currentItems.map((video, index) => (
                <div
                  key={indexOfFirstItem + index}
                  ref={(el) => {
                    videoRefs.current[indexOfFirstItem + index] = el;
                  }}
                  className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <h2 className="text-xl font-semibold text-center py-4 bg-gray-200">
                    {indexOfFirstItem + index + 1 + " : " + video.name}
                  </h2>
                  <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${video.value}&vq=hd1080`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="mx-auto"
                  ></iframe>
                </div>
              ))}
            </div>

            {/* 分页控制 */}
            <div className="flex justify-between w-full max-w-md my-8">
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                {language.startsWith("zh") ? "上一页" : "Previous"}
              </button>
              <span className="flex items-center font-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                {language.startsWith("zh") ? "下一页" : "Next"}
              </button>
            </div>
          </div>

          {/* 导航栏在大屏幕时显示 */}
          <div className="hidden lg:block lg:w-80 mt-8 lg:mt-0 fixed right-4 top-1/2 transform -translate-y-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-2xl mb-4">
                {language.startsWith("zh") ? "导航" : "Navigation"}
              </h2>
              <ul className="space-y-2 mb-6 max-h-[50vh] overflow-y-auto">
                {currentItems.map((video, index) => (
                  <li key={indexOfFirstItem + index}>
                    <button
                      className="text-blue-500 hover:text-blue-700 text-left w-full text-sm truncate"
                      onClick={() =>
                        handleScrollToVideo(indexOfFirstItem + index)
                      }
                    >
                      {indexOfFirstItem + index + 1 + " : " + video.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mb-4">
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  {language.startsWith("zh") ? "上一页" : "Prev"}
                </button>
                <span className="text-sm font-semibold">
                  {currentPage} / {totalPages}
                </span>
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  {language.startsWith("zh") ? "下一页" : "Next"}
                </button>
              </div>
              <button
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 w-full"
                onClick={handleScrollToTop}
              >
                {language.startsWith("zh") ? "回到顶端" : "Scroll to Top"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
