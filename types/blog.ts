type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  content:  string,
  author: Author;
  tags: string[];
  relatedTags: string[];
  publishDate: string;
};
