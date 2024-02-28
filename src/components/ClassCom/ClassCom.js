import React from "react";
class CheckItem extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            gadget: 'Mobile'
        }
    }
    handleSwitch = () => {
        this.setState({ gadget: 'Laptop' })
    };
    render() {
        return (
            <div>
                <h1>Purchease {this.state.gadget}</h1>
                <button onClick={this.handleSwitch}>Switch to Laptop</button>
            </div>
        )
    }
}
export default CheckItem