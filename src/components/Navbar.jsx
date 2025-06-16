import React from "react";

const Navbar = ({ categories, setCategories, language, setLanguage }) => {
  function handleCategory(category) {
    setCategories(category);
  }
  function handleChangeLanguage() {
    setLanguage(language === "en" ? "ar" : "en");
    console.log(language);
  }
  const categoryTranslations = {
    business: "أعمال",
    entertainment: "ترفيه",
    health: "صحة",
    science: "علوم",
    sports: "رياضة",
  };
  const categoryArray = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            {language == "en" ? "NewsMag" : "مجلة إخبارية"}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    handleChangeLanguage();
                  }}
                >
                  {language == "en"
                    ? "التبديل إلى الاخبار العربية"
                    : "Switch to English News"}
                </button>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language == "en" ? "Categories" : "الفئات"}
                </button>
                <ul className=" dropdown-menu">
                  {categoryArray.map((item) => (
                    <React.Fragment key={item}>
                      <li
                        className={`dropdown-item ${
                          categories == item ? "active" : ""
                        }`}
                        onClick={() => {
                          handleCategory(item);
                        }}
                      >
                        {language == 'en' ? item : categoryTranslations[item]}
                      </li>
                      <hr className="dropdown-divider" />
                    </React.Fragment>
                  ))}
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
