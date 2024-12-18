// client/src/pages/CompanyDashboard.js
import React, { useEffect, useState } from 'react';
// import { getCompanySalons, getCandidatesEncountered } from '../services/api';

export default function CompanyDashboard() {
  const [salons, setSalons] = useState([]);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Récupère les salons
    // getCompanySalons().then(data=>setSalons(data));
    setSalons([
      { id:20, nom:'Salon Emploi IT', type:'public' }
    ]);
    // Récupère les candidats rencontrés pour un salon par défaut, par exemple le premier
    // getCandidatesEncountered(salonId).then(data=>setCandidates(data));
    setCandidates([
      { id:301, nom:'Dupont', prenom:'Jean', date_interaction:'2024-12-01' }
    ]);
  }, []);

  return (
    <div>
      <h1>Company Dashboard</h1>
      <h2>Salons</h2>
      <ul>
        {salons.map(s => <li key={s.id}>{s.nom} ({s.type})</li>)}
      </ul>
      <h2>Candidats rencontrés</h2>
      <ul>
        {candidates.map(c => (
          <li key={c.id}>{c.prenom} {c.nom} - rencontre le {c.date_interaction}</li>
        ))}
      </ul>
    </div>
  );
}
