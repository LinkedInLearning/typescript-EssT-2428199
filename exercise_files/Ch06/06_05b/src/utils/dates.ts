export function formatDate(date: Date) {
    return date.toLocaleDateString("en-US", {
        dateStyle: "medium"
    })
}