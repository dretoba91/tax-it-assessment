// import React from 'react'
import { twMerge } from 'tailwind-merge'

function Wrapper({children, className}) {
    const styles = twMerge('max-w-[1440px]', className);
  return (
    <div className={styles}>{children}</div>
  )
}

export default Wrapper