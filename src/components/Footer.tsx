import Image from "next/image";
import styles from "../styles/HomePage.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.frameParent}>
        <div className={styles.instanceWrapper}>
          <Image
            className={styles.frameChild}
            width={40}
            height={40}
            alt="Logo"
            src="/frame70.svg"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.ideoGraphicsParent}>
              <div className={styles.ideoGraphics}>IDEO GRAPHICS</div>
              <div className={styles.footerLlinksParent}>
                <div className={styles.footerLlinks}>
                  <div className={styles.whoWeAre}>Who We Are</div>
                </div>
                <div className={styles.footerLlinks}>
                  <div className={styles.whoWeAre}>What We Do</div>
                </div>
                <div className={styles.footerLlinks}>
                  <div className={styles.whoWeAre}>Insights</div>
                </div>
                <div className={styles.footerLlinks}>
                  <div className={styles.whoWeAre}>Get In Touch</div>
                </div>
              </div>
            </div>
            <div className={styles.followUsParent}>
              <b className={styles.followUs}>Follow us</b>
              <div className={styles.frameDiv}>
                <div className={styles.icbaselineFacebookWrapper}>
                  <Image
                    className={styles.icbaselineFacebookIcon}
                    width={24}
                    height={24}
                    alt="Facebook"
                    src="ic:baseline-facebook.svg"
                  />
                </div>
                <div className={styles.icbaselineFacebookWrapper}>
                  <Image
                    className={styles.icbaselineFacebookIcon}
                    width={24}
                    height={24}
                    alt="Instagram"
                    src="mdi:instagram.svg"
                  />
                </div>
                <div className={styles.icbaselineFacebookWrapper}>
                  <Image
                    className={styles.iconParkSoliddribble}
                    width={24}
                    height={24}
                    alt="Dribbble"
                    src="/frame70.svg"
                  />
                </div>
                <div className={styles.icbaselineFacebookWrapper}>
                  <Image
                    className={styles.icbaselineFacebookIcon}
                    width={24}
                    height={24}
                    alt="Behance"
                    src="ant-design:behance-circle-filled.svg"
                  />
                </div>
                <div className={styles.icbaselineFacebookWrapper}>
                  <Image
                    className={styles.icbaselineFacebookIcon}
                    width={24}
                    height={24}
                    alt="LinkedIn"
                    src="entypo-social:linkedin-with-circle.svg"
                  />
                </div>
              </div>
              <div className={styles.ideoGraphicsThirdContainer}>
                <p className={styles.thirdFloorCheryl}>Ideo Graphics</p>
                <p className={styles.thirdFloorCheryl}>
                  Third Floor, Cheryl Hill Park,
                </p>
                <p className={styles.thirdFloorCheryl}>
                  Seaport - Airport Rd, Vallathol Padi,
                </p>
                <p className={styles.thirdFloorCheryl}>
                  Vidya Nagar Colony, Thrikkakara,
                </p>
                <p className={styles.thirdFloorCheryl}>
                  Edappally, Kochi, Kerala 682021
                </p>
              </div>
              <div className={styles.infoideogfxcom}>Phone: +91 8075873153</div>
              <div className={styles.infoideogfxcom}>info@ideogfx.com</div>
            </div>
          </div>
          <div className={styles.copyright2024IdeographicsParent}>
            <div className={styles.privacyPolicy}>
              Copyright © 2024 ideographics. All rights reserved.
            </div>
            <div className={styles.privacyPolicyParent}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.frameItem} />
              <div className={styles.privacyPolicy}>Terms of Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
