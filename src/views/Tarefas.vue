<template>
  <FormTask @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box v-if="listaEstaVazia">
      Nenhuma tarefa criada por enquanto
    </Box>
    <Tarefa v-for="(tarefa, index) in tarefas"
    :key="index"
    :tarefa="tarefa" @aoTarefaClicada="selecionarTarefa" />


    <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if ="tarefaSelecionada">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editar tarefa</p>
          <button @click="fecharModal" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="descricaoDaTarefa" class="label">
              Descrição da Tarefa
              </label>
            <input
            type="text"
            class="input"
            v-model="tarefaSelecionada.descricao"
            id="descricaoDaTarefa" />
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            <button @click="alterarTarefa" class="button is-success">Salvar alterações</button>
            <button @click="fecharModal" class="button">Cancelar</button>
          </div>
        </footer>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import FormTask from '../components/FormTask.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from '../components/Box.vue';
import { useStore } from '@/store';
import { ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';

export default defineComponent({
  name: 'App',
  components: {
    FormTask,
    Tarefa,
    Box

  },
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null
    }
  },

  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa)
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa
    },
    alterarTarefa() {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
    },
    fecharModal() {
      this.tarefaSelecionada = null
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)

    return {
      tarefas: computed(() => store.state.tarefas),
      store
    }
  }
});
</script>
