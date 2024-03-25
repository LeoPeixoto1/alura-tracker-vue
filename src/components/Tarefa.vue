<template>
    <div class="lista">
        <Box>
            <div class="columns">
                <div class="column is-7">
                    {{tarefa.descricao || 'Tarefa sem descrição' }}
                </div>
                <div class="column">
                    <CronometroTask :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
                </div>
            </div>
        </Box>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroTask from './CronometroTask.vue'
import ITarefa from '@/interfaces/ITarefa';
import Box from './Box.vue'



export default defineComponent({
    name: 'Tarefa',
    components: {
        CronometroTask,
        Box
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
                required: true
        }
    }
})
</script>
