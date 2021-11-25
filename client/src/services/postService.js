export const allPosts = async () => {
    return await fetch('/catalog');
}

export const topItems = async () => {
    return await fetch('/post/topItems');
}