
import { useContext, useEffect, useState, useRef } from 'react';
import Context from '../../Context/Context';
import { createChart } from 'lightweight-charts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChartData = () => {
    const { individualData, time } = useContext(Context);
    const [candleData, setCandleData] = useState([]);
    const [linearChartData, setLinearChartData] = useState([]);

    const chartContainerRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetchCandleData();
        const intervalId = setInterval(fetchCandleData, 6000);

        return () => {
            clearInterval(intervalId);
            console.log("Interval cleared:", intervalId);
        };
    }, [individualData]);

    useEffect(() => {
        if (!chartContainerRef.current || candleData.length === 0 || linearChartData.length === 0) return;

        const formattedCandleData = formatCandleData();
        const formattedLinearChartData = formatLinearChartData();

        const chart = createChart(chartContainerRef.current, {
            layout: { textColor: 'black', background: { color: 'white' } }
        });

        const areaSeries = chart.addAreaSeries({
            lineColor: '#2962FF', topColor: '#2962FF',
            bottomColor: 'rgba(41, 98, 255, 0.28)',
        });
        areaSeries.setData(formattedLinearChartData);

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
            wickUpColor: '#26a69a', wickDownColor: '#ef5350',
        });
        candlestickSeries.setData(formattedCandleData);

        chart.timeScale().fitContent();
        return () => chart.remove();
    }, [candleData, linearChartData]);

    const fetchCandleData = () => {
        if (!individualData || !individualData.company || !individualData.company.nseScriptCode) {
            navigate('/');
            return;
        }

        axios.post('/api/candle', { time, CompanyName: individualData.company.nseScriptCode })
            .then((res) => {
                setCandleData(res.data.data.candles);
                setLinearChartData(res.data.data1.candles);
            })
            .catch((err) => {
                console.error('Error fetching candle data:', err);
            });
    };

    const formatCandleData = () => {
        const formattedData = candleData.map(candle => {
            return {
                time: new Date(candle[0] * 1000).getTime(), // Convert Unix timestamp to milliseconds
                open: candle[1],
                high: candle[2],
                low: candle[3],
                close: candle[4]
            };
        });

        formattedData.sort((a, b) => a.time - b.time);

        const CandleData = formattedData.map(candle => {
            return {
                time: new Date(candle.time).toISOString().slice(0, 10),
                open: candle.open,
                high: candle.high,
                low: candle.low,
                close: candle.close
            };
        })
        return CandleData;
    };

    const formatLinearChartData = () => {
        const linearChartDatas = linearChartData.map(candle => {
            return {
                time: new Date(candle[0] * 1000).getTime(),
                value: candle[1]
            };
        })
        linearChartDatas.sort((a, b) => a.time - b.time);
        const linearChartDatain = linearChartDatas.map(candle => {
            return {
                time: new Date(candle.time).toISOString().slice(0, 10),
                value: candle.value
            };
        })
        return linearChartDatain;
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={individualData.company.imageUrl} style={{ width: "50px", height: "50px" }} />
                <h2>{individualData.company.companyName}</h2>
            </div>
            <div ref={chartContainerRef} id="Chartcontainer" style={{ width: "100vw", height: "75vh" }}></div>
        </div>
    );
};

export default ChartData;