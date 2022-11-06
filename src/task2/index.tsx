import { useEffect, useState } from "react"
import { taskOneStyle } from "../task1/style"
import { apiStore } from "./store"

export default function TaskTwo() {
    const { fetch, musicArray } = apiStore()
    const [alphabet, setAlphabet] = useState<string[]>(['A', 'B', 'C', 'D', 'E'])
    const [searchField, setSearchField] = useState('')
    const swap = (arr: Array<string>, pos: number) => {
        return [...arr.slice(pos, arr.length), ...arr.slice(0,pos)]
    }
    useEffect(() => {
        fetch()
    }, [])
    
   
    useEffect(() => {
        let i = 1;
        const interval = setInterval(() => {
            if(i === 6) 
                i=1
            
            setAlphabet(swap(alphabet, i++))
          }, 2000)
    }, [])

 const setMusic=(musicArray : any)=>{
    musicArray.forEach((element:any)=> {
        alphabet.push(element.collectionName)
        setAlphabet(alphabet)
    });
 }

    return (
        <div style={taskOneStyle.container}>
            <input placeholder="Search Brand" onBlur={e => setSearchField(e.target.value)} />
            {alphabet.map((element, index) => {
                if(searchField !== '' || musicArray.filter((obj:any) => {return obj.collectionName ===searchField}).length > 0) {
                    console.log(musicArray.filter((obj:any) => {return obj.collectionName === searchField}))
                    return(
                        <div key={index} style={{ border: '1px solid rgb(60, 60, 60) ', height: '50px', alignItems: 'center', width: '100px' }}>
                            <h2 style={{ marginLeft: '10px' }}>{element}</h2>
                        </div>
                        )
                } else {
                    return(
                        <div key={index} style={{ border: '1px solid rgb(60, 60, 60) ', height: '50px', alignItems: 'center', width: '100px' }}>
                            <h2 style={{ marginLeft: '10px' }}>{element}</h2>
                        </div>
                        )
                }
                
            })
        }
        </div>
    )
}