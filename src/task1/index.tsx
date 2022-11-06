import { useEffect, useState } from "react";
import { taskOneStyle } from "./style";

export default function TaskOne() {
    const [alphabet, setAlphabet] = useState<string[]>(['A', 'B', 'C', 'D'])
    const [serachField, setSearchField] = useState('')
    const swap = (arr: Array<string>, pos: number) => {
        return [...arr.slice(pos, arr.length), ...arr.slice(0,pos)]
    }
   
    useEffect(() => {
        let i = 1;
        const interval = setInterval(() => {
            if(i === 5) {
                i=1
            }
            setAlphabet(swap(alphabet, i++))
          }, 2000)
    }, [])

    return (
        <div style={taskOneStyle.container}>
            <input placeholder="Search Brand" onChange={e => setSearchField(e.target.value)} />
            {alphabet.map((element, index) => {
                if(serachField == '' || element === serachField) {
                    return(
                        <div key={index} style={{ border: '1px solid rgb(60, 60, 60) ', height: '50px', alignItems: 'center', width: '100px' }}>
                            <h2 style={{ marginLeft: '10px' }}>{element}</h2>
                        </div>
                        )
                } else {
                    return null;
                }
                
            })
        }
        </div>
    )


}