import { useState } from "react";
import { useTranslation } from "@/src/hooks/useTranslation";

const ContactStandardForm = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/raihanhelmi30@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            phoneNumber: formData.get("phoneNumber"),
            message: formData.get("message"),
            _subject: formData.get("subject"), // Subject untuk email
            _captcha: "false", // Disable captcha, set 'true' jika mau pakai
            _template: "table", // Format email
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <input
              name="name"
              type="text"
              placeholder={t("contact.name")}
              required
              style={{ textTransform: "none" }}
            />
          </div>
          <div className="col-lg-6">
            <input
              name="email"
              type="email"
              placeholder={t("contact.email")}
              required
              style={{ textTransform: "none" }}
            />
          </div>
          <div className="col-lg-6">
            <input
              name="phoneNumber"
              type="tel"
              placeholder={t("contact.phoneNumber")}
              required
              style={{ textTransform: "none" }}
            />
          </div>
          <div className="col-lg-6">
            <input
              name="subject"
              type="text"
              placeholder={t("contact.subject")}
              required
              style={{ textTransform: "none" }}
            />
          </div>
          <div className="col-lg-12">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder={t("contact.message")}
              required
              style={{ textTransform: "none" }}
            ></textarea>

            {/* Status Messages */}
            {status === "success" && (
              <div
                style={{
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  borderRadius: "4px",
                }}
              >
                {t("Sukses Mengirim") || "Message sent successfully!"}
              </div>
            )}

            {status === "error" && (
              <div
                style={{
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  borderRadius: "4px",
                }}
              >
                {t("contact.errorMessage") ||
                  "Failed to send message. Please try again."}
              </div>
            )}

            <button
              type="submit"
              className="x-btn btn-black"
              disabled={loading}
            >
              {loading
                ? t("contact.sending") || "Sending..."
                : t("contact.send") || "send message"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactStandardForm;
