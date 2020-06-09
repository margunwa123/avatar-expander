import React from 'react';
import { Graph } from "react-d3-graph";

class GraphImage extends React.Component {
    // shouldComponentUpdate(nextProps) {
    //     return this.props.graphData !== nextProps.graphData && nextProps.graphData !== null;
    // }

    render() {
        console.log("graph rendered");

        const myConfig = {
            nodeHighlightBehavior: true,
            node: {
                color: "lightgreen",
                size: 120,
                highlightStrokeColor: "blue",
                // labelProperty: "name",
            },
            link: {
                highlightColor: "lightblue",
            },
            directed: true,
        };

        console.log(this.props.graphData);
        return (
            <div>
                {/* {JSON.stringify(this.props.graphData)} */}
                {this.props.graphData.nodes.length > 0 &&
                    <Graph
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        data={this.props.graphData}
                        config={myConfig}
                        onClickNode={this.props.onClickNode}
                    />
                }
            </div>
        );
    }
}

export default GraphImage;