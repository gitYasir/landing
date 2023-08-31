import css from "../styles/contact.module.css";
import Head from "next/head";

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta
          name="description"
          content="5 free tips to boost your business on google."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ONLINE bUSINESS SOLUTIONS.png" />
      </Head>
      <div className={css.main}>
        <form
          action="https://formsubmit.co/ad71efc73cc8938ab03f0fec5dd0f78f"
          method="POST"
          className={css.form}
          id="form"
        >
          <p className={css.formTitle}>
            Get Your Free Ebook And See Results In Weeks!
          </p>
          <div className={css.inputContainer}>
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className={css.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className={css.inputContainer}>
            <textarea name="message" placeholder="Message" required />
          </div>
          <button className={css.submit} type="submit">
            Get EBook
          </button>
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input
            type="hidden"
            name="_next"
            value="https://how-to-attract-more-customers.netlify.app/thanksforcontacting"
          />
          <input type="hidden" name="_subject" value="New EBook Download!" />
        </form>
      </div>
    </>
  );
};

export default ThankYouPage;
