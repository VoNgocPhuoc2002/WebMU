import React, { useState } from "react";
import './styles.scss';
import { useLocation } from "react-router-dom";
const DetailNew = () => {
  const location = useLocation();
  const { news } = location.state;
 
    // <div>

  return (
  
    <div className="wz">
      {/* <h1 className="wz-skip">MU Online Official</h1> */}
      <div id="container" className="wz-container">
        <div id="contents" className="wz-contents">
          <section className="notice">
            <article className="board">
              <h2 className="board-title">{news.title}</h2>

              <article className="board-view">
                <header className="board-view__header">
                  <span className="category">{news.category}</span>

                  <div className="preview">
                    <h3 className="title">
                    {news.description}
                    </h3>
                  </div>
                  <span className="datetime"> {news.date}</span>
                </header>

                <section className="board-view__section">
                  <aside className="board-view--banner announcement">
                    Announcement
                  </aside>

                  <p>
                    <br />
                    Dear Mutizens,
                    <br />
                    <br />
                  </p>
                  <p>
                    Please note that all Speed Server exclusive items will be
                    unavailable for use after the ongoing Speed Server Event,{" "}
                    <br />
                    as informed within the item description and attention.
                    <br />
                    <br />
                  </p>
                  <p>
                    <span style={{ color: "#ff0000" }}>For example</span> items
                    with the [SPEED] written such as [SPEED] Bloodangel item box
                  </p>
                  <p>
                    <br />
                    We kindly ask that you bear this information in mind before
                    purchasing the products and items during the Speed Server
                    Event.
                  </p>
                  <p>
                    We also recommend all users to read the Attention and item
                    description before purchases.
                    <br />
                    <br />
                  </p>
                  <p>Thank you for your understanding.</p>
                  <br />
                  <p></p>
                  <p>
                    <span>Regards,</span>
                    <br />
                    <span>MU Support Team</span>
                  </p>
                  <p className="board-view--banner notice"></p>
                </section>
              </article>

              <div className="board-buttons">
                <a className="btn-default" href="/News">
                  <span className="text">View list</span>
                </a>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailNew;
