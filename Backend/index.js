const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send({
        message:'welcome to Spiro'
    })
})

const PORT =8080

app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`);
});

