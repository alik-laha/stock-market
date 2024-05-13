import { useContext } from 'react';
import Context from '../../src/Context/Context.ts';
import { useNavigate } from 'react-router-dom';
import { newsData } from '../../Type/GlobalType.ts';
import axios from 'axios';

const ChartData = () => {
    const { individualData, setCandleData, time } = useContext(Context)

    const fetchCandaleData = () => {
        console.log(individualData)
        axios.post('/api/candle', { time, CompanyName: individualData.company.companyShortName })
            .then((res) => {
                console.log(res.data)
                setCandleData(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>Chart Data</h1>
            <button onClick={fetchCandaleData}>Fetch Data</button>
        </div>
    )

}

export default ChartData