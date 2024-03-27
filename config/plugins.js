module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_qvxLTiJrZ48oWgMFBBKHVxvjNHoI",
      apiToken: "DhsrK8OvXuJm1q2b1d9neiHV",
      appFilter: "cms-emfarm",
      teamFilter: "",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
