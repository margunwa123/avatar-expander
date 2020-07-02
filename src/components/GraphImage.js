import React from 'react';
import { Graph } from "react-d3-graph";

class GraphImage extends React.Component {
    render() {
        const myConfig = {
            highlightDegree: 0,
            node: {
                color: "lightgreen",
                size: 120,
                highlightStrokeColor: "blue",
            },
            directed: true,
            height: window.innerHeight,
            width: window.innerWidth * 3 / 4,
        };

        return (
            <div>
                {this.props.graphData.nodes.length > 0 &&
                    <Graph
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        data={this.props.graphData}
                        config={myConfig}
                        onClickNode={this.props.onClickNode}
                        onDoubleClickNode={this.props.onDoubleClickNode}
                    />
                }
            </div>
        );
    }
}

export default GraphImage;