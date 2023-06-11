import sofa from '../../../../assets/sofa-margot-ii-rose.png'
import style from './style.module.css'

export function Asset() {
  return (
    <section className={style.container}>
      <img src={sofa} alt="sofa" />
    </section>
  )
}
