const fetcher = async({url,method,body, json = true}) => {
    const res = await fetch(url,{
        method,
        //the line below is a cool way of saying 
        // if body is present then pass or else don't pass
        ...(body && {body: JSON.stringify(body)}),
        //one more way.
        // body: body && JSON.stringify(body),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
    })

    if(!res.ok){
        throw new Error('API error')
    }

    if(json){
        const data = await res.json()
        return data.data
    }
}

export const register = (user) => {
    return fetcher({url: '/api/register', method: 'post', body: user});
}

export const signin = (user) => {
    return fetcher({url: '/api/signin', method: 'post', body: user});
}