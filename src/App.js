import React, { useState, useEffect } from "react";
import s from "./styles.module.css";
import { TvShowApi } from "./api/Tv-showApi";
import { BACK_DROP_IMAGE_BASE_URL } from "./config";
import TvShowDetails from "./components/TvShowDetails/TvShowDetails";
import Logo from "./components/logo/Logo";
import logo from "./assets/images/logo.png";
import TvShowList from "./components/TvShowLists/TvShowList";
import ShowListContainer from "./components/showListCompoents/ShowListContainer";
import SearchBar from "./components/search-bar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  // make sure to store them in recommendations list
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TvShowApi.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("something went wrong with Api");
    }
  }
  // function for store the recommendation list

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TvShowApi.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert("something went wrong with Api");
    }
  }
  async function fetchByTitle(title) {
    try {
      const searchResp = await TvShowApi.fetchByTitle(title);
      if (searchResp.length > 0) {
        setCurrentTVShow(searchResp[0]);
      }
    } catch (error) {
      alert("something went wrong with Api");
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  // we are going to fetch when the currentTvshowChanges
  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  // function to update currentTvshow
  function updateCurrentTvShow(tvShow) {
    setCurrentTVShow(tvShow);
    // this function is sending via props to the children
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACK_DROP_IMAGE_BASE_URL}${currentTVShow.backdrop_path}")no-repeat center/cover`
          : "black",
      }}
    >
      {console.log(recommendationList)}
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title={"WhatToWatch"}
              subtitle={"you can watch series"}
            />
          </div>
          <div className="col-md-6 col-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.description_container}>
        {currentTVShow && <TvShowDetails showData={currentTVShow} />}
      </div>
      <div className={s.tv_show_recommended}>
        {currentTVShow && (
          <ShowListContainer
            tvShowList={recommendationList}
            onClickItem={updateCurrentTvShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
