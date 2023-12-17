export interface ICoins{
  id:string,
  symbol:string,
  name:string,
  image: string,
  current_price: number,
  market_cap:number,
  market_cap_rank: number,
  fully_diluted_valuation:number,
  total_volume: number,
  high_24h:number,
  low_24h:number,
  price_change_24h:number,
  price_change_percentage_24h:number,
  market_cap_change_24h:number,
  market_cap_change_percentage_24h:number,
  circulating_supply:number,
  total_supply:number,
  max_supply: number,
  ath:number,
  ath_change_percentage:number,
  ath_date:string,
  atl:number,
  atl_change_percentage:number,
  atl_date:string,
  roi: null,
  last_updated: string,

}
export interface ICoin {
  id : string,
  symbol : string,
  name : string,
  web_slug : string,
  asset_platform_id : object,
  platforms : object,
  detail_platforms : object,
  block_time_in_minutes : number,
  hashing_algorithm : string,
  categories : object,
  preview_listing : boolean,
  public_notice : object,
  additional_notices : object,
  localization : object,
  description : {
    ko:string,
    en:string
  },
  links : object,
  image : {
    larget:string,
    small:string,
    thumb:string,
  },
  country_origin : string,
  genesis_date : string,
  sentiment_votes_up_percentage : number,
  sentiment_votes_down_percentage : number,
  watchlist_portfolio_users : number,
  market_cap_rank : number,
  market_data : object,
  community_data : object,
  developer_data : object,
  status_updates : object,
  last_updated : string,
  tickers : object
}

export interface IChart {
  chart:[]
}

