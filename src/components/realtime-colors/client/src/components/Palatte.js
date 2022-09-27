import {useState} from 'react'

import {send} from "../socketApi.js"

function Palatte({activeColor}) {
	const [color, setColor] = useState("#0000");

	return (
		<div className="palette">
			<input type='color'
			value={activeColor}
			onChange={(e) => setColor(e.target.value)}
			/>
			<button onClick={() => send(color)}>Click</button>
		</div>
	)
}

export default Palatte