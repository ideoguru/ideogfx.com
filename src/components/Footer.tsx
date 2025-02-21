import type { NextPage } from "next";
import Image from "next/image";
import styles from "./../styles/Footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footerFrame}>
      <div className={styles.footerContainer}>
        {/* Back to Top Button */}
        <div className={styles.btnTop}>
          <Image
            className={styles.topIcon}
            width={40}
            height={40}
            alt="Back to Top"
            src="/Up_Arrow.svg" // Ensure this image exists in the public folder
          />
        </div>

        {/* Footer Body */}
        <div className={styles.footerBodyContainer}>
          <div className={styles.contents}>
            {/* Left Column */}
            <div className={styles.leftColumnText}>
              <div className={styles.companyName}>
                <div className={styles.ideoGraphics}>IDEO GRAPHICS</div>
              </div>
              <div className={styles.quickLinks}>
                <div className={styles.footerLink}>
                  <div className={styles.linkText}>Who We Are</div>
                </div>
                <div className={styles.footerLink}>
                  <div className={styles.linkText}>What We Do</div>
                </div>
                <div className={styles.footerLink}>
                  <div className={styles.linkText}>Resources</div>
                </div>
                <div className={styles.footerLink}>
                  <div className={styles.linkText}>Get In Touch</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className={styles.rightTextColumn}>
              <div className={styles.heading}>
                <div className={styles.ideoGraphics}>Follow us</div>
              </div>
              <div className={styles.socialIcons}>
                <div className={styles.iconWrapper}>
                  <Image
                    className={styles.socialIcon}
                    width={24}
                    height={24}
                    alt="Facebook"
                    src="/ic_baseline-facebook.svg" // Ensure this image exists in the public folder
                  />
                </div>
                <div className={styles.iconWrapper}>
                  <Image
                    className={styles.socialIcon}
                    width={24}
                    height={24}
                    alt="Instagram"
                    src="/mdi_instagram.svg" // Ensure this image exists in the public folder
                  />
                </div>
                <div className={styles.iconWrapper}>
                  <Image
                    className={styles.socialIcon}
                    width={24}
                    height={24}
                    alt="Dribbble"
                    src="/icon-park-solid_dribble.svg" // Ensure this image exists in the public folder
                  />
                </div>
                <div className={styles.iconWrapper}>
                  <Image
                    className={styles.socialIcon}
                    width={24}
                    height={24}
                    alt="Behance"
                    src="/ant-design_behance-circle-filled.svg" // Ensure this image exists in the public folder
                  />
                </div>
                <div className={styles.iconWrapper}>
                  <Image
                    className={styles.socialIcon}
                    width={24}
                    height={24}
                    alt="LinkedIn"
                    src="/entypo-social_linkedin-with-circle.svg" // Ensure this image exists in the public folder
                  />
                </div>
              </div>
              <div className={styles.address}>
                <div className={styles.addressText}>
                  <p>Ideo Graphics</p>
                  <p>5H1, BCG Residency Towers</p>
                  <p>Opp. CSEZ, Seaport-Airport Road</p>
                  <p>Kakkanad, Kochi, Kerala - 682037</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.phone}>Phone: +91 8921700822</div>
                <div className={styles.email}>info@ideogfx.com</div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className={styles.copyrightSection}>
            <div className={styles.copyRight}>
              <div className={styles.copyrightText}>© 2025 Ideo Graphics.</div>
            </div>
            <div className={styles.legalFooterSection}>
              <div className={styles.legalLink}>
                <div className={styles.linkText}>Privacy Policy</div>
              </div>
              <div className={styles.legalLink}>
                <div className={styles.linkText}>Terms of Use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
