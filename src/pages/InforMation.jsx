import Intro from "../component/Intro";
import InfoImg from "../assets/infoPic.png";
import { Link } from "react-router-dom";

const InforMation = () => {
  return (
    <>
      <div className="info-container">
        <Intro
          title="About this app"
          subtitle="Here you can find how to use the app and what's the beniefit it can bring to you"
        />
      </div>

      <div className="infosec-container">
        <div className="info-section1">
          <h3 className="info-description">How to use this app</h3>
          <div className="info-list">
            Start by typing your task in the input field and hit the 'Add'
            button. Once added, your task will appear in the list below. You can
            mark tasks as done by clicking the checkbox or remove them by
            clicking the 'x' button. <br />
            <br />
            Stay organized and productive with our simple todo app!
          </div>
        </div>

        <div className="info-section2">
          <h3 className="info-description">This app can help you</h3>

          <div className="info-list1">
            - Improving Time Management <br />
            - Reduce Stress and Anxiety <br />- Be more productivity
          </div>
        </div>
        <img className="info-img" src={InfoImg} alt="info-image" />

        <div className="land-cta">
          <Link to="/todoPage">
            <button>Start for free</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InforMation;
