import { useEffect, useState } from "react"
import { taskOneStyle } from "../task1/style"
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
        fetch()
    }, [])

    useEffect(() => {
        let i = 1
        setInterval(() => {
            if (i === 6)
                i = 1

            setAlphabet(swap(alphabet, i++))
        }, 1000)
    }, [])

    useEffect(() => {
        if (searchField !== '' && checkDataPresent(searchField))
            setMusic(musicArray)

    }, [musicArray, searchField])

    function removeDuplicates(arr: Array<any>) {
        const mapped = arr.map((obj, index) => obj.collectionName)
        return mapped.filter((type, index) => mapped.indexOf(type) === index)
    }

    const setMusic = (musicArray: any) => {

        const sortedArray = musicArray.sort((a: any, b: any) => a.collectionName.localeCompare(b.collectionName))
        let removeDuplicate = removeDuplicates(sortedArray)

        console.log('sortedArray', removeDuplicate)
        let counter = 5

        removeDuplicate.forEach((element: any, index: number) => {

            if (index <= 5) {
                alphabet[counter--] = element
                setAlphabet(alphabet)
            }
            console.log(alphabet)
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