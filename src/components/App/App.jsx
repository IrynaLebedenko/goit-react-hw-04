
import { useEffect, useState } from "react";
import Modal from "react-modal";

import SearchBar from "../../SearchBar/SearchBar";
import { getPhotos } from "../components/Api/Photos";
import LoadMoreBtn from "../../LoadMoreBtn/LoadMoreBtn";
import { Loader } from "../../Loader/Loader";
import ImageGallery from "../../ImageGallery/ImageGallery";
import ImageModal from "../../Modal/Modal";

import css from "./App.module.css";

const App = () => {
  Modal.setAppElement("#root");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [allPhotos, setAllPhotos] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [imageCard, setImageCard] = useState(null);

  const onFormSubmit = (query) => {
    setLoading(true);
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setErr(false);
    setAllPhotos(false);
  };

  useEffect(() => {
    if (!query) return;
    const photosFromAPI = async () => {
      try {
        const { results } = await getPhotos(query, page);
        if (results.length === 0) {
          setAllPhotos(true);
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...results]);
          console.log(results);
        }
      } catch (err) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    };
    photosFromAPI();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getCard = (photo) => {
    setImageCard(photo);
  };

  return (
    <div className="wrapper container form-body">
      <SearchBar onSubmit={onFormSubmit} />
      {err && (
        <p>
          Something went wrong... Please, reload the page or try a bit later!
        </p>
      )}
      {loading && <Loader status={loading} />}
      <ImageGallery photos={photos} openModal={openModal} getCard={getCard} />
      {photos.length === 0 && allPhotos && (
        <p className={css.endList}>
          Sorry, there are no matches!
        </p>
      )}
      {photos.length > 0 &&
        ((allPhotos && <p className={css.endList}>That is all we have!</p>) || (
          <LoadMoreBtn onClick={onLoadMore}>Load more...</LoadMoreBtn>
        ))}
      <ImageModal
        closeModal={closeModal}
        photo={imageCard}
        openModal={openModal}
        IsOpen={IsOpen}
      />
    </div>
  );
};

export default App;