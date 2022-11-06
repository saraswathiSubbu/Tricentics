import axios from "axios";
import create from "zustand";

type State = {
    musicArray: [],
    fetch: () => void
}

export const apiStore = create<State>((set, get) => ({
    musicArray: [],

    fetch:()=>
    {
        axios.post('https://itunes.apple.com/search?term=radiohead')
        .then(function (response: any) {
          // handle success
          set({ musicArray: response.data.results })
          console.log(response.data.results.sort());
        })
        .catch(function (error: any) {
          // handle error
          console.log(error);
        })
    }
}))