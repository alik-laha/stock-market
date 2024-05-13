import { Request, Response } from 'express';

export const Searchdata = (req: Request, res: Response) => {

    try {
        const { searchData } = req.body
        if (searchData) {
            const encodedInput = encodeURIComponent(searchData);
            fetch(`https://groww.in/v1/api/search/v1/entity?app=false&page=0&q=${encodedInput}&se`)
                .then((res) => res.json())
                .then((data) => {
                    return res.status(200).json({ data: data })
                }).catch((err) => {
                    return res.status(400).json({ msg: "No data found" })
                })
        }
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ message: "Error Occured", err: err })
    }
}


export const HomeData = (req: Request, res: Response) => {
    const { page, size, type } = req.body
    try {
        if (!type) {
            fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=TOP_GAINERS%2CTOP_LOSERS%2CSTOCKS_IN_NEWS%2CMOST_VALUABLE&page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                    return res.status(200).json({ data: data })
                }).catch((err) => {
                    return res.status(400).json({ msg: "No data found" })
                })
        }
        else {
            let search
            if (type === "gain") {
                search = "TOP_GAINERS"
            }
            else if (type === "loser") {
                search = "TOP_LOSERS"
            }
            else if (type === "news") {
                search = "STOCKS_IN_NEWS"
            }
            else if (type === "value") {
                search = "MOST_VALUABLE"
            }
            fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=${search}&page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                    return res.status(200).json({ data: data })
                }).catch((err) => {
                    return res.status(400).json({ msg: "No data found" })
                })
        }
    } catch (err) {
        return res.status(400).json({ msg: "no data found" })
    }
}

export const Detail = (req: Request, res: Response) => {
    try {
        const data = req.params.id
        fetch(`https://groww.in/v1/api/stocks_data/v1/company/search_id/${data}?page=0&size=50`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({ data: data })
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found", err })
            })
    } catch (err) {
        return res.status(400).json({ msg: "Internal server Error" })
    }
}

export const ChartData = (req: Request, res: Response) => {
    try {
        const { time, CompanyName } = req.body
        let interval
        if (time === "weekly") {
            interval = "intervalInMinutes"
        }
        else if (time === "1y") {
            interval = "intervalInDays"
        }
        else if (time === "daily") {
            interval = "intervalInMinutes"
        }
        else if (time === "5y") {
            interval = "intervalInDays"
        }
        else if (time === "3y") {
            interval = "intervalInDays"
        }
        else if (time === "all") {
            interval = "noOfCandles"
        }
        fetch(`https://groww.in/v1/api/charting_service/v2/chart/exchange/NSE/segment/CASH/${CompanyName}/${time}?${interval}=&minimal=true`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({ data: data })
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" })
            })
    } catch (err) {
        console.log(err)
    }
}

export const TOP_GAINERS = (req: Request, res: Response) => {
    const { page } = req.body
    try {
        fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=TOP_GAINERS&page=${page}&size=21`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({ data: data })
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" })
            })
    } catch (err) {
        return res.status(400).json({ msg: "No data found" })
    }
}

export const TOP_LOSERS = (req: Request, res: Response) => {
    const { page } = req.body
    try {
        fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=TOP_LOSERS&page=${page}&size=21`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({ data: data })
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" })
            })
    } catch (err) {
        return res.status(400).json({ msg: "No data found" })
    }
}

export const STOCKS_IN_NEWS = (req: Request, res: Response) => {
    const { page } = req.body
    try {
        fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=STOCKS_IN_NEWS&page=${page}&size=21`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({ data: data })

            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" })
            })
    } catch (err) {
        return res.status(400).json({ msg: "No data found" })
    }
}
