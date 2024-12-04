const STORAGE_KEY = 'contacts';

export const getContacts = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const saveContacts = (contacts) => localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));

export const deleteContact = (id) => {
  const contacts = getContacts().filter(contact => contact.id !== id);
  saveContacts(contacts);
};
