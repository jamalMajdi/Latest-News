import React from "react";
import CardsOfNews from "./CardsOfNews.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Footer from "./Footer.jsx";

const NewsContent = ({ categories, language }) => {
  const [news, setNews] = useState([]);
//   const [newsArabic, setNewsArabic] = useState([]);
  const [loading, setLoading] = useState(true);
  
  let apiKey = language == 'en' ? import.meta.env.VITE_API_KEY_ENGLISH : import.meta.env.VITE_API_KEY_ARABIC;

  // useEffect(() => {
  //     let t= false
  //     const fetchNews = async () => {
  //         try{
  //             const response = await axios.get(` https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apiKey=${apiKey}`)
  //             setNews(response.data.articles)
  //             console.log(response.data.articles)
  //             setLoading(false)
  //         }catch (error) {
  //             console.error("Error fetching news:", error);
  //             setLoading(false)
  //         }
  //     }
  //     if(t)
  //     fetchNews()
  //     setLoading(true)
  // },[categories])

  // useEffect(()=>{
  //     const fetchNewsArabic = async ()=>{
  //         try{
  //             const response = await axios.get(` https://gnews.io/api/v4/top-headlines?lang=ar&country=eg&category=science&apikey=b53abc9be586ac4d4720e207882c7c87`)
  //             console.log(response.data)
  //         }catch(error){
  //             console.log("you have this error", error)
  //         }
  //     }
  //     fetchNewsArabic();
  // },[language])

  useEffect(() => {
    const fetchNews = async () => {
      let response;
      setLoading(true);
      try {
        if (language == "en") {
          response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apiKey=${apiKey}`
          );
        }else{
            response = await axios.get(
            `https://gnews.io/api/v4/top-headlines?lang=ar&country=eg&category=${categories}&apikey=${apiKey}`
          );
          console.log(response.data.articles)
        }
        setNews(response.data.articles)
      } catch (error) {
        console.log("you have this error ", error);
        setNews([])
        setLoading(false)
      }finally{
        setLoading(false)
      }
    };
    fetchNews();
  },[categories, language,apiKey]);

  return (
    <div>
      <div className="main-title fw-bold fs-4 text-center m-3">
        {language == 'en' ? 'Lateast':'اخر'} <span className="bg-danger p-2 text-white">{language == 'en'? 'News':'الأخبار'}</span>
      </div>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : news.length === 0 ? (
        <div className="text-center">No news available</div>
      ) : (
        <div className="cards">
          {news.map((item, index) => (
            <CardsOfNews
              key={index}
              title={item.title}
              description={item.description}
              urlToImage={language == 'en' ?item.urlToImage : item.image}
              url={item.url}
              language={language}
            />
          ))}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default NewsContent;
