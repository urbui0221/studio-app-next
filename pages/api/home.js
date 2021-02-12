export default (req,res) => {
    res.status(200).json({
        images : [
            "https://images.unsplash.com/photo-1542296375-b4c0e4a878fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            "https://images.unsplash.com/photo-1602342629825-3caac6e02785?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            "https://images.unsplash.com/photo-1510582029005-689cfc56b48c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        ],
        headerText : [
            'We are a <span class="white">creative film</span> and <span class="white">video</span> production company based in Berlin &amp; Hamburg' ,
            'There is a <span class="white">beautiful</span> intention in the <span class="white">process</span> of shooting films.',
            'Lets make <span class="white">great</span> things <span class="white">togather!</span>'
        ]
    })
}