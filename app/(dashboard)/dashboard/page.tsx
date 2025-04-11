import { FileText, Clock, CheckCircle } from 'lucide-react';

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

export default function DashboardPage() {
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
      </div>
    </div>
  );
}
