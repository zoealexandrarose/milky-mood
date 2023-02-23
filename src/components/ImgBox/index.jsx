import {Image} from './styles'

function ImgBox({x, y}) {
  // console.log(x)
  return (
    <Image $initialX={x} $initialY={y}/>
  )
}

export default ImgBox
