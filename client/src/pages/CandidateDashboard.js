// client/src/pages/CandidateDashboard.js
import React, { useEffect, useState } from 'react';
// import { getCandidateProfile, getCandidateInteractions } from '../services/api';

export default function CandidateDashboard() {
  const [profile, setProfile] = useState(null);
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    // getCandidateProfile().then(data=>setProfile(data));
    setProfile({
      nom:'Dupont',
      prenom:'Marie',
      cv_url:'http://example.com/cv.pdf',
      qr_code_url:'http://example.com/qr/123'
    });
    // getCandidateInteractions().then(data=>setInteractions(data));
    setInteractions([
      { id:401, companyName:'Entreprise X', date_interaction:'2024-12-02' }
    ]);
  }, []);

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      {profile && (
        <div>
          <h2>Mon Profil</h2>
          <p>{profile.prenom} {profile.nom}</p>
          <p>CV : <a href={profile.cv_url} target="_blank" rel="noreferrer">Voir mon CV</a></p>
          <p>Mon QR Code : <img src={profile.qr_code_url} alt="QR Code"/></p>
        </div>
      )}
      <h2>Entreprises qui m’ont scanné</h2>
      <ul>
        {interactions.map(i => (
          <li key={i.id}>{i.companyName} - {i.date_interaction}</li>
        ))}
      </ul>
    </div>
  );
}
