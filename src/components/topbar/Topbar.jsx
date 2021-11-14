import "./topbar.scss";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            hana
          </a>
          <div className="itemContainer">
            <EmojiPeopleIcon className="icon" />
            <span>+44 99</span>
          </div>
          <div className="itemContainer">
            <ConnectWithoutContactIcon className="icon" />
            <span>+44 99</span>
          </div>
        </div>
        <div className="right"></div>
        this is right
      </div>
    </div>
  );
}
