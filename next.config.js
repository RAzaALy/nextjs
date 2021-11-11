module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/profile",
        destination: "/",
        permanent: true,
        // permanent: false,
      },
      {
        source: "/old-blog/:id",
        destination: "/new-blog/:id",
        permanent: true,
      },
    ];
  },
};
