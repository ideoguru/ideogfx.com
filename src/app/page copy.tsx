import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import styles from "./../styles/HomePage.module.css";

const HomePage: NextPage = () => {
  const onFrameContainerClick = useCallback(() => {}, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageInner}>
        <div className={styles.yourNextParent}>
          <div className={styles.yourNext}>Your next</div>
          <div className={styles.upgrade}>Upgrade.</div>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <Image
          className={styles.groupChild}
          width={762}
          height={418}
          alt=""
          src="/Vector.png"
        />
        <Image
          className={styles.cyberpunkIllustrationWithFuIcon}
          width={319}
          height={418}
          alt=""
          src="/cyberpunk.png"
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.frameParent}>
          <div className={styles.instanceWrapper}>
            <Image
              className={styles.frameChild}
              width={40}
              height={40}
              alt=""
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
                      alt=""
                      src="ic:baseline-facebook.svg"
                    />
                  </div>
                  <div className={styles.icbaselineFacebookWrapper}>
                    <Image
                      className={styles.icbaselineFacebookIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="mdi:instagram.svg"
                    />
                  </div>
                  <div className={styles.icbaselineFacebookWrapper}>
                    <Image
                      className={styles.iconParkSoliddribble}
                      width={24}
                      height={24}
                      alt=""
                      src="/frame70.svg"
                    />
                  </div>
                  <div className={styles.icbaselineFacebookWrapper}>
                    <Image
                      className={styles.icbaselineFacebookIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="ant-design:behance-circle-filled.svg"
                    />
                  </div>
                  <div className={styles.icbaselineFacebookWrapper}>
                    <Image
                      className={styles.icbaselineFacebookIcon}
                      width={24}
                      height={24}
                      alt=""
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
                <div className={styles.infoideogfxcom}>
                  Phone: +91 8075873153
                </div>
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
      <b className={styles.text}>{` `}</b>
      <div className={styles.frameParent1}>
        <div className={styles.insightsParent}>
          <div className={styles.insights}>Insights</div>
          <div className={styles.cardVersion2Parent}>
            <div className={styles.cardVersion2}>
              <div className={styles.howToConductAUxAuditToIWrapper}>
                <div className={styles.howToConductAUxAuditToIWrapper}>
                  <div className={styles.howToConduct}>
                    How to Conduct a UX Audit to Improve Your Product's
                    Usability
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.cardVersion5}>
              <div className={styles.howToConductAUxAuditToIWrapper}>
                <div className={styles.howToConductAUxAuditToIWrapper}>
                  <div className={styles.howToConduct}>
                    Why User Research is the Secret Ingredient for Building
                    Successful Digital Products
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.cardVersion6}>
              <div className={styles.howToConductAUxAuditToIWrapper}>
                <div className={styles.howToConductAUxAuditToIWrapper}>
                  <div className={styles.howToConduct}>
                    Top UI/UX Design Trends Shaping Digital Products in 2024
                  </div>
                </div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
            <div className={styles.instanceParent}>
              <div className={styles.iconamoonarrowRight2BoldWrapper}>
                <Image
                  className={styles.iconamoonarrowRight2Bold}
                  width={48}
                  height={48}
                  alt=""
                  src="iconamoon_arrow-right-2-bold.svg"
                />
              </div>
              <div className={styles.iconamoonarrowRight2BoldContainer}>
                <Image
                  className={styles.iconamoonarrowRight2Bold1}
                  width={48}
                  height={48}
                  alt=""
                  src="iconamoon_arrow-right-2-bold.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.getStartedParent}>
            <div className={styles.getStarted}>Learn More</div>
            <Image
              className={styles.icbaselineFacebookIcon}
              width={24}
              height={24}
              alt=""
              src="/solar_arrow-right-up-linear.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.craftingSeamlessUser}>
        Crafting seamless User Experiences through innovative and user centric
        UI/UX Design to elevate your Digital Transformation.
      </div>
      <div className={styles.homePageChild} />
      <div className={styles.primaryButton}>
        <div className={styles.getStarted}>Get Started</div>
        <Image
          className={styles.icbaselineFacebookIcon}
          width={24}
          height={24}
          alt=""
          src="/solar_arrow-right-up-linear.svg"
        />
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.frameParent6}>
          <div className={styles.howToConductAUxAuditToIWrapper}>
            <div className={styles.whatWeDo}>What We Do</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.productDesigningWrapper}>
                    <div
                      className={styles.productDesigning}
                    >{`Product Designing `}</div>
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div className={styles.productDesigning}>UX Audits</div>
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div className={styles.productDesigning}>
                      Redesigning UI/UX
                    </div>
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div className={styles.productDesigning}>
                      Conversion Rate Optimization
                    </div>
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div
                      className={styles.productDesigning}
                    >{`Branding & Visual Identity`}</div>
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div className={styles.productDesigning}>
                      UI/UX Consultation
                    </div>
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div
                      className={styles.productDesigning}
                    >{`Prototyping & Design Validation `}</div>
                  </div>
                  <div className={styles.userResearchParent}>
                    <div className={styles.productDesigning}>User Research</div>
                    <Image
                      className={styles.iconamoonarrowRight2Bold2}
                      width={30}
                      height={30}
                      alt=""
                      src="iconamoon_arrow-right-2-bold.svg"
                    />
                  </div>
                  <div className={styles.uxAuditsWrapper}>
                    <div className={styles.productDesigning}>
                      Add-On Services
                    </div>
                  </div>
                </div>
                <div className={styles.cardWrapper}>
                  <div className={styles.card}>
                    <div className={styles.howToConductAUxAuditToIWrapper}>
                      <div className={styles.loremIpsumDolor}>
                        We craft intuitive UI/UX designs that elevate your
                        digital presence. Let’s create something extraordinary
                        together!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceFrame}>
          <div className={styles.getStartedParent}>
            <div className={styles.getStarted}>Learn More</div>
            <Image
              className={styles.icbaselineFacebookIcon}
              width={24}
              height={24}
              alt=""
              src="/solar_arrow-right-up-linear.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent9}>
        <div className={styles.frameParent8}>
          <div className={styles.caseStudiesWrapper}>
            <div className={styles.whatWeDo}>Case Studies</div>
          </div>
          <div className={styles.rectangleParent}>
            <Image
              className={styles.instanceChild}
              width={571}
              height={613}
              alt=""
              src="/e-commerce.png"
            />
            <div className={styles.frameParent11}>
              <div className={styles.frameParent12}>
                <div className={styles.orderManagementSystemOfflParent}>
                  <div className={styles.howToConduct}>
                    Order Management System : Offline to Online Transformation
                  </div>
                  <div className={styles.description3}>Description</div>
                </div>
                <div className={styles.instanceWrapper}>
                  <div className={styles.getStartedParent}>
                    <Image
                      className={styles.icbaselineFacebookIcon}
                      width={24}
                      height={24}
                      alt=""
                      src="/solar_arrow-right-up-linear.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameParent13}>
                <div className={styles.rectangleGroup}>
                  <Image
                    className={styles.frameInner}
                    width={250}
                    height={279}
                    alt=""
                    src="/Rectangle_81.png"
                  />
                  <div className={styles.personalisedBusinessAccountiParent}>
                    <div
                      className={styles.personalisedBusinessAccountiContainer}
                    >
                      <p className={styles.thirdFloorCheryl}>
                        Personalised Business Accounting : Offline to Online
                        Transformation
                      </p>
                    </div>
                    <div className={styles.getStartedParent}>
                      <Image
                        className={styles.icbaselineFacebookIcon}
                        width={24}
                        height={24}
                        alt=""
                        src="/solar_arrow-right-up-linear.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.rectangleContainer}>
                  <Image
                    className={styles.frameInner}
                    width={250}
                    height={279}
                    alt=""
                    src="/Rectangle_91.png"
                  />
                  <div className={styles.theUxEdgeTransformingUserParent}>
                    <div className={styles.theUxEdge}>
                      The UX Edge: Transforming User Experience into Business
                      Value
                    </div>
                    <div className={styles.getStartedParent}>
                      <Image
                        className={styles.icbaselineFacebookIcon}
                        width={24}
                        height={24}
                        alt=""
                        src="/solar_arrow-right-up-linear.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.instanceGroup}>
              <div className={styles.iconamoonarrowRight2BoldFrame}>
                <Image
                  className={styles.iconamoonarrowRight2Bold}
                  width={48}
                  height={48}
                  alt=""
                  src="iconamoon_arrow-right.svg"
                />
              </div>
              <div className={styles.iconamoonarrowRight2BoldWrapper1}>
                <Image
                  className={styles.iconamoonarrowRight2Bold1}
                  width={48}
                  height={48}
                  alt=""
                  src="iconamoon_arrow-left.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceFrame}>
          <div className={styles.getStartedParent}>
            <div className={styles.getStarted}>Learn More</div>
            <Image
              className={styles.icbaselineFacebookIcon}
              width={24}
              height={24}
              alt=""
              src="/solar_arrow-right-up-linear.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.testimonialsParent}>
        <div className={styles.whatWeDo}>Testimonials</div>
        <div className={styles.frameParent14}>
          <div className={styles.ideoGraphicsHasBeenAnAbsoParent}>
            <div className={styles.ideoGraphicsHas}>
              “ Ideo Graphics has been an absolute pleasure to work withon
              multiple projects for my startup. Their attention to detail and
              commitment to quality have consistently exceeded our expectations.
              Not only do they deliver exactly what we need, but they also bring
              their own innovations and creativity to the table, often enhancing
              our original ideas in ways we hadn’t considered. From
              understanding our vision to delivering polished, user-centered
              designs, the team at Ideo Graphics went above and beyond at every
              step. Highly recommend them for anyone looking to elevate their
              UI/UX to the next level! ”
            </div>
            <div className={styles.frameParent15}>
              <div className={styles.pixelcutExport1RemovebgPWrapper}>
                <Image
                  className={styles.pixelcutExport1RemovebgPIcon}
                  width={99}
                  height={124}
                  alt=""
                  src="/person.png"
                />
              </div>
              <div className={styles.visalSureshParent}>
                <div className={styles.visalSuresh}>Visal Suresh</div>
                <div className={styles.xspineTech}>XSpine Tech</div>
                <div className={styles.privacyPolicy}>Kochi</div>
              </div>
            </div>
          </div>
          <div className={styles.instanceParent1}>
            <div className={styles.iconamoonarrowRight2BoldWrapper2}>
              <Image
                className={styles.iconamoonarrowRight2Bold5}
                width={32}
                height={32}
                alt=""
                src="iconamoon_arrow-right-2-bold.svg"
              />
            </div>
            <Image
              className={styles.frameIcon}
              width={32}
              height={32}
              alt=""
              src="/frame_1.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent16}>
        <div className={styles.asset18288x81Wrapper}>
          <Image
            className={styles.asset18288x81}
            width={48}
            height={44}
            alt=""
            src="/logo.png"
          />
        </div>
        <div className={styles.frameParent17}>
          <div
            className={styles.whoWeAreWrapper}
            // onClick={onFrameContainerClick}
          >
            <div className={styles.getStarted}>Who We Are</div>
          </div>
          <div
            className={styles.whatWeDoContainer}
            // onClick={onFrameContainerClick}
          >
            <div className={styles.getStarted}>What We Do</div>
          </div>
          <div className={styles.insightsWrapper}>
            <div className={styles.getStarted}>Insights</div>
          </div>
          <div
            className={styles.whatWeDoContainer}
            // onClick={onFrameContainerClick}
          >
            <div className={styles.getStarted}>Get In Touch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
