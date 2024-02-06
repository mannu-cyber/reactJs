import "./CaseCard.css";

function CaseCard({ title, discritption }) {
  return (
    <>
      <div className="parent">
        <h2>{title.substring(0, 50)} {title.length > 50 ? "..." : null}</h2>
        <p className="case-card-p">{discritption.substring(0, 350)} {title.length > 10 ? "..." : null}</p>
      </div>
    </>
  );
}

export default CaseCard;
