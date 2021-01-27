import React, { useState, useEffect } from "react";

export const Traffic = () => {
	let [color, setColor] = useState("");

	let red_selected = "";
	if (color === "red") red_selected = "crossed";
	let yellow_selected = "";
	if (color === "yellow") yellow_selected = "selected";
	let green_selected = "";
	if (color === "green") green_selected = "selected";

	return (
		<div className="row">
			<div className="col-md-5 col-center bg-dark">
				<div id="rojo" className={red_selected}>
					<button
						className="myClass rounded-circle bg-danger"
						onClick={() => setColor((color = "red"))}
					/>
				</div>
				<div id="naranja" className={yellow_selected}>
					<button
						className="myClass rounded-circle bg-warning"
						onClick={() => setColor((color = "yellow"))}
					/>
				</div>
				<div id="verde" className={green_selected}>
					<button
						className="myClass rounded-circle bg-success"
						onClick={() => setColor((color = "green"))}
					/>
				</div>
			</div>
		</div>
	);
};
