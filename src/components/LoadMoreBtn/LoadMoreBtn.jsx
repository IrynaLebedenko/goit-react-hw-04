import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, children }) => {
  return (
    <div className={css.BtnWrap}>
      <button className={css.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;