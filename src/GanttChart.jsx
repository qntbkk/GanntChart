import { Component, createElement } from "react";
import GanView from './components/GanView'
import "./ui/GanttChart.css";

class GanttChart extends Component {
    render() {
        return (
            <div>
                <GanView />
            </div>
        );
    }
}

export default GanttChart;
