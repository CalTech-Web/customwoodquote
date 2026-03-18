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
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          + New Quote
        </Link>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total Projects</div>
          <div className="text-3xl font-bold">{stats.totalProjects}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total Quoted Value</div>
          <div className="text-3xl font-bold">${stats.totalQuotedValue.toFixed(2)}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Win Rate</div>
          <div className="text-3xl font-bold">{stats.winRate.toFixed(1)}%</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Average Project Value</div>
          <div className="text-3xl font-bold">${stats.averageProjectValue.toFixed(2)}</div>
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="flex-1 text-center px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm transition-colors min-h-[44px] flex items-center justify-center"
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
