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
          priority
        />
        <div className={styles.center}>
          <form className={css.form}>
            <p className={css.formTitle}>
              Get Your Free Ebook And See Results In Weeks!
            </p>
            <div className={css.inputContainer}>
              <input placeholder="Name" type="text" />
            </div>
            <div className={css.inputContainer}>
              <input placeholder="Email" type="email" />
            </div>
            <div className={css.inputContainer}>
              <input placeholder="Company Name" type="text" />
            </div>
            <button className={css.submit} type="submit">
              Get EBook
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
