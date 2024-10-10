<template>
  <div id="app">
    <header class="header">
      <h1>{{ title }}</h1>
    </header>

    <main class="main-content">
      <section class="about">
        <img :src="profileImage" alt="Professional Image" class="profile-img"/>
        <div class="bio">
          <h2>About Me</h2>
          <p>{{ description }}</p>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>© 2024 Carley Benson | Developer Portfolio</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Carley Benson - Developer',
      description: 'I am a passionate developer with 10 years of experience in customer service, management, and IT. Currently pursuing a career in software development with a focus on building dynamic and responsive applications.',
      profileImage: require('@/assets/profile-image.jpg') // Make sure to add your professional image here
    };
  }
};
</script>

<style scoped>
/* General styling */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styling */
.header {
  background-color: #2C3E50;
  color: #FFFFFF;
  text-align: center;
  padding: 20px 0;
}

.header h1 {
  font-size: 2rem;
}

/* Main content styling */
.main-content {
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  text-align: left;
  gap: 20px;
}

.profile-img {
  max-width: 200px;
  border-radius: 50%;
}

.bio {
  flex-grow: 1;
}

.bio h2 {
  color: #18BC9C;
  margin-bottom: 10px;
}

.bio p {
  font-size: 1.1rem;
  color: #333333;
  line-height: 1.6;
}

/* Footer styling */
.footer {
  background-color: #F4F4F4;
  padding: 20px;
  text-align: center;
}

.footer p {
  color: #333333;
}
</style>

