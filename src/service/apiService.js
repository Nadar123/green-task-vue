import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'https://sandbox.d.greeninvoice.co.il/api/v1',
  data: {
    userInfo: []
  },
  headers: {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.VUZndHRzQzN6Ym4vVG1YL2JFWEVjUnlNMzZKNXpaN3BYQWdZQmxjcUg1S204RTZobDJ6VmhvUEpid1o3S3ltNVIxMUQxMlBOTHJLc2NBbVQ5clhBTW9Jb0NmZno3aHBLU05VR2VaZ0VkZ3VNT2pheGJLcUZoYmdyR2Q4ZTRWVHBkNkpvb3JOVDRpUDRrVjFHQnp3SlVNd25hZUZnY0tVSzBjbjY1dEVhMzhWZDRIN3RYb004V2RBRm5NQ055OHlFLzB0ZStzcktITVFMSzZuNGdVWG5Id0VGSkRpdUJpd3JXTnZybGJ4bkh6UWNoblZLeVdicUh5dHZWVDJ3ellXSA.BmvcY3panc68vWKJifJT86x49QHJ8HO_ISAs8js6R6w`,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.request.use(response => {
  NProgress.done()
  return response
})

export default {
  getUserInfo () {
    return apiClient.get('/users/me')
  }
}
