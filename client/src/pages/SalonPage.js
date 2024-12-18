// client/src/pages/SalonPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getSalonDetails, getSalonCompanies } from '../services/api';

export default function SalonPage() {
  const { id } = useParams();
  const [salon, setSalon] = useState(null);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // getSalonDetails(id).then(data=>setSalon(data));
    setSalon({
      id,
      nom:'Salon Emploi Paris',
      date_debut:'2024-12-10',
      date_fin:'2024-12-12',
      lieu:'Paris Expo'
    });
    // getSalonCompanies(id).then(data=>setCompanies(data));
    setCompanies([
      { id:501, nom:'Entreprise A', secteur:'IT' },
      { id:502, nom:'Entreprise B', secteur:'Finance' }
    ]);
  }, [id]);

  return (
    <div>
      {salon ? (
        <>
          <h1>{salon.nom}</h1>
          <p>Lieu : {salon.lieu}</p>
          <p>Dates : {salon.date_debut} - {salon.date_fin}</p>
          <h2>Entreprises présentes</h2>
          <ul>
            {companies.map(c => (
              <li key={c.id}>{c.nom} - Secteur: {c.secteur}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Chargement du salon...</p>
      )}
    </div>
  );
}
