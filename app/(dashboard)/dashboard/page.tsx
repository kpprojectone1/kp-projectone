import { FileText, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
const stats = [
  {
    title: 'Total Complaints',
    value: 124,
    color: 'text-blue-600',
    icon: FileText,
  },
  {
    title: 'Pending Cases',
    value: 37,
    color: 'text-yellow-500',
    icon: Clock,
  },
  {
    title: 'Resolved Cases',
    value: 87,
    color: 'text-green-600',
    icon: CheckCircle,
  },
];

const complaints = [
  {
    id: 1,
    complainant: 'Juan Dela Cruz',
    offender: 'Pedro Santos',
    status: 'Pending',
    dateFiled: '2025-04-01',
  },
  {
    id: 2,
    complainant: 'Maria Reyes',
    offender: 'Juan Dela Cruz',
    status: 'Resolved',
    dateFiled: '2025-03-28',
  },
  {
    id: 3,
    complainant: 'Ana Garcia',
    offender: 'Jose Torres',
    status: 'Pending',
    dateFiled: '2025-04-02',
  },
];

export default function DashboardPage() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');

  const filteredComplaints = complaints.filter((complaint) => {
    let statusMatch = true;
    let dateMatch = true;

    if (statusFilter !== 'All') {
      statusMatch = complaint.status === statusFilter;
    }

    if (dateFilter !== 'All') {
      dateMatch = complaint.dateFiled.startsWith(dateFilter);
    }

    return statusMatch && dateMatch;
  });
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <h2 className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                    {stat.title}
                  </h2>
                  <p className={`mt-1 text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <div>
            <label htmlFor="status" className="block text-gray-600">Filter by Status</label>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-600">Filter by Date</label>
            <select
              id="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md"
            >
              <option value="All">All</option>
              <option value="2025-04">April 2025</option>
              <option value="2025-03">March 2025</option>
            </select>
          </div>
        </div>

          {/* Section Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Recent Complaints</h2>

        {/* Recent Complaints Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Complainant</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Offender</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Status</th>
                <th className="py-3 px-4 text-left text-gray-600 font-medium">Date Filed</th>
              </tr>
            </thead>
            <tbody>
              {filteredComplaints.map((complaint) => (
                <tr key={complaint.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4 text-gray-700">{complaint.complainant}</td>
                  <td className="py-3 px-4 text-gray-700">{complaint.offender}</td>
                  <td className={`py-3 px-4 text-center ${
                    complaint.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'
                  } font-semibold`}>
                    {complaint.status}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{complaint.dateFiled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
