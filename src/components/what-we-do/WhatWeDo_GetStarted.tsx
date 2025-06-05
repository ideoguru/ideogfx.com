import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/WhatWeDo_GetStarted.module.css";
import Link from "next/link";

const GetStartedFrame: NextPage = () => {
  return (
    <div className={styles.getStartedFrame}>
      <div className={styles.container}>
        <div className={styles.topSectiondescription}>
          <div className={styles.withEveryStep}>
            With every step, we’re here to create a digital experience your
            users will love and remember. Because great design isn’t just about
            looking good—it’s about making your users feel right at home.
          </div>
        </div>
        <div className={styles.ctagetStarted}>
          <Link href="/Get-in-touch">
            <div className={styles.getStartedParent}>
              <div className={styles.getStarted}>Get Started</div>
              <Image
                className={styles.solararrowRightUpLinearIcon}
                width={24}
                height={24}
                alt=""
                src="/solar_arrow-right-up-linear.svg"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStartedFrame;
