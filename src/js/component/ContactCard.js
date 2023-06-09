import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Modal } from "./Modal";


export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
	
	});
	


		
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={props.img} alt="{props.full_name}" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" data-bs-toggle="modal" data-bs-target={"#editmodal"+props.index}>

							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => actions.onDelete(props.index)}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="{props.phone}"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
			</div>
			<Modal
          full_name={props.full_name}
          address={props.address}
          email={props.email}
          phone={props.phone}
          img={props.img}
          index={props.index}
        />
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	img: PropTypes.string,
	address: PropTypes.string,


};

/**
 * Define the default values for
 * your component's properties
 **/
//ContactCard.defaultProps = {
//	onDelete: null
//};

