import { createRoot } from "react-dom/client";
import Layout from "./Components/Common/Layout";
import "./style.scss";
import Style from "./Components/Common/Style";
document.addEventListener("DOMContentLoaded", () => {
  const contentSliderEls = document.querySelectorAll(
    ".wp-block-bplcs-content-slider"
  );
  contentSliderEls.forEach((contentSliderEl) => {
    const attributes = JSON.parse(contentSliderEl.dataset.attributes);

    createRoot(contentSliderEl).render(
      <>
        <Style attributes={attributes} id={contentSliderEl.id} />

        <div className="bBlocksContentSlider">
          <Layout attributes={attributes} />
        </div>

      </>
    );
    
    contentSliderEl?.removeAttribute("data-attributes");

  });
});
