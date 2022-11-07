import axios from "axios"
import create from "zustand"

type State = {
    musicArray: [],
    fetch: () => void
}

export const apiStore = create<State>((set, get) => ({
    musicArray: [],

    fetch:()=>
    {
        axios.get('/music.json')
        .then(function (response: any) {
          set({ musicArray: response.data.results })
        })
        .catch(function (error: any) {
          // handle error
          console.log(error);
        })
    }
}))