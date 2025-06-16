import MainLayout from 'layouts/MainLayout.vue'
import LoginPage from 'pages/LoginPage.vue'
import RegisterPage from 'pages/RegisterPage.vue'
import HomePage from 'pages/HomePage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', redirect: '/login' },
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage },
      { path: 'home', component: HomePage }
    ]
  }
]

export default routes
