import KM_img from "../../assets-img/1709038851690.jpg";
import heart_icon from "../../assets-img/heart_icon.webp";
import ring_icon from "../../assets-img/ibague.png";
import infinite_icon from "../../assets-img/infinite_icon.png";
import lifetree from "../../assets-img/lifetree.png";

const HistoryContainer = () => {
  return (
    <main className="history">
      <h2 className="history_title">Notre Histoire</h2>
      <div className="history_container">
        <section className="history_container_leftcontent">
          <article className="history_container_leftcontent_article">
            <h3 className="history_container_leftcontent_article_title">
              Notre Rencontre
            </h3>
            <p className="history_container_leftcontent_article_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <img
            src={KM_img}
            className="history_container_leftcontent_image"
            alt="K&M_leftimg"
          />
          <article className="history_container_leftcontent_article">
            <h3 className="history_container_leftcontent_article_title">
              Notre Mariage
            </h3>
            <p className="history_container_leftcontent_article_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </section>
        <div className="history_container_separator">
          <i className="history_container_separator_heart_icon"><img src={heart_icon} className="heart_icon" alt="heart_icon"/> </i>
          <i className="history_container_separator_ring_icon"><img src={ring_icon} className="ring_icon" alt="ring_icon"/></i>
          <i className="history_container_separator_infinite_icon"><img src={infinite_icon} className="infinite_icon" alt="infinite_icon"/></i>
          
        </div>
        <section className="history_container_rightcontent">
          <img
            src={KM_img}
            className="history_container_rightcontent_image"
            alt="K&M_rightimg"
          />
          <article className="history_container_rightcontent_article">
            <h3 className="history_container_rightcontent_article_title">
              La Demande en Mariage
            </h3>
            <p className="history_container_rightcontent_article_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
          <img
            src={KM_img}
            className="history_container_rightcontent_image"
            alt="K&M_rightendimg"
          />
        </section>
      </div>
      <img src={lifetree} className="history_lifetree" alt="lifetree"/>
    </main>
  );
};

export default HistoryContainer;
