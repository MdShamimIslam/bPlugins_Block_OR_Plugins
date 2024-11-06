import { useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import { produce } from 'immer';

import { BplMediaPlaceholder } from '../../../../Components';
import { tabController } from '../../../../Components/utils/functions';

import Settings from './Settings/Settings';
import Style from '../Common/Style';

const Edit = props => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const { items, columns, layout, content, icon, img } = attributes;

	useEffect(() => tabController(), [isSelected]);

	const [activeIndex, setActiveIndex] = useState(0);

	const updateItem = (type, val, childType = false) => {
		const newItems = produce(items, draft => {
			if (childType) {
				draft[activeIndex][type][childType] = val;
			} else {
				draft[activeIndex][type] = val;
			}
		});
		setAttributes({ items: newItems });
	}

	return <>
		<Settings {...{ attributes, setAttributes, updateItem, activeIndex, setActiveIndex }} />

		<div {...useBlockProps()}>
			<Style attributes={attributes} id={`block-${clientId}`} />

			<div className={`bBlocksBlockName columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile} ${layout || 'vertical'}`}>
				{items?.map((item, index) => {
					const { number, text } = item;

					return <div key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'bBlocksNowEditing' : ''}`} id={`bBlocksBlockNameItem-${index}`}>
						<div className='bBlocksBlockNameItem'>
							<span className='number'>{number}</span>
							<span className='text'>{text}</span>
						</div>
					</div>;
				})}

				<RichText className='content' tagName='p' value={content} onChange={val => setAttributes({ content: val })} placeholder={__('Write Content', 'textdomain')} inlineToolbar />

				{img?.url ?
					<img src={img?.url} alt={img?.alt} /> :
					<BplMediaPlaceholder onChange={val => setAttributes({ img: val })} icon='format-image' type='image' />}

				{icon?.class && <i className={`icon ${icon?.class}`}></i>}

				<span className='separator'></span>
			</div>
		</div>
	</>;
}
export default Edit;