import React from 'react';
import NumberPanel from './NumberPanel';

class NumberSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectNumber: new Array(props.numberCount).fill(0)
        }
    }

    handleClick(idx, add) {
        const selectNumber = this.state.selectNumber.slice();
        selectNumber[idx] += add;
        if (selectNumber[idx] < 0) {
            selectNumber[idx] += 10;
        }

        selectNumber[idx] %= 10;
        this.setState({ selectNumber });
    }

    render() {
        const selector = this.state.selectNumber.map((value, idx) => {
            return <NumberPanel
                key={idx}
                value={value}
                onUpClick={() => this.handleClick(idx, 1)}
                onDownClick={() => this.handleClick(idx, -1)} />;
        });

        const NumberSelectorStyle = {
            display: '-webkit-inline-box',
            margin: 'auto'
        }

        return (
            <div>
                <div style={NumberSelectorStyle}>
                    {selector}
                </div>
                <button onClick={() => this.props.onClick(this.state.selectNumber)}>Submit</button>
            </div>
        );
    }
}

export default NumberSelector;
