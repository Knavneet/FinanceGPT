import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Give me the balance sheet of company from the document",
        value: "Give me the balance sheet of company from the document"
    },
    { text: "who are the key people mentioned in this document?", value: "who are the key people mentioned in this document?" },
    { text: "Generate 10 line summary for the document", value: "Generate 10 line summary for the document" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
