import React from 'react';

class ResultBoard extends React.Component {
    render() {
        return (
            <div>
                <h2>Result</h2>
                {this.props.results.map((result, idx) => {
                    return (<li key={idx}>{result}</li>);
                })}
            </div>
        );
    }
}

export default ResultBoard;
