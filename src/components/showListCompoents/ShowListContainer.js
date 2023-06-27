import React from "react";
import TvShowList from "../TvShowLists/TvShowList";
import s from "./styles.module.css";

function ShowListContainer({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You will probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_Show}>
              <TvShowList tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ShowListContainer;
