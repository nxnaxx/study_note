import Head from 'next/head';

type PostHeadProps = {
  title?: string;
  description?: string;
  image?: string;
};

export default function PostHead(props: PostHeadProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />

        {/* Open Graph meta data */}
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.image} />

        {/* Twitter meta data */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.description} />
        <meta property="twitter:image" content={props.image} />
      </Head>
    </>
  );
}
