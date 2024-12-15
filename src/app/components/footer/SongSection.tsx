interface SongSectionProps {
  verses: string[];
}

export const SongSection = ({ verses }: SongSectionProps) => (
  <section>
    {verses.map((verse, index) => (
      <p key={index}>{verse}</p>
    ))}
  </section>
);
