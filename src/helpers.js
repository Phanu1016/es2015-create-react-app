const choice = (items) => items[Math.floor(Math.random() * items.length)]

const remove = (item, items) => items.filter((i) => i != item)

export {choice, remove}