import React, { useState, useEffect,  useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { ContactCard } from "./ContactCard";


export const Modal = props => {
	const {store,actions}=useContext(Context)
	const [name, setName] = useState(props.name||"");
	const [email, setEmail] = useState(props.email||"");
	const [telephone, setTelephone] = useState(props.telephone||"");
	const [address, setAddress] = useState(props.address||"");

	function guardar(){
		let newContact={
			name:name,
			email:email,
			telephone:telephone,
			address:address
		}
		if (props.index == -1) {
			// Crear nuevo contacto
			actions.addContact(newContact)
		} else if (props.index >= 0) {
			// Editar contacto
			actions.editContact(newContact,props.index)
		} 
	}
	return (
		<>	
		
		<div className="modal" id={"editmodal"+props.index} tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
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
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						)}
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label htmlFor="formGroupExampleInput">Name</label>
								<input type="text" className="form-control" id="formGroupExampleInput" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
							</div>
							<div className="form-group">
								<label htmlFor="formGroupExampleInput2">email</label>
								<input type="text" className="form-control" id="formGroupExampleInput2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
							</div>
							<div className="form-group">
								<label htmlFor="formGroupExampleInput2">phone</label>
								<input type="text" className="form-control" id="formGroupExampleInput2" value={telephone} onChange={(e)=>setTelephone(e.target.value)} placeholder="phone"/>
							</div>
							<div className="form-group">
								<label htmlFor="formGroupExampleInput2">address</label>
								<input type="text" className="form-control" id="formGroupExampleInput2" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="address"/>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button " onClick={()=>close} className="btn btn-primary" data-bs-dismiss="modal">
							Cancelar
						</button>
						<button type="button" onClick={guardar} className="btn btn-secondary"  data-bs-dismiss="modal">
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