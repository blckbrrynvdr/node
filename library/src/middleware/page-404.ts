export const page404 = ((req: any, res: any) => {
    res.render('errors/404', {
        title: '404'
    })
});
