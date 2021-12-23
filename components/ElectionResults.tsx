//import StageItem from "./StageItem";
import { Party } from "../interfaces";
import ListItem from "./ListItem";
import styles from "./Stage.module.css";

type Props = {
  props: Party[];
};

const ElectionResults = ({ props }: Props) => (
  <ul className={styles.stage}>
    {props.map((item) => (
      <li key={item.id}>
        Party: {item.name}
        Votes: {item.votes}
        %: {item.percentage}
      </li>
    ))}
  </ul>
);

export default ElectionResults;
