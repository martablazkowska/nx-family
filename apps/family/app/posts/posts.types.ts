export interface IPost {
  id: string;
  title: string;
  body: string;
}

export interface PostPageProps {
  params: IPost;
}
