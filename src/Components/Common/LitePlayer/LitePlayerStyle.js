

const LitePlayerStyle = () => {
  // { attributes, id, device = "desktop" }
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        

        @media only screen and (min-width:641px) and (max-width: 1024px){
                
        }


        @media only screen and (max-width:640px){
            
        }

		`,
      }}
    />
  );
};
export default LitePlayerStyle;
