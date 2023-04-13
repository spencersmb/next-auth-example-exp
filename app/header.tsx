import ContextTest from '@/clientComponents/contextTest'
import { getLocalData } from '@/utils/serverUtils'
import Link from 'next/link'
import React from 'react'


async function Header() {

  // const wpSearchData = await getLocalData<ISearchJson>('json/wp-search.json')
  const wpSearchData = null


  return (
    <header className='w-full p-6 bg-blue-400'>
      header
      <nav>
        Nav
      </nav>
      {/* <ContextTest /> */}
      <Link href={'/'} className='px-2 py-1 text-blue-500 bg-white'>Home</Link>
    </header>
  )
}

export default Header
