import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/client";

export default function Home() {
  const router = useRouter();
  const [session, loading] = useSession();
  console.log({ session, loading });
  const handleClick = () => {
    console.log("placing your order");
    router.push("/product");
    // router.replace("/product");
  };
  return (
    <div className={styles.container}>
      <Head></Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {session ? "Welcome " + session.user.name : "Welcome"}
        </h1>

        <button onClick={handleClick}>Place Order</button>
      </main>

      <footer className={styles.footer}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/product">
          <a>Product</a>
        </Link>
      </footer>
    </div>
  );
}
