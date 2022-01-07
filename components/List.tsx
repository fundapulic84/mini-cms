import ListItem from "./ListItem";
import { ArticleType } from "../interfaces";

type Props = {
  items: ArticleType[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
