import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Modal } from "./Modal";


export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});

		
	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={props.img} alt="{props.name}" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" data-bs-toggle="modal" data-bs-target="#editContact">

							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button className="btn" onClick={() => actions.onDelete(props.index)}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="{props.telephone}"
					/>
					<span className="text-muted small">{props.telephone}</span>
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
          name={props.name}
          address={props.address}
          email={props.email}
          telephone={props.telephone}
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
	name: PropTypes.string,
	email: PropTypes.string,
	telephone: PropTypes.string,
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

