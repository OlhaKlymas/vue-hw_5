export const WithSubmitBtn = Btn => {
    return {
        functional: true,
        name: 'WithSubmitBtn',
        props: {
            type: {
                type: String,
                require: true
            },
            user: {
                type: Object,
                require: true
            }
        },
        render(h, context){
            return h(
                Btn,
                {
                    ...context.data,
                    nativeOn: {
                        ...context.data.nativeOn,
                        click: () => {
                            if('nativeOn' in context.data){
                                if('click' in context.data.nativeOn){
                                    context.data.nativeOn.click()
                                    for(let key in context.props.user){
                                        console.log(context.props.user[key])
                                        localStorage[key] = context.props.user[key]
                                    }
                                }
                            }
                        }
                    }
                },
                context.children
            )
        }
    }
}