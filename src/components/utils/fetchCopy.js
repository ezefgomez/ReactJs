export const fetchCopy = (items) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 3000);
    });
};