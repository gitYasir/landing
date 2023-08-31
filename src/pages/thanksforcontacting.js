import { useEffect } from "react";
import css from "../styles/thanks.module.css";
import Head from "next/head";

const ThankYouPage = () => {
  //   useEffect(() => {
  //     const downloadPdf = () => {
  //       const pdfUrl = "/5-TIPS-TO-BOOST-YOUR-BUSINESS.pdf";

  //       const link = document.createElement("a");
  //       link.href = pdfUrl;
  //       link.target = "_blank";
  //       link.download = "5 TIPS TO BOOST YOUR BUSINESS.pdf";
  //       link.click();
  //     };

  //     downloadPdf();
  //   }, []);

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
