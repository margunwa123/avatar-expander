import React from 'react';

class Graph extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    shouldComponentUpdate(nextProps) {
        return this.props.reply !== nextProps.reply && nextProps.reply !== null;
    }

    render() {
        console.log("hehe");
        return (
            <div>
                {JSON.stringify(this.props.reply)}
            </div>
        );
    }
}

export default Graph;