import Head from 'next/head';
import Link from 'next/link';
import Widget from '../components/Widget';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About this website</title>
      </Head>
      <div>
        <Link href="/" passHref>
          Back to Home
        </Link>
      </div>
      <div>
        <Widget pageName="about" />
      </div>
    </>
  );
}
