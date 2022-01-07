import Link from "next/link";

import { ArticleType } from "../interfaces";

type Props = {
  data: ArticleType;
};

const ListItem = ({ data }: Props) => (
  <Link href="/articles/[id]" as={`/articles/${data.id}`}>
    <a>
      {data.id}: {data.title}
    </a>
  </Link>
);

export default ListItem;
