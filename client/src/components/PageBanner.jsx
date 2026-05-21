import { Link } from 'react-router-dom';

export default function PageBanner({ title, highlight, crumb }) {
  return (
    <section className="page-banner">
      <div className="container page-banner-inner">
        <h1>
          {title} {highlight && <span>{highlight}</span>}
        </h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="bc-sep"><i className="fas fa-angle-right" /></span>
          <span>{crumb || highlight || title}</span>
        </div>
      </div>
    </section>
  );
}
