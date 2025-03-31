import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/WhoWeAre_MeetOurTeam.module.css";

const MeetOurTeam: NextPage = () => {
  return (
    <div className={styles.meetOurTeam}>
      <div className={styles.container}>
        <div className={styles.textContents}>
          <div className={styles.meetOurTeam1}>Meet Our Team</div>
          <div className={styles.getToKnow}>
            Get to know the minds behind the magic! Our team is a diverse group
            of passionate creatives, strategic thinkers, and problem solvers,
            all dedicated to building meaningful digital experiences. From our
            visionary director and insightful business analyst to our innovative
            designers and resourceful marketing and HR leaders, each member
            plays a crucial role in shaping the way we create and connect.
            Together, we bring a blend of expertise, collaboration, and fresh
            ideas to every project, making sure each client’s vision becomes a
            powerful, user-centered reality.
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
              <div className={styles.roleDescription}>
                Leads the strategic vision and oversees all company operations,
                ensuring alignment with long-term goals.
              </div>
            </div>
          </div>

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
              <div className={styles.roleDescription}>
                Drives talent acquisition and brand visibility strategies while
                fostering a positive workplace culture.
              </div>
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
              <div className={styles.roleDescription}>
                Bridges client needs with technical solutions through
                comprehensive market research and data analysis.
              </div>
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
              <div className={styles.roleDescription}>
                Crafts intuitive user interfaces and experiences that balance
                aesthetics with functional requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
