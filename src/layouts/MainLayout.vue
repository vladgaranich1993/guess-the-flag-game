<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Guess the Flag App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        content-class="bg-grey-1"
      >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
  
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Play',
          caption: 'to game screen',
          icon: 'public',
          link: '/'
        },
        {
          title: 'Settings',
          caption: 'settings',
          icon: 'settings',
          link: '/settings'
        },
        {
          title: 'About',
          caption: 'About this game',
          icon: 'info',
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .footer {
    @media(min-width: 1024px) {
      display: none;
    }
  }
</style>
