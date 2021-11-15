import "./topbar.scss";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            hana
          </a>
          <div className="itemContainer">
            <EmojiPeopleIcon className="icon" />
            <span>+123 456 789</span>
          </div>
          <div className="itemContainer">
            <ConnectWithoutContactIcon className="icon" />
            <span>123 456 789@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
