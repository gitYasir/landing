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
        <Image
          src="/5_TIPS_TO_BOOST_YOUR_BUSINESS.png"
          alt="5 TIPS TO BOOST YOUR BUSINESS"
          width={300}
          height={400}
          className={styles.image}
          priority
        />
        <div className={styles.center}>
          <form
            target="_blank"
            action="https://formsubmit.co/ad71efc73cc8938ab03f0fec5dd0f78f"
            method="POST"
            className={css.form}
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
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>
            <button className={css.submit} type="submit">
              Get EBook
            </button>
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_replyto" />
            <input
              type="hidden"
              name="_autoresponse"
              value="<a>https://www.google.co.uk</a>"
            />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/thanks"
            ></input>
          </form>
        </div>
      </main>
    </>
  );
}
