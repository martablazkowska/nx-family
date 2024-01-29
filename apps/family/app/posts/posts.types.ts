export interface IPost {
  _id: string;
  name: string;
}

export interface PostPageProps {
  params: {
    id: string;
  };
}
