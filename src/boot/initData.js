export default ({ app, router, Vue }) => {
  // Check if there's already data in localStorage
  if (!localStorage.getItem("artists")) {
    const artists = [{ name: "Артист_тест 1" }, { name: "Артист_тест 2" }];
    localStorage.setItem("artists", JSON.stringify(artists));
  }

  if (!localStorage.getItem("albums")) {
    const albums = [
      { name: "Альбом 1", artist: "Артист_тест 1", year: 2024 },
      { name: "Альбом 4", artist: "Артист_тест 2", year: 2024 },
    ];
    localStorage.setItem("albums", JSON.stringify(albums));
  }

  if (!localStorage.getItem("songs")) {
    const songs = [
      { name: "Песня 1", number: 1, album: "Альбом 1" },
      { name: "Песня 2", number: 2, album: "Альбом 4" },
    ];
    localStorage.setItem("songs", JSON.stringify(songs));
  }
};
