/**
 * @description It is a template of InMemory cache, there are better versions available. Idea of this aproach is to cache the remote request
 * we can also redis to get over the disadvantages of in memory
 */
const CacheObject = {};
const InMemoryCache = {
    add: (key, value) => {
        CacheObject[key] = value;
    },
    get: (key) => {
        return CacheObject[key];
    },
    delete: (key) => {
        delete CacheObject[key];
        return true;
    },
    has: (key) => {
        return key in CacheObject;
    }
}
module.exports = {
    InMemoryCache
}