import PostHead from '@/components/PostHead';
import posts from '../../data/post';

export function getServerSideProps({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <PostHead {...post} />
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </div>
  );
}
