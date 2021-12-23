import StageItem from "./StageItem";
import { Article } from "../interfaces";
import styles from "./Stage.module.css";

type Props = {
  items: Article[];
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
