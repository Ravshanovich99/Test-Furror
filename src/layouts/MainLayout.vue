<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-toolbar-title>
          <router-link to="/" class="nav-logo">
            Furror Test
          </router-link>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          <router-link to="/">
            <h5 class="side-logo">Logoooo</h5>
          </router-link>
        </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Products',
    icon: 'school',
    link: '/products'
  },
  {
    title: 'Product Types',
    icon: 'code',
    link: '/product-types'
  },
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style >
.nav-logo {
  color: #fff
}

.side-logo {
  color: #252525;
}

a {
  text-decoration: none;
}
</style>
