import Image from "next/image";
import { Article } from "../interfaces";

type ListDetailProps = {
  item: Article;
};

const ListDetail = ({ item: article }: ListDetailProps) => (
  <div>
    <h1>{article.title}</h1>
    <Image
      src={article.image}
      alt="Alt Text For Image"
      width={640}
      height={75}
    />
    <p>{article.text}</p>
  </div>
);

export default ListDetail;
