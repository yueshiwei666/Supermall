export default {
     addcounter(state,payload){
         payload.count++
     },
     newshop(state,payload){
        state.shop.push(payload)
     }
}