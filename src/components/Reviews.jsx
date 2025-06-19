export default function Reviews({ reviews }) {
  return (
    <>
      <div>
        {reviews.map((r) => (
          <>
            <div>
              <span>{r.name}</span>
              <span>{r.text}</span>
              <span>{r.vote}</span>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
