import React from 'react'
import {AccumulationChartComponent, Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import {pieChartData} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
     <Header category='Pie' title='Project Cost Breakdown'/>
     <AccumulationChartComponent
        id="pie-chart"
        legendSettings={{ visible: true }}
        tooltip={{ enable: true }}
        enableSmartLabels={true}
        background={currentMode==='Dark' ? '#33373E':'#fff'}
      >
        <Inject services={[AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            dataLabel={{
              visible: true,
              name: 'x',
              position: 'Outside',
              font: { fontWeight: '600' },
            }}
            radius="70%"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div> 
  )
}

export default Pie