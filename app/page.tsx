'use client'
import TheHeader from '@/components/TheHeader';
import MintPage from './mint-nft/page';
import MintNftLayout from './mint-nft/layout';



export default function Page() {

  // const data = await getData();

  return (
    <>
      {/* <TheHeader /> */}
      <MintNftLayout >

        <MintPage/>
      </MintNftLayout>
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