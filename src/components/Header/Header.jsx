import HeadBottom from "./HeadBottom";
import HeadTop from "./HeadTop";


const Header = ({ cart = [] }) => {
  return (
    <div>
      <HeadTop />
      <HeadBottom />
    </div>
  );
}

export default Header;
