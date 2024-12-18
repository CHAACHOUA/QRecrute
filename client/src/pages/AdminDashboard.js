import React, { useEffect, useState } from 'react';
import { getAllSalons } from '../services/api';
import Spinner from '../components/Spinner';

export default function AdminDashboard() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSalons() {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllSalons();
        setSalons(data);
      } catch(e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSalons();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div style={{color:"red"}}>Erreur: {error}</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Liste des salons</h2>
      {salons.length === 0 ? (
        <p>Aucun salon disponible</p>
      ) : (
        <ul>
          {salons.map(salon => (
            <li key={salon.id}>
              {salon.nom} ({salon.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
