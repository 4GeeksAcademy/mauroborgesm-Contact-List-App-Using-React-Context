import React, { useState, useEffect,  useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard";


export const Modal = props => {
	const {store,actions}=useContext(Context)
	const [name, setName] = useState(props.name);
	const [email, setEmail] = useState(props.email);
	const [telephone, setTelephone] = useState(props.telephone);
	const [address, setAddress] = useState(props.address);
	return (
		<>	
		<div className="modal" id="editContact" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label for="formGroupExampleInput">Name</label>
								<input type="text" className="form-control" id="{props.name}" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
							</div>
							<div className="form-group">
								<label for="formGroupExampleInput2">email</label>
								<input type="text" className="form-control" id="{props.email}" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
							</div>
							<div className="form-group">
								<label for="formGroupExampleInput2">phone</label>
								<input type="text" className="form-control" id="{props.telephone}" value={telephone} onChange={(e)=>setTelephone(e.target.value)} placeholder="phone"/>
							</div>
							<div className="form-group">
								<label for="formGroupExampleInput2">address</label>
								<input type="text" className="form-control" id="{props.address}" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="address"/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button " onClick={()=>close} className="btn btn-primary" data-bs-dismiss="modal">
							Cancelar
						</button>
						<button type="button" onClick={() => actions.editContact(props.index,{name: name, address: address, email: email, telephone: telephone})} className="btn btn-secondary" data-dismiss="modal">
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	address: PropTypes.string,
	name:PropTypes.string,
	telephone: PropTypes.string,
	email:PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};