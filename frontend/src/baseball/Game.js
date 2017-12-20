import React, { Component } from 'react';
import NumberSelector from './NumberSelector';
import ResultBoard from './ResultBoard';

const numberCount = 4;
const tryChance = 9;

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expectNumber: new Array(numberCount).fill(0),
            calcResult: [],
            tries: 0,
            win: false
        }
    }

    componentDidMount() {
        this.init();
    }

    init() {
        let candidate = [...Array(10).keys()];
        let expectNumber = [];
        for (let i = 0; i < numberCount; i++) {
            let rand = Math.floor(candidate.length * Math.random());
            let [ selected ] = candidate.splice(rand, 1);
            expectNumber.push(selected);
        }
        console.log(expectNumber);
        this.setState({
            expectNumber,
            calcResult: [],
            tries: 1,
            win: false
        });
    }

    checkNumber(selectNumber) {
        if (this.state.tries > tryChance || this.state.win) {
            return;
        }

        let result = {
            Strike: 0,
            Ball: 0
        };

        selectNumber.forEach((selected, idx) => {
            if (selected === this.state.expectNumber[idx]) {
                result.Strike++;
                return;
            }

            if (this.state.expectNumber.includes(selected)) {
                result.Ball++;
                return;
            }
        });

        let results = [`${this.state.tries}. ${selectNumber.join(' ')}   result: ${result.Strike}S ${result.Ball}B`];

        this.setState((prevState) => {
            return {
                calcResult: prevState.calcResult.concat(results),
                tries: prevState.tries + 1,
                win: result.Strike === prevState.expectNumber.length
            };
        });
    }

    render() {
        const GameOver = this.state.tries > tryChance ? 'GameOver!!!' : this.state.win ? 'You Win!!!' : null;
        const style = {
            margin: 'auto',
            width: '50%',
            textAlign: 'center'
        }
        return (
            <div style={style}>
                <h1>BaseBall Game</h1>
                <button onClick={() => this.init()}>Reset Game</button>
                <NumberSelector onClick={(number) => this.checkNumber(number)} numberCount={numberCount} />
                <ResultBoard results={this.state.calcResult} />
                {GameOver}
            </div>
        );
    }
}

export default Game;
