import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideProject from "@/components/SideProject";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-stone-400 to-stone-300">
      <header>
        <Header />
      </header>
      <div className="pt-24 pb-16">
        <div className="text-center mb-5 ">
          <span className="text-5xl font-bold my-5 inline-block bg-gradient-to-r from-sky-700 to-sky-600 bg-clip-text text-transparent">
            My Portfolio
          </span>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <SideProject
            image="./weather-app.png"
            name="Weather App"
            link="https://chihuichien.github.io/weather-app/"
          >
            這是一款基於 React 和 JavaScript
            開發的即時天氣查詢網站。使用者可以輸入城市名稱，獲取當地的溫度、體感溫度、濕度，以及當地時間。該網站透過
            OpenWeather API 取得天氣數據，並使用 useState 和 useEffect
            管理狀態與時間更新，提供流暢的使用體驗。
          </SideProject>
          <SideProject image="./my-website.png" name="My Website" link="https://chihuichien.github.io/myweb/">
            此網站由 Next.js 和 Tailwind CSS
            開發，展示我的個人資訊、專業技能與專案作品。透過 React Hooks 和
            Next.js Routing，網站具備良好的狀態管理和流暢的頁面切換。此外，結合了
            Next.js 的 Image
            元件，提升圖片加載效能，確保頁面渲染速度快且視覺效果佳。
          </SideProject>
          <div className="flex items-center mt-7">
            <p className="text-3xl text-sky-900 font-semibold mr-3">And More</p>
            <Image
              src="./and-more.svg"
              alt="and more icon on portfolio page"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
