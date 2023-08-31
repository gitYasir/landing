import css from "../styles/thanks.module.css";
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
        <h1>Thank you for contacting us.</h1>
        <div className={css.message}>
          We will get back to you as soon as possible.
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
