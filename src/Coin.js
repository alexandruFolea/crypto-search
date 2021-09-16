import React from 'react';

const Coin = ({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	marketcap,
}) => {
	return (
		<div className='coin-container'>
			<div className='coin-row'>
				<div className='coin'>
					<img src={image} alt='crypto' />
					<h1>{name}</h1>
					<p className='coin-symbol'>
						<span>sym: </span>
						{symbol}
					</p>
				</div>
				<div className='coin-data'>
					<div className='coin-price'>
						<p>
							<span>Price: </span>${price}
						</p>
						{priceChange < 0 ? (
							<p className='coin-percent red'>{priceChange}%</p>
						) : (
							<p className='coin-percent green'>{priceChange}%</p>
						)}
					</div>
					<div className='coin-info'>
						<p className='coin-volume'>
							<span>Volume: $</span>
							{volume}
						</p>
						<p className='coin-marketcap'>
							<span>Mkt Cap: $</span>
							{marketcap}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coin;
