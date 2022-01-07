import StageItem from "./StageItem";
import { ArticleType } from "../interfaces";
import styles from "./Stage.module.css";

type Props = {
  items: ArticleType[];
};

const Stage = ({ items }: Props) => (
  <ul className={styles.stage}>
    {items.map((item) => (
      <li key={item.id}>
        <StageItem data={item} />
      </li>
    ))}
  </ul>
);

export default Stage;
