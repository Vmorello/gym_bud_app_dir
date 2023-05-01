import Link from 'next/link'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let categories = ["cardio", "chest", "back", "arm", "shoulder", "legs", "abbs"]
  let excersises = {
      "cardio":["running"],  
      "chest":["pec_fly", "chest_press", ], 
      "back":["lat_pull_down", "row_machine", "lower_back_crunches"], 
      "arm":["forearm_pulls","tricep_extensions"], 
      "shoulder":["shoulder_press","shoulder_shrugs"], 
      "legs":["leg_press", "caft_raise","leg_curl","leg_extension" ], 
      "abbs":["leg_raise", "plank"],
    } as {[key: string]: string[]}

  return(
    <div className='flex'>
      {categories.map((title:string) => <GroupCard key={title} title={title} options={excersises[title]}/>)}
    </div>
  )
  
}

function GroupCard(props:{title:string, options:string[]}) {
  return (
  <div className="w-full max-w-md mx-1 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{props.title}</h5>
          {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
          </a> */}
      </div>
    <div className="flow-root">
        <ul role="list" className=" divide-gray-200 dark:divide-gray-700">
          {props.options.map((excersise:string) => <CardItem key={excersise} excersise={excersise}/>)}
        </ul>
    </div>
  </div>
  )
}

function CardItem(props:{excersise:string}) {

  return (
    <Link href={{pathname: `/excer/${props.excersise}`,
          // query: {
          //   excer: props.excersise
          // }
        }
        
    } >
      <li className="py-2 my-1 sm:py-4 items-center rounded-lg bg-gray-100 border-gray-500 dark:bg-gray-400 dark:border-gray-300">
        <p className="text-center mx-3 text-sm p font-medium text-gray-900 truncate ">
          {props.excersise.replaceAll("_", " ")}
        </p>
      </li>
    </Link>
  )
}


