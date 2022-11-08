import { useEffect, useState } from "react"
import { apiStore } from "./store"
import { taskTwoStyle } from "./style"

export default function TaskTwo() {
    const { fetch, musicArray } = apiStore()
    const [alphabet, setAlphabet] = useState<string[]>(['A', 'B', 'C', 'D', 'E'])
    const [searchField, setSearchField] = useState('')

    const swap = (arr: Array<string>, pos: number) => {
        return [...arr.slice(pos, arr.length), ...arr.slice(0, pos)]
    }

    useEffect(() => {
        let i = 1
        setInterval(() => {
            if (i === 6)
                i = 1

            setAlphabet(swap(alphabet, i++))
        }, 1000)
    }, [])

    useEffect(() => {
        fetch()
    }, [])

    useEffect(() => {
        if (searchField !== '' && checkDataPresent(searchField))
            setMusic(musicArray)

    }, [musicArray, searchField])

    function removeDuplicates(arr: Array<any>) {
        const mapped = arr.map((obj) => obj.collectionName)
        return mapped.filter((type, index) => mapped.indexOf(type) === index)
    }

    const setMusic = (musicArray: any) => {

        const sortedArray = musicArray.sort((a: any, b: any) => a.collectionName.localeCompare(b.collectionName))
        let removeDuplicate = removeDuplicates(sortedArray)
        let finalArray = removeDuplicate.splice(0, 5)
        let counter = 4

        finalArray.forEach((element: any) => {
            if (counter != 4) {
                alphabet.shift()
                alphabet[4] = element
                setAlphabet([...alphabet])
                counter--
            }
            else {
                alphabet[4] = element
                setAlphabet([...alphabet])
                counter--
            }
        })

    }

    const checkDataPresent = (searchField: any) => {
        return musicArray.filter((obj: any) => obj.collectionName === searchField).length > 0
    }

    return (
        <div style={taskTwoStyle.container}>
            <input placeholder="Search Brand" style={taskTwoStyle.searchField} onBlur={e => setSearchField(e.target.value)} />
            {alphabet.map((element, index) => {

                if (searchField !== '' && checkDataPresent(searchField)) {
                    return (
                        <div style={taskTwoStyle.spacing}>
                            <div key={index} style={taskTwoStyle.itemStyle}>
                                <h2>{element}</h2>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div style={taskTwoStyle.spacing}>
                            <div key={index} style={taskTwoStyle.itemStyle}>
                                <h2 style={{ marginLeft: '10px' }}>{element}</h2>
                            </div>
                        </div>
                    )
                }
            })
            }
        </div>
    )
}
