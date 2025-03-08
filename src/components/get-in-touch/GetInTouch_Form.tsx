"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../../styles/GetInTouch_Form.module.css";

const GetInTouchForm: NextPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const SuccessNotification = () => {
    useEffect(() => {
      if (showSuccess) {
        const timer = setTimeout(() => setShowSuccess(false), 5000);
        return () => clearTimeout(timer);
      }
    }, [showSuccess]);

    return (
      <div
        className={`${styles.successNotification} ${
          showSuccess ? styles.show : ""
        }`}
      >
        <div className={styles.notificationContent}>
          <div className={styles.checkmarkContainer}>
            <svg className={styles.checkmark} viewBox="0 0 52 52">
              <circle
                className={styles.checkmarkCircle}
                cx="26"
                cy="26"
                r="25"
              />
              <path
                className={styles.checkmarkCheck}
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <div className={styles.notificationText}>
            <h3 className={styles.notificationTitle}>Message Sent!</h3>
            <p className={styles.notificationSubtitle}>
              We'll get back to you within 24 hours
            </p>
          </div>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    );
  };

  // Validation functions
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) => /^\d{10}$/.test(phone);

  const sanitizeInput = (input: string) =>
    input.replace(/[;'"\\<>()&|#\$\*]/g, "");

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const fields = ["name", "email", "phone", "purpose", "message"];

    // Basic SQL injection prevention and input sanitization
    fields.forEach((field) => {
      const value = formData.get(field) as string;
      if (/(\b(DROP|DELETE|INSERT|SELECT|UPDATE|EXEC)\b)|[;'"\\]/.test(value)) {
        newErrors[field] = "Invalid characters detected";
      }
    });

    // Email validation
    const email = formData.get("email") as string;
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phone = formData.get("phone") as string;
    if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Required fields check
    if (!formData.get("name")) newErrors.name = "Name is required";
    if (!formData.get("purpose")) newErrors.purpose = "Purpose is required";
    if (!formData.get("message")) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    // Sanitize inputs and prepare data
    const name = sanitizeInput(formData.get("name") as string);
    const email = sanitizeInput(formData.get("email") as string);
    const phone = sanitizeInput(formData.get("phone") as string);
    const purpose = sanitizeInput(formData.get("purpose") as string);
    const message = sanitizeInput(formData.get("message") as string);
    const attachment = selectedFile;

    // Convert file to base64 if exists
    let pdfBase64 = "";
    if (attachment) {
      try {
        const base64String = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(attachment);
        });
        pdfBase64 = base64String.split(",")[1];
      } catch (error) {
        console.error("File processing error:", error);
        alert("Error uploading file");
        setIsSubmitting(false);
        return;
      }
    }

    // Create payload
    const payload = {
      pdfBase64,
      subject: `New Contact Request: ${purpose}`,
      body: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      fileName: attachment?.name || "",
      fromMail: "guru@ideogfx.com",
    };

    try {
      const response: any = await fetch(
        "https://5ugcpdbdr5.execute-api.ap-south-1.amazonaws.com/xspine/sendEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "q7dpDIlFvm8pKiUP7eWPT8LOAXcEiVCV7o9XQo9M",
            // Bypass CORS temporarily for testing
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(payload),
          mode: "no-cors",
          credentials: "omit",
        }
      );
      // console.log("Response:", response.statusCode);
      // if (!response.statusCode) {
      //   const errorData = await response.text();
      //   throw new Error(`API Error: ${response.status} - ${errorData}`);
      // }

      setShowSuccess(true);
      form.reset();
      setSelectedFile(null);
    } catch (error: any) {
      console.error("Submission error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.getInTouchContainer}>
      <SuccessNotification />
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
              {errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
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
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="Phone No."
                  className={styles.formInput}
                  name="phone"
                  required
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>{errors.phone}</span>
                )}
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
                {errors.attachment && (
                  <span className={styles.errorMessage}>
                    {errors.attachment}
                  </span>
                )}
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
