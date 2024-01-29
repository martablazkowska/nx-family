import { notFound } from 'next/navigation';

import { PostPageProps } from '../posts.types';

const getData = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
    // next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const PostPage = async ({ params }: PostPageProps) => {
  const data = await getData(params.id);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default PostPage;
