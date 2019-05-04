import React from 'react';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSetGame: false,
            quantity: props.quantityBlock,
        };
    };

    onSetGame = () => {
        this.setState({ isSetGame: true })
    }

    onSetClose = () => {
        this.setState({ isSetGame: false })
    }

    onChangeQuantity = (event) => {
        this.setState({ quantity: event.target.value });
    }

    onOk = () => {
        const quantity = this.state.quantity;
        if (quantity < 10 || quantity > 50){
            alert("Quantity should be in range 10-50")
            return
        }
        this.props.setQuantityBlock(this.state.quantity); 
    }

    render() {
        return (
            <div>
                {this.props.isGameStart ?
                    <button className="btn-stop" onClick={this.props.onStopGame}>Stop</button>
                    :
                    <button className="btn-start" onClick={this.props.onStartGame}>Start</button>
                }
                {this.state.isSetGame ?
                    <div>
                        <button onClick={this.onSetClose} >close</button>
                        <b>quantity block</b><br />
                        <input
                            className="quantityBlock"
                            type="number"
                            onChange={this.onChangeQuantity}
                            min={10}
                            max={50}
                            value={this.state.quantity}
                        />
                        <br />
                        <button onClick={this.onOk} >OK</button>
                    </div>
                    :
                    <button className="btn-set" onClick={this.onSetGame}>Settings</button>
                }


            </div>
        );
    }
}

export default Header;