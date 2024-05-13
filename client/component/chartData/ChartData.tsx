import { useContext, useEffect, useState } from 'react';
import Context from '../../src/Context/Context.ts';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const ChartData = () => {
    const { individualData, time } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCandleData();
        const intervalId = setInterval(fetchCandleData, 6000);

        return () => {
            clearInterval(intervalId);
            console.log("Interval cleared:", intervalId);
        };
    }, [individualData]);

    const fetchCandleData = () => {
        if (!individualData || !individualData.company || !individualData.company.nseScriptCode) {
            return;
        }

        axios.post('/api/candle', { time, CompanyName: individualData.company.nseScriptCode })
            .then((res) => {
                console.log(res.data);
                setCandleData(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    };
    return (

        <div style={{ width: "100%", height: "500px" }}>
        </div>
    );
};

export default ChartData;