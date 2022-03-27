import React from 'react'
import Load from '../assets/loading.gif';

export default function Loading() {
  return (
    <div className='loading'>
        <img src={Load} alt=""/>
    </div>
  );
}
