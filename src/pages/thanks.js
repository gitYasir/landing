import { useEffect, useState } from "react";
import css from "../styles/thanks.module.css";
import Head from "next/head";

const ThankYouPage = () => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const downloadPdf = () => {
      if (!downloaded) {
        const pdfUrl = "/5-TIPS-TO-BOOST-YOUR-BUSINESS.pdf";

        const link = document.createElement("a");
        link.href = pdfUrl;
        link.target = "_blank";
        link.download = "5 TIPS TO BOOST YOUR BUSINESS.pdf";
        link.click();

        setDownloaded(true);

        localStorage.setItem("pdfDownloaded", "true");
      }
    };

    if (localStorage.getItem("pdfDownloaded") === "true") {
      setDownloaded(true);
    } else {
      downloadPdf();
    }
  }, [downloaded]);

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
        <h1>
          Congratulations on Taking the First Step Towards Digital Excellence!
        </h1>
        <div className={css.message}>
          <p>
            You're now armed with valuable insights to boost your business
            profile on Google. By implementing these tips, you're well on your
            way to enhancing your online visibility and connecting with your
            audience more effectively.
            <br />
            <br />
            Remember, your dedication to improving your online presence speaks
            volumes about your commitment to success. As you apply these
            strategies, keep in mind that every step you take contributes to
            your growth.
            <br />
            <br />
            Should you ever need further support or have questions along the
            way, feel free to{" "}
            <a
              href="https://how-to-attract-more-customers.netlify.app/contact"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Form"
            >
              {" "}
              <strong>
                <u>reach out</u>
              </strong>
            </a>
            . Your journey is our priority, and we're here to cheer you on as
            you navigate the digital landscape.
            <br />
            <br />
            Stay inspired, stay driven, and watch your online presence thrive!
          </p>
        </div>
        <p className={css.download}>
          If the file did not automatically download, please click
          <a
            href="/5-TIPS-TO-BOOST-YOUR-BUSINESS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="5 TIPS TO BOOST YOUR BUSINESS"
            download
          >
            {" "}
            <strong>
              <u>here</u>
            </strong>{" "}
          </a>
          to download.
        </p>
      </div>
    </>
  );
};

export default ThankYouPage;
