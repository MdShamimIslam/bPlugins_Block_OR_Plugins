import { createRoot } from "react-dom/client";
import Layout from "./Components/Common/Layout";
import "./style.scss";
document.addEventListener("DOMContentLoaded", () => {
  const contentSliderEls = document.querySelectorAll(
    ".wp-block-bplcs-content-slider"
  );
  contentSliderEls.forEach((contentSliderEl) => {
    const attributes = JSON.parse(contentSliderEl.dataset.attributes);

    createRoot(contentSliderEl).render(
        <Layout attributes={attributes} />
    );
    
    contentSliderEl?.removeAttribute("data-attributes");

  });
});
