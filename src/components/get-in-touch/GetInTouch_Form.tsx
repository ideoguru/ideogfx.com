"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/GetInTouch_Form.module.css";

const GetInTouchForm: NextPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
        setSelectedFile(null);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.getInTouchContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <h1 className={styles.mainHeading}>Get In Touch</h1>
          <p className={styles.subHeading}>
            Discuss Your Vision and Explore Collaboration Opportunities
          </p>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0360072!2d76.335773!3d10.0360072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dff2f3082ff%3A0xc54157b9f4614e58!2sCheryl%20Hill%20Park!5e0!3m2!1sen!2sus!4v1718787878787"
              className={styles.mapIframe}
              title="Office Location Map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.contactInfo}>
            <h2 className={styles.sectionTitle}>Address</h2>
            <p className={styles.contactText}>
              Ideo Graphics
              <br />
              Third Floor, Cheryl Hill Park,
              <br />
              Seaport - Airport Rd, Vallathol Padl,
              <br />
              Vidya Nagar Colony, Trinkkakara,
              <br />
              Edappally, Kochi, Kerala 682021
            </p>

            <h2 className={styles.sectionTitle}>Phone</h2>
            <p className={styles.contactText}>+91 8075873153</p>

            <h2 className={styles.sectionTitle}>Email</h2>
            <p className={styles.contactText}>info@ideogfx.com</p>
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
        </div>

        <div className={styles.rightSection}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Name"
                className={styles.formInput}
                name="name"
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.formInput}
                  name="email"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="Phone No."
                  className={styles.formInput}
                  name="phone"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Purpose"
                className={styles.formInput}
                name="purpose"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                placeholder="Message/Additional Details"
                className={styles.formTextarea}
                rows={4}
                name="message"
                required
              />
            </div>

            <div className={styles.fileUpload}>
              <label className={styles.uploadLabel}>
                Upload Your Project Brief
                <input
                  type="file"
                  className={styles.fileInput}
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  name="attachment"
                />
                <Image
                  src="/icon-park-outline_upload-one.svg"
                  width={20}
                  height={20}
                  alt="Upload"
                  className={styles.uploadIcon}
                />
              </label>
              {selectedFile && (
                <span className={styles.fileName}>{selectedFile.name}</span>
              )}
            </div>

            <p className={styles.privacyText}>
              In submitting this form, you are agreeing to Ideo’s Privacy Policy
            </p>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Let’s Talk"}
              <Image
                src="/solar_arrow-right-up-linear.svg"
                width={24}
                height={24}
                alt="Submit"
                className={styles.arrowIcon}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
