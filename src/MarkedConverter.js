import React from 'react';
import { useState } from 'react'
import marked from 'marked'


export const MarkedConverter = () => {
    const [markedVal] = useState('')
    return (<div dangerouslySetInnerHTML={createMarkUp(markedVal)}>

    </div>
    );

  }
  export const createMarkUp = (val) => {
    return { __html: marked(val) }
   }