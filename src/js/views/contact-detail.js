import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const ContactDetail = () => {
  const { contactId } = useParams();
  const { store, actions } = useContext(Context);
  const [contact, updateContact] = useState({ id: null, name: '' });
  const [name, updateName] = useState(''); 

  useEffect(() => {
    const [contactFiltered] = store.contactList.filter(
      (contact) => `${contact.id}` === contactId);
    updateContact(contactFiltered);
  }, []);

  const update = () => {
    const contactList = store.contactList.map(contactItem => {
      if(`${contactItem.id}` === contactId) {
        return {id: contactItem.id, name }
      }
      return contactItem; 
    });
    actions.updateContactList(contactList);
    updateName(''); 
  }

  return (
    <>
      <h1>{contact.name}</h1>
      <input type='text' placeholder='new name' value={name} onChange={(e) => updateName(e.target.value)}/>
      <button onClick={update}>Actualizar nombre</button>
    </>
  );
};

export default ContactDetail;