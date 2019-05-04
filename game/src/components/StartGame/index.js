import React from 'react';
import GameField from '../GameField';
import Header from '../Header';
import { generateData } from '../../helpers/dataGenerator';

export default class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameData: [],
            isGameStart: false,
            quantityBlock: 12,
        };
    };

    onStartGame = () => {
        const gameData = generateData(this.state.quantityBlock);
        this.setState({ gameData: gameData, isGameStart: true, });
    }

    setQuantityBlock = (value) => {
        this.setState({ quantityBlock: value });
    }

    handleSelectBlock = (id) => {
        const gameData = this.state.gameData;
        const newGameData = [];
        for (let i = 0; i < gameData.length; i++) {
            if (gameData[i].id === id) {
                newGameData.push({
                    id: gameData[i].id,
                    imageUrl: gameData[i].imageUrl,
                    isVisible: gameData[i].isVisible,
                    isOpen: true,
                });
            } else {
                newGameData.push(gameData[i]);
            }
        }
        this.setState({ gameData: newGameData });
        this.checkSelectedBlocks(newGameData);
    }

    checkSelectedBlocks = (gameData) => {
        const filteredArray = gameData.filter(block => block.isOpen);
        if (filteredArray.length === 2) {
            if (filteredArray[0].imageUrl === filteredArray[1].imageUrl) {
                const newGameData = gameData.map(block => {
                    if (block.id === filteredArray[0].id || block.id === filteredArray[1].id) {
                        return { id: block.id, imageUrl: block.imageUrl, isOpen: false, isVisible: false };
                    }
                    return block;
                });
                setTimeout(() => {
                    this.setState({ gameData: newGameData });
                }, 500);
            } else {
                const newGameData = gameData.map(block => {
                    return { id: block.id, imageUrl: block.imageUrl, isOpen: false, isVisible: block.isVisible };
                });
                setTimeout(() => {
                    this.setState({ gameData: newGameData });
                }, 500);
            }
        }
    }

    onStopGame = () => {
        this.setState({ gameData: [], isGameStart: false });
    }

    render() {
        return (
            <div className="StartGame">
                <Header onStartGame={this.onStartGame} onStopGame={this.onStopGame} isGameStart={this.state.isGameStart} quantityBlock={this.state.quantityBlock} setQuantityBlock={this.setQuantityBlock} />
                {this.state.isGameStart ? <GameField blocks={this.state.gameData} handleSelectBlock={this.handleSelectBlock} /> : null}

            </div>
        );
    }
}