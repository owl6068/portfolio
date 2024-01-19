import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 *{
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 16px;
  color: inherit;
	vertical-align: baseline;
  font-family: 'Noto Sans KR', sans-serif;	
  box-sizing: border-box;
	color: #222;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		cursor: pointer;
	}
	button{
		background-color: transparent;
		border: 0;
		cursor: pointer;
	}
	img{
		border: 0;
		width: 100%;
	}
	address, em{
		font-style:normal
	}

	/* style */
	/* scroll */
	.scroll {
    width: 100%;
    height: 140px;
    overflow: auto;
  }
  .scroll::-webkit-scrollbar {
    width: 10px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  .scroll::-webkit-scrollbar-track {
    background-color: #eee;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`