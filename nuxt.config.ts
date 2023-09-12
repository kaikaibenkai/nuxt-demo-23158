import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  components: false, // https://github.com/antfu/unplugin-vue-components/issues/657
  vite: {
    plugins: [
      Components({ // using Arco Design Vue
        dts: true,
        dirs: ['components'],
        directoryAsNamespace: true,
        resolvers: [
          ArcoResolver({ resolveIcons: true }),
        ],
      }),
    ],
  },
})
