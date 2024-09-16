import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShortcodeCopyComponent = ({ shortcode }) => {

  const handleCopy = () => {
    // Create a temporary input to copy the shortcode
    var tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = shortcode;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Trigger toast notification
    toast.success('Shortcode copied successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  return (
    <div>
      <button id="copyShortcodeButton" className="button" onClick={handleCopy}>
        Copy Shortcode
      </button>

      {/* ToastContainer to display the toasts */}
      <ToastContainer />
    </div>
  );
};

// Render the React component
wp.element.render(
  wp.element.createElement(ShortcodeCopyComponent, { shortcode: '[content_slider]' }),
  document.getElementById('shortcode-copy-root') // Make sure this div exists in your HTML
);
