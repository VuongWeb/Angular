export interface TPost {
    id?:number,
    title: string,
    image: string,
    createAt: string,
    categoryPostId: number | undefined,
    shortDesc: string,
    desc: string
}