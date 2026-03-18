'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  customerName: string | null;
  status: string;
  total: number | null;
  createdAt: string;
  sentAt: string | null;
  furnitureType: string | null;
  photoUrls: string | null;
}

interface DashboardStats {
  totalProjects: number;
  totalQuotedValue: number;
  winRate: number;
  averageProjectValue: number;
}

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalQuotedValue: 0,
    winRate: 0,
    averageProjectValue: 0,
  });

  // Filters
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [furnitureTypeFilter, setFurnitureTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Pagination
  const [displayCount, setDisplayCount] = useState(20);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, statusFilter, dateFilter, furnitureTypeFilter, searchQuery, sortBy]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/projects');
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      setProjects(data);
      calculateStats(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (projectList: Project[]) => {
    const totalProjects = projectList.length;
    const totalQuotedValue = projectList.reduce((sum, p) => sum + (p.total || 0), 0);

    const acceptedCount = projectList.filter(p => p.status === 'accepted').length;
    const declinedCount = projectList.filter(p => p.status === 'declined').length;
    const winRate = (acceptedCount + declinedCount) > 0
      ? (acceptedCount / (acceptedCount + declinedCount)) * 100
      : 0;

    const averageProjectValue = totalProjects > 0 ? totalQuotedValue / totalProjects : 0;

    setStats({
      totalProjects,
      totalQuotedValue,
      winRate,
      averageProjectValue,
    });
  };

  const applyFiltersAndSort = () => {
    let filtered = [...projects];

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(p => p.status === statusFilter);
    }

    // Date filter
    if (dateFilter !== 'all') {
      const now = new Date();
      const filterDate = new Date();

      switch (dateFilter) {
        case '7days':
          filterDate.setDate(now.getDate() - 7);
          break;
        case '30days':
          filterDate.setDate(now.getDate() - 30);
          break;
        case '90days':
          filterDate.setDate(now.getDate() - 90);
          break;
      }

      if (dateFilter !== 'all') {
        filtered = filtered.filter(p => new Date(p.createdAt) >= filterDate);
      }
    }

    // Furniture type filter
    if (furnitureTypeFilter !== 'all') {
      filtered = filtered.filter(p => p.furnitureType === furnitureTypeFilter);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title?.toLowerCase().includes(query) ||
        p.customerName?.toLowerCase().includes(query) ||
        p.furnitureType?.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.sentAt || b.createdAt).getTime() - new Date(a.sentAt || a.createdAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.sentAt || a.createdAt).getTime() - new Date(b.sentAt || b.createdAt).getTime());
        break;
      case 'highest':
        filtered.sort((a, b) => (b.total || 0) - (a.total || 0));
        break;
      case 'lowest':
        filtered.sort((a, b) => (a.total || 0) - (b.total || 0));
        break;
    }

    setFilteredProjects(filtered);
  };

  const handleDuplicate = async (project: Project) => {
    try {
      const duplicateData = {
        title: `${project.title} (Copy)`,
        furnitureType: project.furnitureType,
        status: 'draft',
        // Copy other relevant fields but exclude customer info and dates
      };

      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(duplicateData),
      });

      if (!response.ok) throw new Error('Failed to duplicate project');

      fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error duplicating project:', error);
      alert('Failed to duplicate project');
    }
  };

  const handleDelete = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete project');

      fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-200 text-gray-800';
      case 'sent': return 'bg-blue-200 text-blue-800';
      case 'accepted': return 'bg-green-200 text-green-800';
      case 'declined': return 'bg-red-200 text-red-800';
      case 'in_progress': return 'bg-yellow-200 text-yellow-800';
      case 'completed': return 'bg-purple-200 text-purple-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const getThumbnail = (photoUrls: string | null) => {
    if (!photoUrls) return null;
    try {
      const urls = JSON.parse(photoUrls);
      const key = urls[0];
      if (!key) return null;
      // If already a full URL or API path, return as-is
      if (key.startsWith('/') || key.startsWith('http')) return key;
      // Convert file key to API image URL
      return `/api/images/${encodeURIComponent(key)}`;
    } catch {
      return null;
    }
  };

  const furnitureTypes: string[] = ['all', ...new Set(projects.map(p => p.furnitureType).filter(Boolean) as string[])];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Project Dashboard</h1>
        <Link
          href="/projects/new"
          className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
        >
          + New Quote
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow border-t-4 border-t-amber-500 border border-gray-200 p-6 flex items-start gap-4">
          <div className="bg-amber-50 rounded-lg p-3 flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">Total Projects</div>
            <div className="text-3xl font-bold text-gray-900 mt-0.5">{stats.totalProjects}</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow border-t-4 border-t-amber-500 border border-gray-200 p-6 flex items-start gap-4">
          <div className="bg-amber-50 rounded-lg p-3 flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">Total Quoted Value</div>
            <div className="text-3xl font-bold text-gray-900 mt-0.5">${stats.totalQuotedValue.toFixed(2)}</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow border-t-4 border-t-amber-500 border border-gray-200 p-6 flex items-start gap-4">
          <div className="bg-amber-50 rounded-lg p-3 flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">Win Rate</div>
            <div className="text-3xl font-bold text-gray-900 mt-0.5">{stats.winRate.toFixed(1)}%</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow border-t-4 border-t-amber-500 border border-gray-200 p-6 flex items-start gap-4">
          <div className="bg-amber-50 rounded-lg p-3 flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500 font-medium">Avg Project Value</div>
            <div className="text-3xl font-bold text-gray-900 mt-0.5">${stats.averageProjectValue.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">All Statuses</option>
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
              <option value="accepted">Accepted</option>
              <option value="declined">Declined</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="all">All Time</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Furniture Type</label>
            <select
              value={furnitureTypeFilter}
              onChange={(e) => setFurnitureTypeFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              {furnitureTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest">Highest Value</option>
              <option value="lowest">Lowest Value</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.slice(0, displayCount).map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Thumbnail */}
            {getThumbnail(project.photoUrls) && (
              <div className="h-48 bg-gray-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getThumbnail(project.photoUrls) || ''}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-semibold line-clamp-1">{project.title}</h3>
                {project.customerName && (
                  <p className="text-sm text-gray-600">{project.customerName}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {formatStatus(project.status)}
                </span>
                <span className="text-lg font-bold">
                  ${(project.total || 0).toFixed(2)}
                </span>
              </div>

              <div className="text-xs text-gray-500">
                Created: {new Date(project.createdAt).toLocaleDateString()}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-gray-200">
                <Link
                  href={`/projects/${project.id}/edit`}
                  className="flex-1 text-center px-3 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 text-sm transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDuplicate(project)}
                  className="flex-1 sm:flex-initial px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm transition-colors min-h-[44px]"
                >
                  Duplicate
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex-1 sm:flex-initial px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm transition-colors min-h-[44px]"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {filteredProjects.length > displayCount && (
        <div className="text-center">
          <button
            onClick={() => setDisplayCount(prev => prev + 20)}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Load More ({filteredProjects.length - displayCount} remaining)
          </button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow border border-gray-200">
          <p className="text-gray-600 text-lg">No projects found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
