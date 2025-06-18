export default function Reviews({ name, vote, text }) {
  return (
    <div>
      {name.map((n) => (
        <h4>{n}</h4>
      ))}
      <h4>{name}</h4>
      <p>{text}</p>
      <p>{vote}</p>
    </div>
  );
}
