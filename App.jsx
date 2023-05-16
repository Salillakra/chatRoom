import React from "react";
import './App.css';

export function App() {
  return (
    <>
      <main className="main-body">
        {/* left portions */}
        <div className="left-items">
          {/* the header */}
          <div className="header">
            <img src="" alt="profile-image" srcset="" />
            <div className="dropdown">
              <span class="material-symbols-outlined">more_vert</span>
              <a href="http://google.com">test</a>
              <a href="http://google.com">test</a>
              <a href="http://google.com">test</a>
              <a href="http://google.com">test</a>
            </div>
          </div>
          {/* the searchbar  */}
          <div className="search-bar">
            <span class="material-symbols-outlined">search</span>
            <input type="text" id="search-input" placeholder="Search rooms" />
          </div>

          {/* the menu of different rooms */}
          <div className="room-menu"></div>
        </div>


        {/* right portion */}
        <div className="right-items">
          hello world
        </div>
      </main>
    </>
  );
}

export default App;
