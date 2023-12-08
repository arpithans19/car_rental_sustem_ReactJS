export function increment() {
    return (
        {
            type: 'counter/increment'
        }
    )
}

export function decrement() {
    return (
        {
            type: 'counter/decrement'
        }
    )
}