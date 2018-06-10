import { h, Component } from "preact";
import "./style.scss";

export default class CustomComponent extends Component {
    
    render(props) {
        return (
            <div className="custom-component">Custom Component</div>
        );
    }
}