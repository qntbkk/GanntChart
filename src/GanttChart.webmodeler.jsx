import { Component, createElement } from "react";


export class preview extends Component {
    render() {
        return (
            <div>
                <GanView />
            </div>
        );
    }
}

export function getPreviewCss() {
    return require("./ui/GanttChart.css");
}
