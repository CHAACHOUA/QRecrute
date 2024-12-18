export async function getAllSalons() {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/salons`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch salons');
  return res.json();
}
