const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: []
		},
		actions: {
			addContact: (contact) => {
				const store = getStore(); 
				const contactList = [...store.contactList, contact];
				setStore({...store, contactList})
			},
			updateContactList: (contactList) => {
				const store = getStore(); 
				setStore({...store, contactList});
			}
		}
	};
};

export default getState;
