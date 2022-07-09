import React, { useState, useEffect, useCallback } from 'react';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from 'react-fusioncharts';
import schema from './schema';
import config from '../../config';
import axios from 'axios';

const { api } = config;

ReactFC.fcRoot(FusionCharts, TimeSeries);
const chart_props = {
	timeseriesDs: {
		type: 'timeseries',
		width: '1200',
		height: '800',
		dataEmptyMessage: 'Fetching data...',
		dataSource: {
			data: null,
			yAxis: [
				{
					plot: [
						{
							value: 'Temperatures (°F)',
						},
					],
				},
			],
		},
	},
};

function Chart() {
	const [ds, setds] = useState(chart_props);

	const loadData = useCallback(async () => {
		try {
			const data = await axios(api.weatherBaseUrl).then((res) => res.data);
			const fusionTable = new FusionCharts.DataStore().createDataTable(
				data,
				schema
			);
			const options = { ...ds };
			options.timeseriesDs.dataSource.data = fusionTable;
			setds(options);
		} catch (err) {
			console.log(err);
		}
	}, []);

	useEffect(() => {
		loadData();
	}, [loadData]);

	return (
		<div className="d-flex justify-content-center mt-5">
			<div className="flex-col">
				<h1 className="text-sm-center mb-3">
					Average Temperature's Time Series Graph In Surabaya
				</h1>
				<ReactFC {...ds.timeseriesDs} />
			</div>
		</div>
	);
}

export default Chart;
