export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - Date(a.frontmatter.date)
}
