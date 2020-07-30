import React, {Component, createElement} from 'react';
import '../ui/GanttChart.css';
import { GanttComponent, Inject, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from '../components/data';
import { SampleBase } from '../components/sample-base';
class GanView extends SampleBase {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.labelSettings = {
            leftLabel: 'TaskName'
        };
        this.projectStartDate = new Date('03/24/2019');
        this.projectEndDate = new Date('07/06/2019');
    }
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <GanttComponent id='Default' dataSource={projectNewData} taskFields={this.taskFields} labelSettings={this.labelSettings} height='410px' projectStartDate={this.projectStartDate} projectEndDate={this.projectEndDate}>
            <Inject services={[Selection]}/>
          </GanttComponent>
        </div>

      </div>);
    }
}

export default GanView;