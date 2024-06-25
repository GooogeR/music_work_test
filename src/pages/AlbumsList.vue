<template>
  <q-page>
    <q-btn
      @click="goBackToArtists"
      label="Назад к Исполнителям"
      color="primary"
      icon="arrow_back"
    />
    <q-list bordered>
      <q-item-label header>Альбомы {{ artistName }}</q-item-label>
      <q-item
        v-for="album in albums"
        :key="album.name"
        clickable
        @click="viewSongs(album)"
      >
        <q-item-section>
          <q-item-label>{{ album.name }} ({{ album.year }})</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "AlbumsList",
  data() {
    return {
      artistName: this.$route.params.artistName,
      albums: JSON.parse(localStorage.getItem("albums") || "[]").filter(
        (album) => album.artist === this.$route.params.artistName
      ),
    };
  },
  methods: {
    viewSongs(album) {
      this.$router.push({ name: "songs", params: { albumName: album.name } });
    },
    goBackToArtists() {
      this.$router.go(-1);
    },
  },
};
</script>
