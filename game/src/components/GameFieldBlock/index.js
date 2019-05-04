import React from 'react';


class GameFieldBlock extends React.Component {

    onClick = () => {
        if (this.props.isVisible === false) {
            return;
        }
        const id = this.props.id;
        this.props.handleSelectBlock(id);
    }

    render() {
        return (
            this.props.isOpen ? (
                <div className="GameFieldBlockImage">
                    <img src={this.props.imageUrl} />
                </div>
            ) : (
                    <div
                        className={this.props.isVisible ? "GameFieldBlock" : "GameFieldBlockInvisible"}
                        onClick={this.onClick}
                        style={{background: 'red' }}
                    ></div>
                )
        );
    }
}

export default GameFieldBlock;