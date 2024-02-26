import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpened(false);
    setCurrentContact({});
  };

  const openCreateModal = () => {
    if (!isModalOpened) setIsModalOpened(true);
  };

  const openEditModal = (contact) => {
    if (isModalOpened) return;
    setCurrentContact(contact);
    setIsModalOpened(true);
  };

  const onUpdate = () => {
    closeModal();
    fetchContacts();
  };

  return (
    <>
      <ContactList
        contacts={contacts}
        updateContact={openEditModal}
        updateCallback={onUpdate}
      />
      <button onClick={openCreateModal}>Create New Contact</button>
      {isModalOpened && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <ContactForm
              existingContact={currentContact}
              updateCallback={onUpdate}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
