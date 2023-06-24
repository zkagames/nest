import { create } from 'zustand'

const users =  ['homer', 'marge', 'bart','lisa','maggie'];

export const useUserStore = create<{user:string, users:Array<string>, setUser:(user:string)=>void}>((set) => ({
    user: users[0],
    users,
    setUser: (user:string) => set(() => ({user}))
}))