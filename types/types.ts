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

export interface BlogPosts{
    title: string;
    excerpt: string;
    link: string;
    image: string[]
}

export interface Skills {
    icon: string;
    title: string;
}