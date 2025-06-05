export interface Projects{
    title: string,
    image: string[],
    description: string
    type: "web" | "mobile" | string,
    stack: {
        icon: string;
        technology: string
    }[],
    liveLink: string,
    gitRepo: string

}
