import style from './style.module.css'

export function Description() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <span>Código: 42404</span>
        <h1>Sofá Margot II - Rosé</h1>
        <strong>R$ 4.000</strong>
      </div>

      <button>Adicionar à cesta</button>
    </section>
  )
}
