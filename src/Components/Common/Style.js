const Style = ({ attributes, id, device='desktop' }) => {
	const { slideOptions } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksContentSlider`;
	// const wrapperSl = `${blockSl} .bx-wrapper`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} {
          width: ${slideOptions?.width[device]};
		}
          
        @media only screen and (min-width:641px) and (max-width: 1024px){
            ${blockSl} {
                width: ${slideOptions?.width['tablet']};
            }
        }

        @media only screen and (max-width:640px){
            ${blockSl} {
                width: ${slideOptions?.width['mobile']};
            }
        }

	`}} />;
}
export default Style;