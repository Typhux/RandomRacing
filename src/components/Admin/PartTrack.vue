<script setup>
import { ref } from 'vue';
import { VaInput, VaButton, VaRadio } from "vuestic-ui";

const typePart = ref('')
const lengthPart = ref(0)
const emit = defineEmits(['addPart'])

function cancelPart(){
    typePart.value = ''
    lengthPart.value = 0
}

function addPart(){
    emit('addPart', {typePart: typePart.value, lengthPart: lengthPart.value})
    typePart.value = ''
    lengthPart.value = 0
}
</script>

<template>
    <h2>NEW PART</h2>
    <div class="formPart">
        <label>Type</label>
        <VaRadio
    v-model="typePart"
    option="Start, Finish"
    name="typePart"
  />
  <VaRadio
    v-model="typePart"
    option="Straight"
    name="typePart"
  />
  <VaRadio
    v-model="typePart"
    option="Turn"
    name="typePart"
  />
    </div>
    <div class="formPart">
        <VaInput label="Length" v-model="lengthPart" />
    </div>
    <div class="buttonPart">
        <VaButton @click="addPart">Add</VaButton>
        <VaButton @click="cancelPart">Cancel</VaButton>
    </div>
</template>

<style scoped>
.formPart{
    display: flex;
    flex-direction: column;
    margin: 5px;
}

button{
    margin: 5px;
}

</style>
