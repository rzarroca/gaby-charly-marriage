export interface DetailItemComponentProps {
  summary: string;
  cost: number;
}

export const DetailItemComponent = ({
  summary,
  cost,
}: DetailItemComponentProps) => (
  <li>
    <details>
      <summary>{summary}</summary>
      <p>{`USD ${cost}`}</p>
    </details>
  </li>
);
