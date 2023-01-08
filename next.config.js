/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
 nextConfig,
 images: {
  domains: ['links.papareact.com',
             'a0.muscache.com',
             'mapbox://styles/maxbettinelli/clcn0naca000814mv2fpzbo1l',
            ],
  env: {
    mapbox_key: 'pk.eyJ1IjoibWF4YmV0dGluZWxsaSIsImEiOiJjbGNuMDl5eG0wd3gyM29xejB4YmVyZGpiIn0.cj8SSYuK_85EimySZDu4tQ'
  }
 }
}
