import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const list = [
    { id: "website", title: "Website" },
    {
      id: "ruby terminal app",
      title: "Ruby Terminal Application",
    },
    {
      id: "ruby marketplace app",
      title: "Ruby Marketplace App",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="=" alt="" />
          <h3>Website Portfolio</h3>
        </div>
        <div className="item">
          <img src="assets/website_portfolio" alt="" />
          <h3>Ruby Terminal Application</h3>
        </div>
        <div className="item">
          <img src="=" alt="" />
          <h3>Two sided Marketplace</h3>
        </div>
      </div>
    </div>
  );
}
