const getStoredItem=()=>{
    const storedCartString=localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}

const saveCartToLocalStorage=(cart)=>{
    const cartStringify=JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}

const addToLocalStorage=id=>{
    const cart=getStoredItem()
    cart.push(id)
    saveCartToLocalStorage(cart)
}
export {addToLocalStorage,getStoredItem}