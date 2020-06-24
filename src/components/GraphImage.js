import React from 'react';
import { Graph } from "react-d3-graph";

class GraphImage extends React.Component {
    render() {
        console.log("graph rendered");

        const myConfig = {
            highlightDegree: 0,
            node: {
                color: "lightgreen",
                size: 120,
                highlightStrokeColor: "blue",
                // labelProperty: "name",
            },
            directed: true,
            height: 800,
            width: 900,
        };

        console.log(this.props.graphData);
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