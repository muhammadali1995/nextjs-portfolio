import Head from 'next/head'
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';


export default function Home({ allPostsData }) {
  return (
    <Layout className={styles.container} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey, I'm Mukhammadali (Ali). I'm a software engineer at Toptal</p>
        <p className="text-blue-300">
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}