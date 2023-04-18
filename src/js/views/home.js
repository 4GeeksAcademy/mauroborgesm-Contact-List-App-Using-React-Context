import React, { useState, useEffect, useContext } from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import { Modal } from "../component/Modal";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { contacts, numero } = store;
  useEffect(()=>{
    actions.getAgenda();
  },[])

  return (
    <div className="d-flex flex-column justify-center">
    <div className="list-group contact-list">
      {contacts.map((contacts, index) => (
        <div key={index}>
        <ContactCard
          full_name={contacts.full_name}
          address={contacts.address}
          email={contacts.email}
          phone={contacts.phone}
          img={rigoImage}
          index={index}

        
        />
        
        <Modal/>
        </div>

        
      ))}
    </div>
  </div>
  );
};
