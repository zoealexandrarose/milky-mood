import {useState, useEffect} from 'react'
import {Image} from './styles'

function ImgBox({x, y, percent}) {
  // console.log(x)
  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    setPosition([
      Math.random() * 400 - x * 100 - 50,
      Math.random() * 600 - y * 100 - 50]) // 400 is width of the img container component, 600 is height
  }, [x, y]) // dependency array

  // console.log(position)

  return (
    <Image $initialX={x} $initialY={y} $movedX={position[0] * percent} $movedY={position[1] * percent} />
  )
}

export default ImgBox
