export const Searchdata = (req, res) => {
    try {
        const { searchData } = req.body;
        if (searchData) {
            const encodedInput = encodeURIComponent(searchData);
            fetch(`https://groww.in/v1/api/search/v1/entity?app=false&page=0&q=${encodedInput}&se`)
                .then((res) => res.json())
                .then((data) => {
                return res.status(200).json({ data: data });
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" });
            });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error Occured", err: err });
    }
};
export const HomeData = (req, res) => {
    const { page, size, type } = req.body;
    try {
        if (!type) {
            fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=TOP_GAINERS%2CTOP_LOSERS%2CSTOCKS_IN_NEWS%2CMOST_VALUABLE&page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                return res.status(200).json({ data: data });
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" });
            });
        }
        else {
            let search;
            if (type === "gain") {
                search = "TOP_GAINERS";
            }
            else if (type === "loser") {
                search = "TOP_LOSERS";
            }
            else if (type === "news") {
                search = "STOCKS_IN_NEWS";
            }
            else {
                search = "MOST_VALUABLE";
            }
            fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=${search}&page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                return res.status(200).json({ data: data });
            }).catch((err) => {
                return res.status(400).json({ msg: "No data found" });
            });
        }
    }
    catch (err) {
        return res.status(400).json({ msg: "no data found" });
    }
};
