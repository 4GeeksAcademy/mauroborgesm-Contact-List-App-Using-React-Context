import rigoImage from "../../img/rigo-baby.jpg"
const apiURL=process.env.API_URL
const agendaSLug=process.env.AGENDA_SLUG
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[
				{full_name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", phone: "+50688416548"},
				{full_name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", phone: "+50688416548"},
				{full_name: "Mauro", address: "Costa Rica", email:"mauroborgesm@gmail.com", phone: "+50688416548"}
			],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			addContact: async (contact) => {
				let response = await fetch(apiURL + "/", {
					body:JSON.stringify(contact),
					method:"POST",
					headers:{
						"Content-type":"aplication/json"
					}
					
				});
				if (!response.ok){
					console.log(response.status + ": "+ response.statusText)
					return
					}
				let store=getStore()
				let newContacts=[...store.contacts, contact]
				setStore({contacts:newContacts})
			},
			onDelete: (index) => {
				let newContacts=[...getStore().contacts]
				newContacts.splice(index,1)
				setStore({contacts:newContacts})
			},
			editContact: (obj, index) => {
				 console.log(index) 
				 console.log (obj) 
				 let store = getStore() 
				 let arrTemp =[...store.contacts];
				arrTemp [index] = obj;
				setStore({ ...store, contacts: arrTemp });
			},
			getAgenda: () => {
				fetch (apiURL + "/agenda/" + agendaSLug)
				.then(response =>{
					console.log(response.ok)
					if(response.ok){
						return response.json()
					}else{
						console.log(response.status+":"+response.statusText)
					}
				})
				.then(data=>{
					console.log(data)
					setStore({contacts:data})
				})
				.catch(error=>{

				})
				console.log("Iniciada la peticion")
			}
			
		}
	};
};

export default getState;
