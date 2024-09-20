import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        colors={["#b69f89", "#34e4f5", "#c3eec8", "#68ccb3", "#5e17ee"]}
      />
    </div>
  );
};

export default Loader;
<ColorRing />;