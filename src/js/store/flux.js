import rigoImage from "../../img/rigo-baby.jpg"
const apiURL=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG
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
				console.log(JSON.stringify({...contact, agenda_slug : agendaSlug}))
				let response = await fetch(apiURL, {
					body:JSON.stringify({...contact, agenda_slug : agendaSlug}),
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					}
					
				});
				if (!response.ok){
					console.log(response.status + ": "+ response.statusText)
					return
					}
					let data = await response.json()
				let store=getStore()
				let newContacts=[...store.contacts,{...contact, id:data.id}]
				setStore({contacts:newContacts})
			},
			onDelete: (id) => {
				fetch(apiURL+id,{
					method: "DELETE"
				}).then(resp=>{
					if (resp.ok){
						let newContacts=[...getStore().contacts]
				let index=newContacts.findIndex(contact=>contact.id==id)
				newContacts.splice(index,1)
				setStore({contacts:newContacts})
					}else{
						console.error(resp.status +": " + resp.statusText)
					}
				}).catch(error)
				
			},
			updateContact: async(data, id)=>{
				console.log(id);
					let response = await fetch(apiURL+ id, {
						body: JSON.stringify({...data, agenda_slug: agendaSlug}),
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (response.ok){
						let newContacts = [...getStore().contacts]
						let index = newContacts.findIndex(contact=>contact.id == id)
						console.log(index)
						newContacts[index] = {...data,id}
						setStore({...getStore(), contacts:newContacts})
					} else {
						console.error(response.status + "/ " + response.statusText);
					}
			},
			// editContact: (obj, index) => {
			// 	 console.log(index) 
			// 	 console.log (obj) 
			// 	 let store = getStore() 
			// 	 let arrTemp =[...store.contacts];
			// 	arrTemp [index] = obj;
			// 	setStore({ ...store, contacts: arrTemp });
			// },
			getAgenda: () => {
				fetch (apiURL + "/agenda/" + agendaSlug)
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
