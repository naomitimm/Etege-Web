import "./selfExam.css";
import pink from "../../assets/pink.svg";
import etege from "../../assets/video/etege.mp4";

export default function SelfExamination() {
  return (
    <div className="container">
      <div>
        <h4>What Is A Breast Self-Exam?</h4>
        <p className="desc">
          A breast self-exam is an early detection tool that uses a combination
          of physical and visual examinations of the breasts to check for signs
          and symptoms of breast cancer. The purpose of a breast self-exam is to
          become familiar with the way your breasts normally look and feel.
          Knowing how your breasts normally look and feel, also called breast
          self-awareness, will help you identify any changes or abnormalities in
          your breasts, such as a new lump or skin changes. Any changes in your
          breasts discovered during a breast self-exam should be reported to
          your healthcare provider right away. While a breast self-exam is a
          useful tool for the early detection of breast cancer, it should not
          take the place of regular mammograms and clinical breast exams.
        </p>
      </div>
      <div className="about-me-section">
        <img className="img" alt="Img" src={pink} />
        <div className="about-me-header">
          <div className="div">
            How Often Should A Breast Self-Exam Be Performed?
          </div>
          <div className="i-m-a-top-online">
            <p>
              Adult women of all ages are encouraged to perform breast
              self-exams at least once a month. Lillie D. Shockney, Johns
              Hopkins University Distinguished Service Professor of Breast
              Cancer states, “Forty percent of diagnosed breast cancers are
              detected by women who feel a lump, so establishing a regular
              breast self-exam is very important.”
            </p>
            <br />
            <p>
              For women still menstruating, a breast self-exam should be
              performed a few days after her period ends. For those who are
              post-menopausal, a breast self-exam should be performed on the
              same day of each month, such as the 1st or 15th day of the month.
            </p>
            <br />
            <p>
              While mammograms can help you to detect cancer before you can feel
              a lump, breast self-exams help you to be familiar with how your
              breasts normally look and feel. Alert your healthcare professional
              if you notice any changes in your breasts, such as a new lump,
              sore spot, changes in the appearance of the skin, or nipple
              discharge.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="about-me-section">
        <div className="about-me-section-about-me-header">
          <div className="div">How Should A Breast Self-Exam Be Performed?</div>
          <div className="desc">
            <h5 className="sub-headers">1, In the Shower</h5>
            <p>
              With the pads/flats of your 3 middle fingers, check the entire
              breast and armpit area, pressing down with light, medium, and firm
              pressure. Check both breasts each month, feeling for any new
              lumps, thickenings, hardened knots, or any other breast changes.
            </p>
            <h5 className="sub-headers">2, In Front of a Mirror </h5>
            <p>
              With your arms at your sides, visually inspect your breasts,
              looking for any changes in the contour or shape of the breasts,
              any dimpling, swelling, or other skin irregularities on or around
              the breasts, or any changes in the nipples.
            </p>
            <p>
              Next, rest your palms on your hips and press firmly to flex your
              chest muscles. Look for any dimpling, puckering, or other changes,
              particularly on one side. Note that the left and right breasts
              will not exactly match—few women’s breasts are perfectly
              symmetrical.
            </p>
            <h5 className="sub-headers">3, Lying Down</h5>
            <p>
              When lying down, the breast tissue spreads out evenly along the
              chest wall. Place a pillow under your right shoulder and put your
              right arm behind your head. Using your left hand, move the pads of
              your 3 middle fingers around your right breast, covering the
              entire breast area and armpit.{" "}
            </p>
            <p>
              Use light, medium, and firm pressure to feel for any new lumps,
              thickenings, hardened knots, or any other breast changes. Also
              squeeze the nipple to check for discharge. Repeat these steps for
              your left breast.
            </p>
          </div>

         
        </div>
        <video className="about-me-section-right-img" controls >
      <source src={etege} type="video/mp4"/>
     </video>
        {/* <img className="about-me-section-right-img"  alt="Img" src={pink} /> */}
      </div>
    </div>
  );
}
