import Vue from 'vue'



/**
 * 生成指定位数的随机字母标识
 * @param {number} length 标识长度，默认8位
 * @returns {string} 生成结果
 */
function idGen(length = 8) {
    let s = ''
    while (length-- > 0) {
        const r = Math.floor(Math.random() * 26) + 97
        s = s + String.fromCharCode(r)
    }
    return s
}

const vInstance = new Vue({
    data: () => ({
        slot: {},
        abc: {}
    }),
})



export default function makeReactive(obj) {

    const id = idGen()
    const target = Vue.set(vInstance.slot, id, obj)
    vInstance.slot[id] = null

    return target
}
