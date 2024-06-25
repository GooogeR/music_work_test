<template>
  <q-page>
    <q-btn
      @click="goBackToAlbums"
      label="Назад к Альбомам"
      color="primary"
      icon="arrow_back"
    />
    <q-list bordered>
      <q-item-label header>Песни в альбоме {{ albumName }}</q-item-label>
      <q-item v-for="song in songs" :key="song.number">
        <q-item-section>
          <q-item-label>{{ song.number }}. {{ song.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-form @submit="addSong" class="q-pa-md">
      <q-input v-model="newSong.name" label="Название Песни" required />
      <q-input
        v-model="newSong.number"
        label="Порядковый Номер"
        type="number"
        required
      />
      <q-btn type="submit" label="Добавить Песню" color="primary" />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: "SongsList",
  data() {
    return {
      albumName: this.$route.params.albumName,
      songs: JSON.parse(localStorage.getItem("songs") || "[]").filter(
        (song) => song.album === this.$route.params.albumName
      ),
      newSong: {
        name: "",
        number: null,
        album: this.$route.params.albumName,
      },
    };
  },
  methods: {
    addSong() {
      const songs = JSON.parse(localStorage.getItem("songs") || "[]");
      const newSong = {
        ...this.newSong,
        number: parseInt(this.newSong.number),
      };
      songs.push(newSong);
      localStorage.setItem("songs", JSON.stringify(songs));
      this.songs = songs.filter((song) => song.album === this.albumName);
      this.newSong.name = "";
      this.newSong.number = null;
    },
    goBackToAlbums() {
      this.$router.go(-1);
    },
  },
};
</script>
