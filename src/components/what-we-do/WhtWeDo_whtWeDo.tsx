import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/WhtWeDo_whtWeDo.module.css";


const WhatWeDoFrame: NextPage = () => {
    return (
        <div className={styles.whatWeDoFrame}>
            <div className={styles.whatWeDoContainer}>
                <div className={styles.headingSubheading}>
                    <div className={styles.heading}>
                        <div className={styles.whatWeDo}>What We Do?</div>
                    </div>
                    <div className={styles.subheading}>
                        <div className={styles.exploreOurRange}>Explore our range of tailored UI/UX design services aimed at helping startups, SMEs, and enterprises create digital products that stand out. From product design to brand identity, we’re your partner in user-centric growth. Here's a breakdown of what we offer:</div>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.bodyContainer}>
                        <div className={styles.servicesMenuFrame}>
                            <div className={styles.servicesConatiner1}>
                                <div className={styles.designingAndPrototyping}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>UI/UX Designing and Prototyping</div>
                                    </div>
                                    <div className={styles.arrow}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>Websites and Apps Designing</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>Redesigning UI/UX</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.servicesConatiner1}>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>UI/UX Design Audits</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>{`Usability Testing & Optimization`}</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}> User Research and Behavior Analysis</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.servicesContainer3}>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>Design Systems and Branding</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                                <div className={styles.webAndAppDesigning}>
                                    <div className={styles.text}>
                                        <div className={styles.uiuxDesigningAnd}>Conversion Rate Optimization (CRO)</div>
                                    </div>
                                    <div className={styles.arrow1}>
                                        <Image className={styles.intersectIcon} width={17} height={17} alt="" src="/Intersect1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.leftColumnCard}>
                                <div className={styles.textCard}>
                                    <div className={styles.uiuxDesigningAnd1}>UI/UX Designing and Prototyping</div>
                                    <div className={styles.transformIdeasInto}>Transform ideas into high-impact digital experiences with user-centric design and interactive prototyping. We craft visually stunning, functional interfaces tailored to your audience.</div>
                                </div>
                            </div>
                            <div className={styles.rightColumnDescription}>
                                <div className={styles.rightColumnline01}>
                                    <div className={styles.userResearchAnalysisDeepWrapper}>
                                        <div className={styles.informationArchitecture}>{`User Research & Analysis: Deep-dive into your audience's behaviors and preferences to build products that resonate.`}</div>
                                    </div>
                                </div>
                                <div className={styles.rightColumnline01}>
                                    <div className={styles.userResearchAnalysisDeepWrapper}>
                                        <div className={styles.informationArchitecture}>{`Information Architecture & Wireframing: Structure your product for easy navigation and optimal user flow.`}</div>
                                    </div>
                                </div>
                                <div className={styles.rightColumnline01}>
                                    <div className={styles.userResearchAnalysisDeepWrapper}>
                                        <div className={styles.informationArchitecture}>Interactive Prototyping: Visualize and test interactions to ensure a seamless user experience.</div>
                                    </div>
                                </div>
                                <div className={styles.userResearchAnalysisDeepWrapper}>
                                    <div className={styles.informationArchitecture}>High-Fidelity Design: Bring your vision to life with visually compelling, brand-aligned design.</div>
                                </div>
                                <div className={styles.userResearchAnalysisDeepWrapper}>
                                    <div className={styles.informationArchitecture}>Usability Testing: Validate your design with real users to refine and optimize functionality.</div>
                                </div>
                                <div className={styles.userResearchAnalysisDeepWrapper}>
                                    <div className={styles.informationArchitecture}>{`Development Support & Collaboration: Collaborate seamlessly with development teams for a smooth design-to-development transition.`}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default WhatWeDoFrame;