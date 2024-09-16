import { useState } from "react";
import { Button, TextControl, ToggleControl } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { produce } from "immer";

const General = ({ attributes, setAttributes }) => {
  const { slides, slideOptions } = attributes;
  const { isInsertLink } = slideOptions;
  const [error, setError] = useState("");

  const [isAddingSlide, setIsAddingSlide] = useState(false);
  const [newSlide, setNewSlide] = useState({ url: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleAddSlide = () => {
    setIsAddingSlide(!isAddingSlide);
  };

  const saveSlide = () => {
    if (!newSlide.url || newSlide.url.trim() === "") {
      setError("Please select an image or enter a valid image URL.");
      return;
    }

    let updatedSlides = [...slides];
    if (editingIndex !== null) {
      updatedSlides[editingIndex] = newSlide;
    } else {
      updatedSlides.push(newSlide);
    }

    setError("");
    setAttributes({ slides: updatedSlides });
    setNewSlide({ url: "" });
    setEditingIndex(null);
    toggleAddSlide();
  };

  const cancelSlide = () => {
    setNewSlide({ url: "" });
    setEditingIndex(null);
    toggleAddSlide();
  };

  const handleImageUrlChange = (url) => {
    setNewSlide({ ...newSlide, url });

    if (url && url.trim() !== "") {
      setError("");
    }
  };

  const handleDeleteSlide = (index) => {
    const updatedSlides = slides.filter((_, i) => i !== index);
    setAttributes({ slides: updatedSlides });
  };

  const handleEditSlide = (index) => {
    setNewSlide(slides[index]);
    setEditingIndex(index);
    toggleAddSlide();
  };

  return (
    <div className="wp-block-bplcs-content-slider">
    <div className="generalSetting">
      <Button className="addButton" onClick={toggleAddSlide}>
        {editingIndex !== null ? "Edit Slide" : "Add Slide"}
      </Button>
      {isAddingSlide && (
        <div className="add-slide-form">
          <ToggleControl
            label="Insert external link"
            checked={isInsertLink}
            onChange={(val) => {
              const newOptions = produce(slideOptions, (draft) => {
                draft.isInsertLink = val;
              });
              setAttributes({ slideOptions: newOptions });
            }}
          />

          {isInsertLink ? (
            <div className="linkDiv">
              <label className="linkLabel">Image URL</label>
              <TextControl
                className="insertLink"
                placeholder="Insert image link"
                value={newSlide.url}
                onChange={handleImageUrlChange}
              />
            </div>
          ) : (
            <div>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => handleImageUrlChange(media.url)}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button className="uploadButtonImage" onClick={open}>
                      {newSlide.url ? "change image" : "upload image"}
                    </Button>
                  )}
                />
              </MediaUploadCheck>

              {newSlide.url && (
                <img
                  src={newSlide.url}
                  alt="Selected Slide"
                  style={{ maxWidth: "50%", height: "auto" }}
                />
              )}
            </div>
          )}

          <p style={{ color: "red" }}>{error}</p>

          <Button className="saveButton" onClick={saveSlide}>
            Save
          </Button>
          <Button className="cancelButton" onClick={cancelSlide}>
            Cancel
          </Button>
        </div>
      )}

      <div className="saved-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-preview ${slides.length > 1 && "has-border"}`}
          >
            <img src={slide.url} alt={`Slide ${index + 1}`} />
            <div className="slide-actions">
              <span
                title="edit slide"
                className="editButton"
                onClick={() => handleEditSlide(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                  width={"25px"} 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </span>
              {
                slides.length > 1 &&   <span
                title="delete slide"
                className="deleteButton"
                onClick={() => handleDeleteSlide(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                  width={"25px"}                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              }
            
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default General;
