import axios from "axios";
import { useState } from "react";

export default function ReviewsForm({ id, refresh }) {
  const apiUrlReview = `http://localhost:3000/movies/${id}/reviews`;
  console.log(id);
  const formInitialData = {
    name: "",
    vote: "",
    text: "",
    check: false,
  };

  const [formData, setFormData] = useState(formInitialData);

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchMovieReview();
    setFormData(formInitialData);
  };

  const fetchMovieReview = () => {
    axios.post(apiUrlReview, formData).then((res) => {
      refresh();
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={formData.name}
            />
          </label>

          <label>
            Voto:
            <input
              type="number"
              id="vote"
              name="vote"
              onChange={handleInputChange}
              value={formData.vote}
              min={1}
              max={10}
            />
          </label>
          <label>
            Inserisci descrizione:
            <textarea
              value={formData.text}
              name="text"
              onChange={handleInputChange}
            />
          </label>
          <label>
            Accetta "Termini e Condizioni"
            <input
              type="checkbox"
              name="check"
              checked={formData.check}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button>Invia</button>
      </form>
    </>
  );
}
