import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        AlbumList: 'albumList',
        MusicScreen: 'musicScreen',
        Home: 'home',
        Links: 'links',
        SongList: 'songList',
      },
    },
  },
};
