import { useRouter } from 'next/router'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })


export default async function Home(props:{params:{action:string}}) {

  return(

    <div>{props.params.action}</div>
  )
}


// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   const data = fetch("")

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {reps:data}
//   }
// }