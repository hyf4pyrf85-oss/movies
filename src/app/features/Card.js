export function Card(props) {
  const { title, genre, rating, watched, image } = props;

  return (
    <div className="card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>🎭 Genre: {genre}</p>

      <p>⭐ Rating: {rating}</p>

      <p>{rating >= 4.8 ? "🔥 Must Watch" : "⭐ Recommended"}</p>

      <p>{watched ? "✅ Watched" : "🍿 Watch Tonight"}</p>
    </div>
  );
}
