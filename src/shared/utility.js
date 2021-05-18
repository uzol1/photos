export const sortedPhotoArray = (photos) => {
    const sortOrder = ["google", "linkedin", "facebook", "twitter", "office365", "undefined"]
    let items = [...photos]

    items.sort(function (a, b) {
        return sortOrder.indexOf(a.source) - sortOrder.indexOf(b.source);
    });

    const urlArray = items.map((item) => {
        return item.url
    })
    return urlArray;
}

export const checkImage = path =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve({ path, status: "ok" });
        img.onerror = () => resolve({ path, status: "error" });
        img.src = path;
    });
