module.exports = {
  async redirects() {
    return [
      {
        source: '/web/:slug*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
