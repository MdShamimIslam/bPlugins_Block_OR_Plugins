import { createRoot } from "react-dom/client";
import ImageViewer from "./Components/Common/ImageViewer";
import PanoramicImageViewer from "./Components/Common/PanoramicImageViewer";
import Style from "./Components/Common/Style";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const PanoramicImageViewerEls = document.querySelectorAll(
    ".wp-block-b-blocks-panoramic-image-viewer"
  );
  PanoramicImageViewerEls.forEach((PanoramicImageViewerEl) => {
    const attributes = JSON.parse(PanoramicImageViewerEl.dataset.attributes);

    createRoot(PanoramicImageViewerEl).render(
      <>
        <Style attributes={attributes} id={PanoramicImageViewerEl.id} />

        <div className="bBlocksImageViewer">
          {attributes.options.viewerSl !== "360°" ? (
            <PanoramicImageViewer attributes={attributes} />
          ) : (
            <ImageViewer attributes={attributes} />
          )}
        </div>
      </>
    );

    PanoramicImageViewerEl?.removeAttribute("data-attributes");
  });
});
