import { __ } from "@wordpress/i18n";
import {
  SelectControl,
  RangeControl,
  ToggleControl,
  PanelRow, __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { produce } from "immer";
import { Label } from '../../../../../../Components';
import { updateData } from "../../../../utils/functions";
import { pxUnit} from "../../../../../../Components/utils/options";
import { Device } from '../../../../../../Components/Device/Device';



const Style = ({ attributes, setAttributes, device }) => {
  const { slideOptions } = attributes;

  return (
    <div className="wp-block-bplcs-content-slider bPlPanelBody" style={{ padding: "20px" }}>
      <div className="transitionType">
        <p>Transition Type</p>
        <SelectControl 
          className="customSelect"
          value={slideOptions.transitionType}
          options={[
            { label: "Horizontal", value: "horizontal" },
            { label: "Fade", value: "fade" },
          ]}
          onChange={(selectType) =>
            setAttributes({
              slideOptions: { ...slideOptions, transitionType: selectType },
            })
          }
        />
      </div>

   
     <PanelRow >
				<Label>{__('Width', 'content-slider')}</Label>
        <Device />
			</PanelRow>
			<UnitControl
				value={slideOptions.width[device]}
        max={620}
        units={[pxUnit()]}
				onChange={(v) => setAttributes({ slideOptions: updateData(slideOptions, v, 'width', device) })}
			/>

      <p className="custom-label" style={{marginTop:"15px"}}>Transition Duration (ms)</p>
      <RangeControl
        value={slideOptions.transitionDuration}
        onChange={(val) =>
          setAttributes({
            slideOptions: { ...slideOptions, transitionDuration: val },
          })
        }
        min={500}
        max={2000}
        step={50}
      />

      <ToggleControl
        label="Controls Enabled"
        className="conEnabled"
        checked={slideOptions?.enableControl}
        onChange={(val) => {
          const newOptions = produce(slideOptions, (draft) => {
            draft.enableControl = val;
          });
          setAttributes({ slideOptions: newOptions });
        }}
      />

      <ToggleControl
        label="Pager Enabled"
        className="pagerEnabled"
        checked={slideOptions?.enablePager}
        onChange={(val) => {
          const newPager = produce(slideOptions, (draft) => {
            draft.enablePager = val;
          });
          setAttributes({ slideOptions: newPager });
        }}
      />

      <ToggleControl
        label="Auto Slideshow"
         className="autoSlide"
        checked={slideOptions?.autoSlide}
        onChange={(val) => {
          const newOptions = produce(slideOptions, (draft) => {
            draft.autoSlide = val;
          });
          setAttributes({ slideOptions: newOptions });
        }}
      />

    <div className="interval">
    <p className="custom-label">Auto Interval (ms)</p>
      <RangeControl
        value={slideOptions.intervalTime}
        onChange={(val) =>
          setAttributes({
            slideOptions: { ...slideOptions, intervalTime: val },
          })
        }
        min={1000}
        max={5000}
        step={1000}
      />
    </div>
    </div>
  );
};

export default Style;
