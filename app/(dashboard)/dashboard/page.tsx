export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">Welcome to your dashboard!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example cards/stats section */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700">Total Complaints</h2>
            <p className="text-2xl font-bold text-blue-600 mt-2">42</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700">Pending Cases</h2>
            <p className="text-2xl font-bold text-yellow-500 mt-2">8</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-lg font-semibold text-gray-700">Resolved</h2>
            <p className="text-2xl font-bold text-green-500 mt-2">34</p>
          </div>
        </div>
      </div>
    </div>
  );
}