<template>
    <div>
      <h1>My Portfolio</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <ul v-if="!loading && !error">
        <li v-for="repo in repositories" :key="repo.id" class="repository">
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          <p>{{ repo.description || 'No description available' }}</p>
          <p><strong>Language:</strong> {{ repo.language || 'N/A' }}</p>
          <p><strong>Last updated:</strong> {{ new Date(repo.updated_at).toLocaleDateString() }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        repositories: [],
        loading: true,
        error: null,
      };
    },
    async created() {
      try {
        const response = await fetch('https://api.github.com/users/{carlsscott12}/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        this.repositories = await response.json();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style>
  .repository {
    margin-bottom: 1.5rem;
  }
  .repository a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #007bff;
    text-decoration: none;
  }
  .repository a:hover {
    text-decoration: underline;
  }
  </style>
  