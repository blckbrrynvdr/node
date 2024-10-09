export const page404 = ((req, res) => {
    res.render('errors/404', {
        title: '404'
    })
});
