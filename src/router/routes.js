const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ArtistsList.vue") },
      {
        path: "albums/:artistName",
        name: "albums",
        component: () => import("pages/AlbumsList.vue"),
      },
      {
        path: "songs/:albumName",
        name: "songs",
        component: () => import("pages/SongsList.vue"),
      },
    ],
  },
];

export default routes;
