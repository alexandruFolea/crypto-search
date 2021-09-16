import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from './Coin';
import './style/main.scss';

function App() {
	const URL =
		'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const getData = () => {
		axios.get(URL).then((res) => {
			setCoins(res.data);
		});
	};

	useEffect(() => {
		try {
			getData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className='app'>
			<div className='wrapper'>
				<div className='coin-search'>
					<h1 className='coin-text'>Crypto Search</h1>
					<form>
						<input
							type='text'
							placeholder='Search'
							className='coin-input'
							onChange={handleChange}
						/>
					</form>
				</div>
				{filteredCoins.map((coin) => {
					return (
						<Coin
							key={coin.id}
							name={coin.name}
							image={coin.image}
							symbol={coin.symbol}
							marketcap={coin.market_cap.toLocaleString()}
							volume={coin.total_volume.toLocaleString()}
							price={coin.current_price.toLocaleString()}
							priceChange={coin.price_change_percentage_24h.toFixed(2)}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default App;
