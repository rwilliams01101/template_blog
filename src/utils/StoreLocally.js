// I know this isn't good, but building an SPA on gitpages made me cheat a bit

function StoreLocally(blogId) {
    localStorage.setItem('blogPostNumber', blogId.toString())
}

export default StoreLocally