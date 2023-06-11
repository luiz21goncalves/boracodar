import { useState } from 'react'

import { ArrowsClockwise, X } from '@phosphor-icons/react'

import sofaGif from '../../../../assets/sofa-margot-ii-rose.gif'
import sofaImage from '../../../../assets/sofa-margot-ii-rose.png'
import style from './style.module.css'

export function Asset() {
  const [isShowingAnimation, setIsShowingAnimation] = useState(false)

  const imageSrc = isShowingAnimation ? sofaGif : sofaImage

  const Icon = isShowingAnimation ? X : ArrowsClockwise

  function handleToggle() {
    setIsShowingAnimation((prevState) => !prevState)
  }

  return (
    <section className={style.container}>
      <img src={imageSrc} alt="Sofá Margot II - Rosé" />

      <button className={style['float-button']} onClick={handleToggle}>
        <Icon size={32} />
      </button>
    </section>
  )
}
