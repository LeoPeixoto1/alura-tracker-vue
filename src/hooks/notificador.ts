import { TipoNotificacao } from "@/interfaces/INotificacoes"
import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-mutacoes"

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto:string) => void

}

export default (): Notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, texto:string): void => {
        store.commit(NOTIFICAR, {
          titulo,
          texto,
          tipo: TipoNotificacao.SUCESSO
        })
      }
      return {
        notificar
      }
}