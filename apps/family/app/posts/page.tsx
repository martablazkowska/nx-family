import Link from 'next/link';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
    // next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Request error');
  }

  return res.json();
};

const PostsPage = async () => {
  const data = await getData();

  return (
    <div>
      <ul>
        {data.map(({ id, title }) => (
          <li key={id} style={{ margin: '12px' }}>
            <Link href={`/posts/${id}`}>
              {id} -{title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
