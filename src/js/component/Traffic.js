import React, { useState, useEffect } from "react";

export const Traffic = () => {
	let [color, setColor] = useState("");

	let red_selected = "";
	if (color === "red") red_selected = "crossed";
	let yellow_selected = "";
	if (color === "yellow") yellow_selected = "crossed";
	let green_selected = "";
	if (color === "green") green_selected = "crossed";

	return (
		<div className="row">
			<div className="col-xs-1 col-center bg-dark">
				<div className="contenido">
					<div id="rojo">
						<button
							id={red_selected}
							className="btn btn-danger"
							onClick={() => setColor((color = "red"))}
						/>
					</div>
					<div id="naranja">
						<button
							id={yellow_selected}
							className="btn btn-warning"
							onClick={() => setColor((color = "yellow"))}
						/>
					</div>
					<div id="verde">
						<button
							className="btn btn-success"
							id={green_selected}
							onClick={() => setColor((color = "green"))}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
