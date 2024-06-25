<template>
  <q-page>
    <q-list bordered>
      <q-item-label header>Исполнители</q-item-label>
      <q-item
        v-for="artist in artists"
        :key="artist.name"
        clickable
        @click="viewAlbums(artist)"
      >
        <q-item-section>
          <q-item-label>{{ artist.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "ArtistsList",
  data() {
    return {
      artists: JSON.parse(localStorage.getItem("artists") || "[]"),
    };
  },
  methods: {
    viewAlbums(artist) {
      this.$router.push({
        name: "albums",
        params: { artistName: artist.name },
      });
    },
  },
};
</script>
