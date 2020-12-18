export const WithSubmitBtn = Button => {
    return {
        functional: true,
        name: 'WithSubmitBtn',
        render(h, context){
            return h(
                Button,
                {
                    ...context.data
                },
                context.children
            )
        }
    }
}