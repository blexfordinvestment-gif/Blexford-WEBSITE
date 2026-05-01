import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut as firebaseSignOut } from 'firebase/auth';
import { LogOut, Users, FileText, Activity } from 'lucide-react';
import { format } from 'date-fns';

export default function Admin() {
  const [leads, setLeads] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const defaultUser = auth.currentUser;
    if (!defaultUser) {
      navigate('/login');
      return;
    }

    const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedLeads = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLeads(fetchedLeads);
    }, (error) => {
      console.error("Firestore Error: ", error);
      if (error.message.includes('permission')) {
         console.error('Permission denied to read leads.');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    firebaseSignOut(auth);
    navigate('/');
  };

  return (
    <div className="flex-grow bg-gray-50 flex flex-col md:flex-row min-h-[calc(100vh-80px-500px)]">
      {/* Sidebar sidebar */}
      <div className="w-full md:w-64 bg-brand-blue text-white flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-serif font-bold">Admin Portal</h2>
        </div>
        <nav className="flex-grow p-4 mt-4">
          <ul className="space-y-2">
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 text-brand-gold rounded-none">
                <Activity className="w-5 h-5" /> Leads
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition-colors">
                <FileText className="w-5 h-5" /> Content
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition-colors">
                <Users className="w-5 h-5" /> Users
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-bold text-gray-900">Lead Dashboard</h1>
          <p className="text-gray-600">Track and manage marketing leads from web assets.</p>
        </div>

        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Name</th>
                  <th className="px-6 py-4 font-semibold">Contact</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No leads found or loading...
                    </td>
                  </tr>
                ) : (
                  leads.map(lead => (
                    <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {lead.createdAt?.toDate ? format(lead.createdAt.toDate(), 'MMM dd, yyyy') : 'Just now'}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <a href={`mailto:${lead.email}`} className="text-brand-blue hover:underline">{lead.email}</a>
                          {lead.phone && <span className="text-gray-500 mt-1">{lead.phone}</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full
                          ${lead.status === 'new' ? 'bg-blue-100 text-blue-800' : ''}
                          ${lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${lead.status === 'qualified' ? 'bg-green-100 text-green-800' : ''}
                          ${lead.status === 'lost' ? 'bg-red-100 text-red-800' : ''}
                        `}>
                          {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate" title={lead.message}>
                        {lead.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
