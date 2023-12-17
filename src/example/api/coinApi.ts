const BASICURL = 'https://api.coingecko.com/api/v3/coins';

export function getCoinsApi () {
  return  fetch(`${BASICURL}/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1
`).then((response) => response.json())
}

export function getCoinApi (id:string) { 
  return fetch(`${BASICURL}/${id}`).then((response) => response.json());
}

export function getCoinChartApi (id:string) {
  return fetch(`${BASICURL}/${id}/ohlc?vs_currency=usd&days=7`).then((response) => response.json());
}