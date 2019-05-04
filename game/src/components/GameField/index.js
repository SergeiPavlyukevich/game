import React from 'react';
import GameFieldBlock from '../GameFieldBlock'
import circleImg from '../../assets/images/circle.jpg';

class GameField extends React.Component {
    render() {
        return (
            <div className="GameField">
                <div className="BlockFlex">
                    {this.props.blocks.map(block => {
                        return (
                            <GameFieldBlock
                                id={block.id}
                                imageUrl={block.imageUrl}
                                isOpen={block.isOpen}
                                isVisible={block.isVisible}
                                handleSelectBlock={this.props.handleSelectBlock}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default GameField;
