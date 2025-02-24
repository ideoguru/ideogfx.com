import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/WhoWeAre_MeetOurTeam.module.css";

const MeetOurTeam: NextPage = () => {
    return (
        <div className={styles.meetOurTeam}>
            <div className={styles.container}>
                {/* Move textContents above the image */}
                <div className={styles.textContents}>
                    <div className={styles.meetOurTeam1}>Meet Our Team</div>
                    <div className={styles.getToKnow}>
                        Get to know the minds behind the magic! Our team is a diverse group of passionate creatives, strategic thinkers, and problem solvers, all dedicated to building meaningful digital experiences. From our visionary director and insightful business analyst to our innovative designers and resourceful marketing and HR leaders, each member plays a crucial role in shaping the way we create and connect. Together, we bring a blend of expertise, collaboration, and fresh ideas to every project, making sure each client’s vision becomes a powerful, user-centered reality.
                    </div>
                </div>
                {/* Teams photo and employee details */}
                <div className={styles.teamsPhoto}>
                    <Image className={styles.teamsPhotoChild} width={1440} height={850} alt="" src="/whoweare5.jpg" />
                    <div className={styles.employeeDetailsGroup}>
                        <div className={styles.employeeDetail}>
                            <Image className={styles.employeeDetailChild} width={22} height={22} alt="" src="/Frame164.svg" />
                            <div className={styles.sandeepVijayParent}>
                                <div className={styles.sandeepVijay}>Sandeep Vijay</div>
                                <div className={styles.uiuxDesigner}>UI/UX Designer</div>
                            </div>
                        </div>
                        <div className={styles.employeeDetail1}>
                            <Image className={styles.employeeDetailChild} width={22} height={22} alt="" src="/Frame164.svg" />
                            <div className={styles.sandeepVijayParent}>
                                <div className={styles.sandeepVijay}>Guruprakash S</div>
                                <div className={styles.uiuxDesigner}>Director</div>
                            </div>
                        </div>
                        <div className={styles.employeeDetail2}>
                            <Image className={styles.employeeDetailChild} width={22} height={22} alt="" src="/Frame164.svg" />
                            <div className={styles.sandeepVijayParent}>
                                <div className={styles.sandeepVijay2}>Joppu Kurian</div>
                                <div className={styles.uiuxDesigner2}>{`Asst. Manager,
HR & Marketing`}</div>
                            </div>
                        </div>
                        <div className={styles.employeeDetail3}>
                            <Image className={styles.employeeDetailChild} width={22} height={22} alt="" src="/Frame164.svg" />
                            <div className={styles.sandeepVijayParent}>
                                <div className={styles.sandeepVijay}>Aparna Sudeesan</div>
                                <div className={styles.uiuxDesigner}>Business Analyst</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;