import type { NextPage } from "next";
import Image from "next/image";
import styles from "./../styles/HomePageWhatWeDo.module.css";

const WhatWeDoFrame: NextPage = () => {
  return (
    <div className={styles.whatWeDoFrame}>
      <div className={styles.whatWeDoContainer}>
        <div className={styles.whatWeDoTitleFrame}>
          <div className={styles.whatWeDo}>What We Do</div>
        </div>
        <div className={styles.serviceshomePage}>
          <div className={styles.leftColumnServiceList}>
            <div className={styles.uiuxDesigningAndPrototypinParent}>
              <div className={styles.uiuxDesigningAnd}>
                UI/UX Designing and Prototyping
              </div>
              <div className={styles.arrow}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div className={styles.websitesAndApps}>
                Websites and Apps Designing
              </div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div className={styles.uiuxDesigningAnd}>Redesigning UI/UX</div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div className={styles.uiuxDesigningAnd}>UI/UX Design Audits</div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div
                className={styles.uiuxDesigningAnd}
              >{`Usability Testing & Optimization`}</div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div className={styles.uiuxDesigningAnd}>
                User Research and Behavior Analysis
              </div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div className={styles.uiuxDesigningAnd}>
                Design Systems and Branding
              </div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
            <div className={styles.websitesAndAppsDesigningParent}>
              <div className={styles.uiuxDesigningAnd}>
                Conversion Rate Optimization (CRO)
              </div>
              <div className={styles.arrow1}>
                <Image
                  className={styles.intersectIcon}
                  width={17}
                  height={17}
                  alt=""
                  src="Intersect.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.maskGroupIcon}
              width={568}
              height={604}
              alt=""
              src="Mask group.png"
            />
            <div className={styles.textContent}>
              <div className={styles.bringYourVision}>
                Bring Your Vision to Life
              </div>
              <div className={styles.weCraftUserCentric}>
                We craft user-centric UI/UX designs and interactive prototypes
                that bring your ideas to life. Our process ensures smooth
                navigation, engaging aesthetics, and seamless functionality. So
                users love your product from the first interaction.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whatWeDoCta}>
        <div className={styles.btnLearnMore}>
          <div className={styles.getStarted}>Learn More</div>
          <Image
            className={styles.solararrowRightUpLinearIcon}
            width={24}
            height={24}
            alt=""
            src="solar:arrow-right-up-linear.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoFrame;
