import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Noto+Sans+KR:wght@400;500;600;700;800;900&display=swap');

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
`