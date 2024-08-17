import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, SelectControl, __experimentalUnitControl as UnitControl, RangeControl } from '@wordpress/components';
import { BColor, BorderControl, Label, MultiShadowControl, Typography, ColorsControl } from '../../../../../../Components';
import { Device } from '../../../../../../Components/Device/Device';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../../BBoxControl/BBoxControl';
import { musicAlignOptions } from '../../../../utils/options';
import { produce } from 'immer';
import { perUnit, pxUnit } from '../../../../../../Components/utils/options';
import { Tab } from './Tab';


const Styles = ({ attributes, setAttributes, device }) => {
    const { style, options } = attributes;
    const { textSl, rangeSl } = options;
    const { align, musicSlider, musicTitle, musicName, rangeInput, rangeThumb, controlsBtn } = style;
    const { sliderWidth, sliderHeight, border, overlayBg } = musicSlider;
    const { width, height, bg, progressBg, timeBg, radius, margin, } = rangeInput;
    const { thumbWidth, thumbBg, thumbShadow, thumbOutline, } = rangeThumb;

    return (
        <>
            <PanelBody className='bPlPanelBody' title={__('Audio Player Wrapper', 'mp3player-block')}>
                <PanelRow>
                    <Label>{__('Alignment', 'b-blocks')}</Label>
                    <Device />
                </PanelRow>
                <SelectControl
                    value={align[device]}
                    options={musicAlignOptions}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'align', device) })}
                />

                <PanelRow>
                    <Label>{__('Width', 'b-blocks')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={style.width[device]}
                    units={[pxUnit(), perUnit()]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, "width", device) })}
                />

                <PanelRow>
                    <Label>{__('Height', 'b-blocks')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={style.height[device]}
                    units={[pxUnit(), perUnit()]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, "height", device) })}
                />

                <BColor
                    label={__('Background', 'mp3player-block')}
                    value={style.bg}
                    onChange={v => setAttributes({ style: updateData(style, v, "bg") })}
                />

                <BorderControl
                    label={__('Border', 'mp3player-block')}
                    value={style.border}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'border') })}
                    defaults={{ radius: "5px" }}
                />

            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Audio Slider', 'mp3player-block')} initialOpen={false} >

                <PanelRow>
                    <Label>{__('Width', 'b-blocks')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={sliderWidth[device]}
                    units={[pxUnit(), perUnit()]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, "musicSlider", 'sliderWidth', device) })}
                />

                <PanelRow>
                    <Label>{__('Height', 'b-blocks')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={sliderHeight[device]}
                    units={[pxUnit(), perUnit()]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, "musicSlider", 'sliderHeight', device) })}
                />

                <BColor
                    label={__('Overlay Background', 'mp3player-block')}
                    value={overlayBg}
                    onChange={v => setAttributes({ style: updateData(style, v, "musicSlider", "overlayBg") })}
                />

                <BorderControl
                    label={__('Border', 'mp3player-block')}
                    value={border}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'musicSlider', 'border') })}
                    defaults={{ radius: "5px" }}
                />

            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Audio Player', 'mp3player-block')} initialOpen={false}>
                <Tab
                    options={["title", "sub-title"]}
                    value={textSl}
                    onChange={v => setAttributes({ options: updateData(options, v, "textSl") })}
                />

                {textSl === 'title' ?
                    <>
                        <BColor
                            label={__('Color', 'mp3player-block')}
                            value={musicTitle.color}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicTitle', "color") })}
                        />
                        <Typography
                            label={__('Typography', 'mp3player-block')}
                            value={musicTitle.typo}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicTitle', "typo") })}
                            defaults={{ fontSize: 30 }}
                        />
                    </> : <>
                        <BColor
                            label={__('Color', 'mp3player-block')}
                            value={musicName.color}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicName', "color") })}
                        />
                        <RangeControl
                            className='mt5'
                            label={__('Opacity', 'mp3player-block')}
                            value={musicName.opacity}
                            allowReset
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicName', "opacity") })}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                        <Typography
                            label={__('Typography', 'mp3player-block')}
                            value={musicName.typo}
                            onChange={v => setAttributes({ style: updateData(style, v, 'musicName', "typo") })}
                            defaults={{ fontSize: 20 }}
                        />

                    </>
                }
                <p className='mt15'>For Range of Progress </p>
                <Tab
                    options={["Input", "Thumb"]}
                    value={rangeSl}
                    onChange={v => setAttributes({ options: updateData(options, v, "rangeSl") })}
                />
                {rangeSl === 'input' ?
                    <>
                        <BColor
                            label={__('Static Background', 'mp3player-block')}
                            value={bg}
                            onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "bg") })}
                        />
                        <BColor
                            label={__('Progress Background', 'mp3player-block')}
                            value={progressBg}
                            onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "progressBg") })}
                        />
                        <BColor
                            label={__('Progress Time Color', 'mp3player-block')}
                            value={timeBg}
                            onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "timeBg") })}
                        />

                        <PanelRow>
                            <Label>{__('Width', 'mp3player-block')}</Label>
                            <Device />
                        </PanelRow>
                        <UnitControl
                            value={width[device]}
                            units={[pxUnit(), perUnit()]}
                            onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeInput', 'width', device) })}
                        />

                        <PanelRow>
                            <Label>{__('Height', 'mp3player-block')}</Label>
                            <Device />
                        </PanelRow>
                        <UnitControl
                            value={height[device]}
                            units={[pxUnit(), perUnit()]}
                            onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeInput', 'height', device) })}
                        />

                        <PanelRow>
                            <Label>{__('Margin', 'mp3player-block')}</Label>
                            <Device />
                        </PanelRow>
                        <BBoxControl
                            label=""
                            values={margin[device]}
                            units={[pxUnit(), perUnit()]}
                            onChange={v => setAttributes({
                                style: produce(style, draft => {
                                    draft.rangeInput.margin[device] = v;
                                })
                            })}
                        />

                        <RangeControl
                            label={__('Border radius', 'mp3player-block')}
                            value={radius}
                            allowReset
                            onChange={v => setAttributes({ style: updateData(style, v, 'rangeInput', "radius") })}
                            min={0}
                            max={20}
                        />

                    </> : <>
                        <BColor
                            label={__('Background', 'mp3player-block')}
                            value={thumbBg}
                            onChange={v => setAttributes({ style: updateData(style, v, 'rangeThumb', "thumbBg") })}
                        />

                        <PanelRow>
                            <Label>{__('Width', 'mp3player-block')}</Label>
                            <Device />
                        </PanelRow>
                        <UnitControl
                            value={thumbWidth[device]}
                            units={[pxUnit(), perUnit()]}
                            onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeThumb', 'thumbWidth', device) })}
                        />
                        <MultiShadowControl
                            className='mt15'
                            label={__('Shadow', 'mp3player-block')}
                            value={thumbShadow}
                            onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeThumb', 'thumbShadow') })}
                        />

                        <BorderControl
                            label={__('Outline', 'mp3player-block')}
                            value={thumbOutline}
                            onChange={(v) => setAttributes({ style: updateData(style, v, 'rangeThumb', 'thumbOutline') })}
                            defaults={{ radius: "50%" }}
                        />
                    </>
                }



            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Audio Controls Button', 'mp3player-block')} initialOpen={false}>

                <PanelRow>
                    <Label>{__('Width', 'mp3player-block')}</Label>
                    <Device />
                </PanelRow>
                <UnitControl
                    value={controlsBtn.width[device]}
                    units={[pxUnit(), perUnit()]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, "controlsBtn", "width", device) })}
                />

                <ColorsControl
                    label={__('Colors', 'mp3player-block')}
                    value={controlsBtn.colors}
                    onChange={(v) => setAttributes({ style: updateData(style, v,"controlsBtn", 'colors') })}
                    defaults={{ color: "white", bg: "rgba(163, 162, 164, 0.3)" }}
                />

                <BorderControl
                    label={__('Border', 'mp3player-block')}
                    value={controlsBtn.border}
                    onChange={(v) => setAttributes({ style: updateData(style, v, "controlsBtn", 'border') })}
                    defaults={{ radius: "50%" }}
                />

            </PanelBody>
        </>
    )
}

export default Styles