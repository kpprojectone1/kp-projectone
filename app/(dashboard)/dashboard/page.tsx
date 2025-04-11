const stats = [
  { title: 'Total Complaints', value: 124, color: 'text-blue-600' },
  { title: 'Pending Cases', value: 37, color: 'text-yellow-500' },
  { title: 'Resolved Cases', value: 87, color: 'text-green-600' },
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
              <h2 className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                {stat.title}
              </h2>
              <p className={`mt-2 text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}