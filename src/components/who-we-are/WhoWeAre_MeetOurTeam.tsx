import type { NextPage } from 'next';
import Image from "next/image";
import styles from "../../styles/WhoWeAre_MeetOurTeam.module.css";

const MeetOurTeam: NextPage = () => {
    return (
        <div className={styles.meetOurTeam}>
            <div className={styles.container}>
                <div className={styles.textContents}>
                    <div className={styles.meetOurTeam1}>Meet Our Team</div>
                    <div className={styles.getToKnow}>
                        Get to know the minds behind the magic! Our team is a diverse group of passionate creatives, 
                        strategic thinkers, and problem solvers, all dedicated to building meaningful digital experiences.
                    </div>
                </div>
                
                <div className={styles.teamsPhoto}>
                    <Image 
                        className={styles.teamPhoto} 
                        width={1440} 
                        height={850} 
                        alt="Our team members" 
                        src="/whoweare5.jpg" 
                        priority
                    />
                    
                    {/* Guruprakash - Top Center */}
                    <div className={`${styles.annotation} ${styles.director}`}>
                        <Image 
                            className={styles.frameIcon} 
                            width={22} 
                            height={22} 
                            alt="icon" 
                            src="/Frame164.svg" 
                        />
                        <div className={styles.textContainer}>
                            <div className={styles.name}>Guruprakash S</div>
                            <div className={styles.role}>Director</div>
                        </div>
                    </div>

                    {/* Other annotations follow same structure */}
                    {/* Joppu */}
                    <div className={`${styles.annotation} ${styles.manager}`}>
                        <Image 
                            className={styles.frameIcon} 
                            width={22} 
                            height={22} 
                            alt="icon" 
                            src="/Frame164.svg" 
                        />
                        <div className={styles.textContainer}>
                            <div className={styles.name}>Joppu Kurian</div>
                            <div className={styles.role}>Asst. Manager, HR & Marketing</div>
                        </div>
                    </div>

                    {/* Aparna */}
                    <div className={`${styles.annotation} ${styles.analyst}`}>
                        <Image 
                            className={styles.frameIcon} 
                            width={22} 
                            height={22} 
                            alt="icon" 
                            src="/Frame164.svg" 
                        />
                        <div className={styles.textContainer}>
                            <div className={styles.name}>Aparna Sudeesan</div>
                            <div className={styles.role}>Business Analyst</div>
                        </div>
                    </div>

                    {/* Sandeep */}
                    <div className={`${styles.annotation} ${styles.designer}`}>
                        <Image 
                            className={styles.frameIcon} 
                            width={22} 
                            height={22} 
                            alt="icon" 
                            src="/Frame164.svg" 
                        />
                        <div className={styles.textContainer}>
                            <div className={styles.name}>Sandeep Vijay</div>
                            <div className={styles.role}>UI/UX Designer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;