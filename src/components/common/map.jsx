import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="contact-map">
        <div id="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8532876127224!2d108.5336943!3d-6.5402043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eef0049c2585f%3A0x776d63fabe301de7!2sCV.%20Purferai%20Ikan%20Mandiri!5e0!3m2!1sen!2sid!4v1759879344997!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
