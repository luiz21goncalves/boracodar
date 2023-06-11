import { Asset } from './components/Asset'
import { Description } from './components/Description'
import style from './style.module.css'

export function Home() {
  return (
    <main className={style.container}>
      <Asset />
      <Description />
    </main>
  )
}
