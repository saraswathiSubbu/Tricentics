import { useEffect, useState } from "react"
import { taskOneStyle } from "./style"

export default function TaskOne() {
    const [alphabet, setAlphabet] = useState<string[]>(['A', 'B', 'C', 'D', 'E'])
    const [serachField, setSearchField] = useState('')

    const swap = (arr: Array<string>, pos: number) => {
        return [...arr.slice(pos, arr.length), ...arr.slice(0, pos)]
    }

    useEffect(() => {
        let i = 1
        setInterval(() => {
            if (i === 6)
                i = 1

            setAlphabet(swap(alphabet, i++))
        }, 2000)
    }, [])

    return (
        <div style={taskOneStyle.container}>
            <input placeholder="Search Brand" style={taskOneStyle.searchField}onChange={e => setSearchField(e.target.value)} />
            {alphabet.map((element, index) => {
                if (serachField == '' || element === serachField)
                    return (
                        <div style={taskOneStyle.spacing}>
                            <div key={index} style={taskOneStyle.itemStyle}>
                                <h2 style={{ marginLeft: '10px' }}>{element}</h2>
                            </div>
                        </div>
                    )
                else
                    return null
            })
            }
        </div>
    )
}