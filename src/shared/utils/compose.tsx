// import React from 'react'

// export default function Example({value, onChange}: any) {
//   return (
//     <input type="text" value={value}
//     // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}/>
//     // onChange={pipe(preventDefault, stopPropagation,  getValue, onChange)}/>
//   )
// }

// function compose<U>(...fns: Function[]) {
//     return <E,>(initialValue:any): U => fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
// }
// function pipe<U>(...fns: Function[]) {
//     return <E,>(initialValue:any): U => fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
// }
