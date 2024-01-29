import Link from 'next/link';
import { createClient } from 'next-sanity';

import { IPost } from './posts.types';

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: '2022-03-25',
  useCdn: false,
});

const getData = async () => {
  const receipts = await client.fetch(`*[_type == "receipt"]`);

  return receipts;
};

const PostsPage = async () => {
  const data = await getData();

  return (
    <div>
      <ul>
        {data.map(({ _id, name }: IPost) => (
          <li key={_id} style={{ margin: '12px' }}>
            <Link href={`/posts/${_id}`}>
              {_id} - {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
