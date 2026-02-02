import { useState } from "react";

export default function GetInTouch() {
  const [dataInput, setDataInput] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function sendEmail() {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "stevenleonardo57@gmail.com",
        subject: `New message from ${dataInput.email}`,
        text: `Email: ${dataInput.email}\nMobile: ${dataInput.mobile}\nMessage: ${dataInput.message}`,
      }),
    });

    let data;
    try {
      data = await response.json(); // will now succeed
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      data = { error: "Invalid JSON response" };
    }
  }

  async function handleSubmission(e) {
    e.preventDefault();
    await sendEmail();
    // Optionally, reset the form after submission
    setDataInput({ email: "", mobile: "", message: "" });
    alert("Message sent!");
  }

  return (
    <div className="get-in-touch_cmp component" id="get-in-touch">
      <div className="get-in-touch_cmp-title">
        <h2>Get In Touch</h2>
        <p>
          Interested in working together or have an opportunity you’d like to
          discuss? I’m open to collaborations, projects, and full-time roles.
          Let’s connect.
        </p>
      </div>
      <div className="get-in-touch_cmp-form">
        <form onSubmit={handleSubmission}>
          <div className="get-in-touch_cmp-form-email">
            <p>Email</p>
            <input
              name="email"
              type="email"
              value={dataInput.email}
              onChange={handleChange}
              placeholder="Please enter your email"
              required
            />
          </div>
          <div className="get-in-touch_cmp-form-mobile">
            <p>Mobile</p>
            <input
              name="mobile"
              type="tel"
              value={dataInput.mobile}
              onChange={handleChange}
              placeholder="Enter mobile"
            />
          </div>
          <div className="get-in-touch_cmp-form-message">
            <p>Message</p>
            <textarea
              name="message"
              value={dataInput.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>
          <button className="get-in-touch_cmp-form-submit-button" type="submit">
            Submit &gt;
          </button>
        </form>
      </div>
    </div>
  );
}
