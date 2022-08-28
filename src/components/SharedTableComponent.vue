<script setup lang="ts">

import { toRefs, ref } from 'vue';

import pokeApi from '../api/pokeApi';

const props = defineProps<{
  cols: any[],
  url: string
}>()

const items = ref([]);

const { cols, url } = toRefs( props );

const getData = async() => {
  const { data } = await pokeApi.get( url.value );
  items.value = data.results;
}

getData();

</script>
<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th
        v-for="(col, index) in cols"
        :key="index"
      >
        {{ col.name }}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in items" :key="index">
      <th scope="row">{{ index+1 }}</th>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
  </tbody>
</table>
</template>
