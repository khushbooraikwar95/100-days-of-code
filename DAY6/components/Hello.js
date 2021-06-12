import React from 'react'

const Hello = () => {
//    return(
//         <div>
//         <h1>Welcome to Khushboo World</h1>
//         </div>
//     )

return React.createElement('div',
 null,
 React.createElement('h1', null, 'hello Khush!')
  );
}

export default Hello