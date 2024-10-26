
const Style = ({ attributes, id }) => {
	const { color } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksSecondBlock`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} p{
			color:${color};
		}

	`}} />;
}
export default Style;