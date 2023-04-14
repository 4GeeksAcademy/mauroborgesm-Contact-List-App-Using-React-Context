import rigoImage from "../../img/rigo-baby.jpg"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", telephone: "+50688416548"},
				{name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", telephone: "+50688416548"},
				{name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", telephone: "+50688416548"}
			],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			addContact: (contact) => {
				let store=getStore()
				let newContacts=[...store.contacts, contact]
				setStore({contacts:newContacts})
			},
			onDelete: (index) => {
				let newContacts=[...getStore().contacts]
				newContacts.splice(index,1)
				setStore({contacts:newContacts})
			},
			editContact: (index, obj) => {
				 console.log(index) 
				 console.log (obj) 
				 let store = getStore() 
				 let arrTemp =[...store.contacts];
				arrTemp [index] = obj;
				setStore({ ...store, contacts: arrTemp });
			},
			
		}
	};
};

export default getState;
