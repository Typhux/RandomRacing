<script setup>
import { ref } from 'vue'
import { useCollection, useFirestore } from 'vuefire';
import { collection, addDoc } from 'firebase/firestore';
import PartTrack from './PartTrack.vue';
import { VaInput, VaButton, VaList, VaListLabel, VaListItem, VaListItemSection, VaListItemLabel } from "vuestic-ui";

const db = useFirestore()
const listTracks = useCollection(collection(db, 'Tracks'));
const track = ref({title:'', totalLengthTrack: 0, parts: []});

function saveTrack(){
    addDoc(collection(db, 'Tracks'), track.value).then((data) => {
        if(data.id){
            location.href = '#/admin/track' 
        }
    })
}

function cancel(){
    location.href = '#/admin/track'
}

function addPart(part){
    track.value.totalLengthTrack += Number(part.lengthPart)
    track.value.parts.push(part)
}
</script>

<template>
    <h1>NEW TRACK</h1>

    <div class="form">
        <VaInput label="Title" placeholder="Title" v-model="track.title"/>
        <div class="PartsTrack">
            <PartTrack @addPart="addPart"/>
            <div class="listPart">
                <VaList>
                    <VaListLabel> Parts </VaListLabel>

                    <VaListItem
                    v-for="(part, index) in track.parts"
                    :key="index"
                    class="list__item"
                    >
                        <VaListItemSection>
                            <VaListItemLabel>
                            {{ part.typePart }}
                            </VaListItemLabel>

                            <VaListItemLabel caption>
                            {{ part.lengthPart }}
                            </VaListItemLabel>
                        </VaListItemSection>
                    </VaListItem>
                </VaList>
            </div>
            <div class="lengthTrack">
                <VaInput label="Total length track" v-model="track.totalLengthTrack" readonly/>
            </div>
        </div>
        <div class="buttons">
            <VaButton @click="saveTrack">Save</VaButton>
            <VaButton @click="cancel">Cancel</VaButton>
        </div>
    </div>
</template>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: 5px;
}

.listPart{
    margin: 5px;
}

.buttons{
    margin: 5px;
}

.buttons button{
    margin: 5px;
}

.lengthTrack{
    display: flex;
    flex-direction: column;
}


</style>