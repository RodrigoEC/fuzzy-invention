
export const shortenFilename = (filename: string) => {
    if (filename.length > 18) {
        return `${filename.slice(0, 12)} ... ${filename.slice(-6)}`
    }

    return filename
}
