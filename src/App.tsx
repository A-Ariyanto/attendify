import { useEffect } from 'react';

export default function App() {
  
  useEffect(() => {
    const testConnection = async () => {
      try {
        const [{ db }, { collection, getDocs }] = await Promise.all([
          import('./firebase'),
          import('firebase/firestore'),
        ])

        const querySnapshot = await getDocs(collection(db, 'testCollection'))
        console.log('Connection successful!', querySnapshot)
      } catch (e) {
        console.error('Error connecting to Firebase:', e)
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ... rest of your existing JSX ... */}
    </div>
  )
}