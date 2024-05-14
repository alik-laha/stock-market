import { useContext, useEffect, useState } from 'react';
import Context from '../../src/Context/Context.ts';
import { useNavigate } from 'react-router-dom';
import { createChart } from 'lightweight-charts';
import axios from 'axios';

const ChartData = () => {
    const { individualData, time } = useContext(Context);
    const navigate = useNavigate();
    const [candleData, setCandleData] = useState([]);
    const [linearChartData, setLinearChartData] = useState([]);
    const Chartcontainer = document.getElementById('container');

    useEffect(() => {
        fetchCandleData();
        const intervalId = setInterval(fetchCandleData, 6000);

        return () => {
            clearInterval(intervalId);
            console.log("Interval cleared:", intervalId);
        };
    }, [individualData]);


    useEffect(() => {
        if (Chartcontainer) {
            const chart = createChart(Chartcontainer)
            const areaSeries = chart.addAreaSeries({
                lineColor: '#2962FF', topColor: '#2962FF',
                bottomColor: 'rgba(41, 98, 255, 0.28)',
            });
            areaSeries.setData(linearChartData);
            const candlestickSeries = chart.addCandlestickSeries({
                upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
                wickUpColor: '#26a69a', wickDownColor: '#ef5350',
            });
            candlestickSeries.setData(candleData);
        }
    }, [candleData, linearChartData]);


    const fetchCandleData = () => {
        if (!individualData || !individualData.company || !individualData.company.nseScriptCode) {
            return;
        }

        axios.post('/api/candle', { time, CompanyName: individualData.company.nseScriptCode })
            .then((res) => {
                setCandleData(res.data.data.candles);
                setLinearChartData(res.data.data1.candles)
            }).catch((err) => {
                console.log(err);
            });
    };
    return (

        <div id="container">
        </div>
    );
};

export default ChartData;