import React from "react";
import Style from "./header.module.css";
import SearchBox from "./search";
import Media from "react-responsive";

const Header = () => {
  return (
    <>
      <div className={Style.header_color}>
        <Media query="(min-width: 751px)">
          <span className={Style.header_text}>Weather App</span>
          <div className={Style.header_search}>
            <SearchBox />
          </div>
        </Media>
        <Media query="(max-width: 750px)">
          <span className={Style.media_header_text}>Weather App</span>
          <div className={Style.header_search}>
            <SearchBox />
          </div>
        </Media>
      </div>
    </>
  );
};

export default Header;
