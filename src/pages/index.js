import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import css from "../styles/index.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Free eBook</title>
        <meta
          name="description"
          content="5 free tips to boost your business on google."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ONLINE bUSINESS SOLUTIONS.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <div className={css.top}>
            <div className={css.bookInfo}>
              <div className={css.imageArea}>
                <Image
                  src="/5_TIPS_TO_BOOST_YOUR_BUSINESS.png"
                  alt="5 TIPS TO BOOST YOUR BUSINESS"
                  width={300}
                  height={400}
                  className={styles.image}
                  priority
                />
                <h2>
                  You are one step away from{" "}
                  <i>
                    <u>supercharging</u>
                  </i>{" "}
                  your{" "}
                  <i>
                    <u>digital</u>{" "}
                  </i>
                  presence and{" "}
                  <i>
                    <u> leaving your competitors in the dust</u>
                  </i>
                  .
                </h2>
              </div>
            </div>
            <a href="#form">
              <button className={css.getBook}>Get Book</button>
            </a>
          </div>
          <div className={css.info}>
            <div className={css.tipsArea}>
              <h2>What is included?</h2>
              <div className={css.p}>
                <h3> ✅ Secrets to Google Business Success: </h3> Unlock the key
                strategies to optimize your Google Business Page, including
                video marketing, real-time interaction, and keyword mastery,
                ensuring your business shines brightly in the digital world.
              </div>
              <div className={css.p}>
                <h3> ✅ Customer-Boosting Techniques: : </h3> Learn how to
                cultivate positive reviews, enhance your reputation, and
                establish a strong online hub. Discover how these tactics can
                significantly impact your customer acquisition and brand
                perception.
              </div>
              <div className={css.p}>
                <h3> ✅ Expert Guidance: </h3> Benefit from expert insights and
                actionable advice, so you can implement these winning strategies
                effectively. Take your online presence to the next level with
                step-by-step instructions and industry-proven tips.
              </div>
              <a href="#form">
                <button className={css.getBook}>Get Book</button>
              </a>
            </div>
          </div>
          <div className={css.formArea}>
            <form
              action="https://formsubmit.co/ad71efc73cc8938ab03f0fec5dd0f78f"
              method="POST"
              className={css.form}
              id="form"
            >
              <h2 className={css.formTitle}>
                Get Your Free Ebook And See Results In Weeks!
              </h2>
              <div className={css.horizontal}>
                <div>
                  <div className={css.inputContainer}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
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
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      required
                    />
                  </div>
                  <button className={css.submit} type="submit">
                    Get Book
                  </button>
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://how-to-attract-more-customers.netlify.app/thanks"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New EBook Download!"
                  />
                  <input type="hidden" name="_captcha" value="false" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
