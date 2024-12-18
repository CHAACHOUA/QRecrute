// client/src/pages/OrganizerDashboard.js
import React, { useEffect, useState } from 'react';
// import { getOrganizerSalons, addCoOrganizer, addCompanyToSalon } from '../services/api';

export default function OrganizerDashboard() {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    // Exemple : appel à l’API pour récupérer les salons de l’organisateur
    // getOrganizerSalons().then(data => setSalons(data));
    // Pour l’exemple, liste statique :
    setSalons([
      { id: 10, nom: 'Salon Ingénieurs', type: 'prive' },
      { id: 11, nom: 'Salon Commercial', type: 'public' }
    ]);
  }, []);

  function handleAddCoOrganizer(salonId) {
    // addCoOrganizer(salonId, coOrganizerEmail)...
    alert(`Ajouter un co-organisateur au salon ${salonId}`);
  }

  function handleAddCompany(salonId) {
    // addCompanyToSalon(salonId, companyEmail)...
    alert(`Ajouter une entreprise au salon ${salonId}`);
  }

  return (
    <div>
      <h1>Organizer Dashboard</h1>
      <h2>Mes Salons</h2>
      <ul>
        {salons.map(salon => (
          <li key={salon.id}>
            {salon.nom} ({salon.type}) 
            <button onClick={() => handleAddCoOrganizer(salon.id)}>+ Co-Organisateur</button>
            <button onClick={() => handleAddCompany(salon.id)}>+ Entreprise</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
