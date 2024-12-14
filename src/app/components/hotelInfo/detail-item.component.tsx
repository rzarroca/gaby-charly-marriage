export interface DetailItemComponentProps {
  index: number;
  summary: string;
  cost: number;
}

export const DetailItemComponent = ({
  index,
  summary,
  cost,
}: DetailItemComponentProps) => (
  <dl className="grid gap-1 rounded border-2 border-primary p-3 text-center">
    <dt className="text-lg underline underline-offset-2 md:text-xl">
      Habitación {index + 1}:
    </dt>
    <dd>{summary}</dd>
    <dd>{`USD ${cost}`}</dd>
  </dl>
);
