import Form from "next/form";
export default function GetInTouch() {
  function handleSubmission() {
    console.log("test");
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
        <Form onSubmit={handleSubmission}>
          <div className="get-in-touch_cmp-form-email">
            <p>Email</p>
            <input type="email" placeholder="Please enter your email" />
          </div>
          <div className="get-in-touch_cmp-form-mobile">
            <p>Mobile</p>
            <input type="tel" placeholder="Enter mobile" />
          </div>
          <div className="get-in-touch_cmp-form-message">
            <p>Message</p>
            <textarea name="message" placeholder="Enter your message" />
          </div>
          <button className="get-in-touch_cmp-form-submit-button" type="submit">
            Submit &gt;
          </button>
        </Form>
      </div>
    </div>
  );
}
