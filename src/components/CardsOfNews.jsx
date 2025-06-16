import React from "react";
import newsImage from "../assets/newsImage.png"; // Assuming you have a default image 

const CardsOfNews = ({title, description, urlToImage, url, language}) => {
  return (
    <div className="app-card" dir={language =='ar'? 'rtl': 'ltr'}>
      <div className="card" style={{maxWidth:'345px',padding:'15px'}}>
        <img style={{height:'200px',width:'300px',margin:"auto"}} src={urlToImage ? urlToImage : newsImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title.length > 50 ? `${title.slice(0,50)}...` :title}</h5>
          <p className="card-text">
            {!description || description.length > 50 ? `${description.slice(0,90)}...` :description}
          </p>
          <a href={url} className="btn btn-primary">
            {language == 'en' ? 'Read more' : 'اقرأ المزيد'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardsOfNews;
