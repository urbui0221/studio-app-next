export default(req, res) => {
    res.status(200).json([
        {
            name : "John Anderson",
            occupation : "designer",
            image : '/images/team/img-1.jpg'
        },
        {
            name : "Alexander Vexler",
            occupation : "designer",
            image : '/images/team/img-2.jpg'        
        },
        {
            name : "Hannah Hlavacek",
            occupation : "designer",
            image : '/images/team/img-3.jpg'           
        },
        {
            name : "Philipp Stengelin",
            occupation : "designer",
            image : '/images/team/img-4.jpg'
        },
    ])
}
