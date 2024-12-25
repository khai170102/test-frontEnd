import PropTypes from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className="mx-auto w-screen  ">{props.children}</div>
      <hr />
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
