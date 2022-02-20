module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3caa3b94a95004b0c9248ba2011453e7'),
  },
});
