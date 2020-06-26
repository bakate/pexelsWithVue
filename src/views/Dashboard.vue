<template>
  <div class="mx-auto" width="600">
    <h2>This is the Dashboard Page</h2>
    <BaseInput label="Hello" v-model="hi" placeholder="Salut ici" type="text" />
    <BaseSelect
      v-model="selectPapi"
      label="Choisis papi ta ville"
      :items="items"
      itemText="state"
      itemValue="abbr"
      :hint="`${selectPapi.state}, ${selectPapi.abbr}`"
    />
    <h2>{{ hi }}</h2>
    <BaseButton class="warning" :to="{ name: 'videos' }">
      <slot>
        <v-icon>mdi-arrow-left</v-icon>
        <span>Hello</span>
      </slot>
    </BaseButton>
    <BaseSelect
      v-model="selectPapi2"
      :items="items2"
      itemText="etat"
      label="Ta ville"
      :hint="`${selectPapi2.etat}, ${selectPapi2.abr}`"
      itemValue="abr"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hi: '',
      selectPapi: { state: 'Florida', abbr: 'FL' },
      selectPapi2: { etat: 'Dakar', abr: 'DKR' },
      items: [
        { state: 'Florida', abbr: 'FL' },
        { state: 'Georgia', abbr: 'GA' },
        { state: 'Nebraska', abbr: 'NE' },
        { state: 'California', abbr: 'CA' },
        { state: 'New York', abbr: 'NY' },
      ],
      items2: [
        { etat: 'Dakar', abr: 'DKR' },
        { etat: 'Florida', abr: 'FL' },
        { etat: 'Georgia', abr: 'GA' },
        { etat: 'Nebraska', abr: 'NE' },
        { etat: 'California', abr: 'CA' },
        { etat: 'New York', abr: 'NY' },
      ],
    }
  },
}
</script>
