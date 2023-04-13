import rigoImage from "../../img/rigo-baby.jpg"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", telephone: "+50688416548"},
				{name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", telephone: "+50688416548"},
				{name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", telephone: "+50688416548"}
			]
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
			editContact: (index) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
