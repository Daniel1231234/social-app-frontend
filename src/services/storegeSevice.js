export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

export function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}
