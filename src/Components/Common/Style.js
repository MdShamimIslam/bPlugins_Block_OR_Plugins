import { getColorsCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksTestPurpose`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} p{
			${getColorsCSS(colors)}
		}

	`}} />;
}
export default Style;