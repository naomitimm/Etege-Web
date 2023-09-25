import "./comingsoon.css";
import pink from "../../assets/pink.svg";

export default function CommingSoon() {
  return (
    <div className="bgimg">
      <div className="topleft"></div>
      <div className="middle">
        <h1>COMING SOON</h1>

        <img alt="women" src={pink} />

        {/* <p>Consultation with elite doctors!!</p> */}
      </div>
      <div></div>
      {/* <div className="bottomleft">
        <p>Some text</p>
      </div> */}
    </div>
  );
}
