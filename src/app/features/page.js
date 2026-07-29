import { Card } from "./Card";
import "./page.css";

export default function Home() {
  const movies = [
    {
      id: 1,
      title: "One Piece",
      genre: "Anime",
      rating: 4.9,
      watched: true,
      image: "https://picsum.photos/300?random=11",
    },
    {
      id: 2,
      title: "Inside Out 2",
      genre: "Movie",
      rating: 4.8,
      watched: false,
      image: "https://picsum.photos/300?random=12",
    },
    {
      id: 3,
      title: "Wednesday",
      genre: "Series",
      rating: 4.7,
      watched: true,
      image: "https://picsum.photos/300?random=13",
    },
    {
      id: 4,
      title: "Naruto",
      genre: "Anime",
      rating: 4.9,
      watched: false,
      image: "https://picsum.photos/300?random=14",
    },
    {
      id: 5,
      title: "Spider-Man",
      genre: "Movie",
      rating: 4.6,
      watched: false,
      image: "https://picsum.photos/300?random=15",
    },
    {
      id: 6,
      title: "Stranger Things",
      genre: "Series",
      rating: 4.8,
      watched: true,
      image: "https://picsum.photos/300?random=16",
    },
  ];

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          rating={movie.rating}
          watched={movie.watched}
          image={movie.image}
        />
      ))}
    </div>
  );
}
