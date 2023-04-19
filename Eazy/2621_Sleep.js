/**
 * @param {number} millis
 */
export default async function sleep(millis) {
    return new Promise((rs) => {setTimeout(rs, millis)})
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */