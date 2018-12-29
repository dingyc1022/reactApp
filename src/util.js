


export function getRedirectPath({type,avartar}){
    // 根据用户信息 返回跳转地址
    // user.type boos / genius
    // user.avatar /bossinfo /geniue
    let url = (type === 'boss') ? '/boss' : '/geniue'
    if(!avartar){
        url += 'info'
    }
    return url
}