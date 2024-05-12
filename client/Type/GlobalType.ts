export type searchData = {
    analytics_label: string,
    bse_scrip_code: string,
    entity_type: string,
    expiry: Date | null,
    fund_name: string | null,
    groww_contract_id: string,
    id: string,
    isin: string,
    nse_scrip_code: string,
    scheme_code: string | null,
    scheme_name: string | null,
    scheme_search: string | null,
    search_id: string,
    search_string: string | null,
    term_page_view: number,
    tiker: null | string,
    title: string,
    underlying_search_id: string | null
}

export interface newsData {
    company: {
        bseScriptCode: string,
        companyName: string,
        imageUrl: string,
        nseScriptCode: string,
        searchId: string
        companyShortName: string,
        growwContractId: string,
        isin: string,
    },
    stats: {
        close: number,
        dayChange: number,
        dayChangePerc: number,
        high: number,
        highPriceRange: number,
        low: number,
        lowPriceRange: number,
        ltp: number,
        type: string,
    },
}