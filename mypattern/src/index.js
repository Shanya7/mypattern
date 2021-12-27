import React from 'react'
import{render} from 'react-dom'

function Description() {
  return (
    <div>
      <h2>This is my pattern app</h2>
      <section>body</section>
    </div>
  )
}

// function Calculator(){
//   return (
//   <div>
//       <h1>text</h1>
//   </div>
//   )

// }

// function Parameters(){
//   return(
//     <div>
//     <hight/>
//     </div>
//   )

// }
render(<Description/>, document.getElementById('root'))