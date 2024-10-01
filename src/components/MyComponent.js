
import React, {Fragment} from "react";
import './MyComponent.scss';

class MyComponent extends React.Component{
    render(){
        return <div className="myclass">
            {
                [1,2,3,4,5].map(n => <p key={n}>{n}</p>)
            }
        </div>
    }
}
 
export default MyComponent;