'use client'
import TheHeader from '@/components/TheHeader';
import { usePathname } from 'next/navigation'



export default function Page() {

  // const data = await getData();
  const _route = usePathname();

  console.log("route: ", _route);
  
  return (
    <>
      <TheHeader />
    </>
  )
}

const getData = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: any = await res.json()
  // Pass data to the page via props
  console.log("oko-11")
  return repo;
})