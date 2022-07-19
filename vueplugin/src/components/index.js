/**
 * @author caijianjia
 * @date 2021-10-13 16:21
 */
const comps = {
    Page: ()=>import('./Page'),
    Test: ()=>import('./Test/index.vue'),
    Test2: ()=>import('./Test2/index.vue')
}

export default Vue => Object.keys(comps).forEach(key => Vue.component(key, comps[key]))
