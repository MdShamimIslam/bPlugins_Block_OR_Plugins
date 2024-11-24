import { useState, useEffect, useRef } from "@wordpress/element";

const ColorSchema = () => {
  const [colorVariants, setColorVariants] = useState({});
  const [activeVariant, setActiveVariant] = useState(null);
  const pickrRef = useRef(null);

  useEffect(() => {
    const pickrInstance = new window.Pickr({
      el: ".color-picker",
      theme: "classic",
      default: "#42445a",
      swatches: [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
      ],
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });

    const generateColorVariants = (baseColor) => {
      const variants = {};
      for (let i = 1; i <= 8; i++) {
        variants[`variant${i}`] = adjustLightness(baseColor, i * 10);
      }
      return variants;
    };

    const adjustLightness = (hexColor, amount) => {
      let color = hexColor.replace("#", "");
      const num = parseInt(color, 16);

      const r = Math.min(255, Math.max(0, (num >> 16) + amount));
      const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
      const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));

      return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
    };

    pickrInstance.on("save", (color) => {
      const selectedHexColor = color.toHEXA().toString();
      const variants = generateColorVariants(selectedHexColor);
      setColorVariants(variants);
    });

    return () => {
      pickrInstance.destroyAndRemove();
    };
  }, []);

  const handleVariantClick = (variantKey) => {
    setActiveVariant(variantKey);
  };

  const handleColorChange = (color) => {
    if (activeVariant) {
      setColorVariants((prevVariants) => ({
        ...prevVariants,
        [activeVariant]: color.toHEXA().toString(),
      }));
      setActiveVariant(null);
    }
  };

  useEffect(() => {
    if (activeVariant && pickrRef.current) {
      const pickrInstance = new window.Pickr({
        el: pickrRef.current,
        theme: "classic",
        default: colorVariants[activeVariant],
        components: {
          preview: true,
          opacity: true,
          hue: true,
          interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      });

      pickrInstance.on("save", handleColorChange);

      return () => {
        pickrInstance.destroyAndRemove();
      };
    }
  }, [activeVariant, colorVariants]);

  return (
    <div>
      <div className="color-picker div1"></div>
      <div className="color-variants">
        {Object.keys(colorVariants).length > 0 && (
          <ul style={{display:"flex", marginLeft:"-40px"}}>
            {Object.keys(colorVariants).map((key, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: colorVariants[key],
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "2px solid #fff",
                }}
                onClick={() => handleVariantClick(key)}
                title={colorVariants[key]}
              />
            ))}
          </ul>
        )}
      </div>

      {activeVariant && (
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <p style={{marginLeft:"-45px", marginTop:"5px"}}>{activeVariant}</p>
          <div className="color-picker" ref={pickrRef}></div>
        </div>
      )}
    </div>
  );
};

export default ColorSchema;
