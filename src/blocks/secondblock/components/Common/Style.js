
const Style = ({ attributes, id, device }) => {
	const { color,width } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .wp-block-my-blocks-secondblock`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} {
			width: ${width[device]}
		}
		${blockSl} p{
			color: ${color};
		}

	`}} />;
}
export default Style;