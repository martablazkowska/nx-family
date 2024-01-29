import { notFound } from 'next/navigation';
import { createClient } from 'next-sanity';

import { PostPageProps } from '../posts.types';

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: '2022-03-25',
  useCdn: false,
});

const getData = async (id: string) => {
  const receipt = await client.fetch(`*[_type == "receipt" && _id == "${id}"]`);

  if (!receipt) notFound();

  return receipt[0];
};

const PostPage = async ({ params }: PostPageProps) => {
  const data = await getData(params.id);
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
};

export default PostPage;
