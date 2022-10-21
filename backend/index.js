import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import md5 from 'md5'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/osocuser", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, ()=>{
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String
})

const User = new mongoose.model("User", userSchema)

const Product = new mongoose.model("Product", productSchema)

//Routes
app.post("/login", (req,res) => {
    const {email,password} = req.body
    // password = md5(password)
    User.findOne({email:email}, (error,user) => {
        if(user){
            if(md5(password) === user.password){
                res.send({message:"Sign In Successfull", user:user})
            } else {
                res.send({message: "Incorrect Password"})
            }
        } else {
            res.send({message:"Email id not registered, Please sign up"})
        }
    })
})

app.post("/register", (req,res) => {
    const {name,email,password} = req.body
    User.findOne({email:email}, (error,user) => {
        if(user){
            res.send({message : "Email id already registered"})
        } else {
            const user = new User({
                name,
                email,
                password : md5(req.body.password)
            })
            user.save(error => {
                if(error){
                    res.send(error)
                } else {
                    res.send({message : "Sign Up Sucessfull, Sign In Now"})
                }
            })
        }
    })
})

app.post("/add", (req,res) => {
    const {name,image,price} = req.body
            const product = new Product({
                name,
                image,
                price
            })
            product.save(error => {
                if(error){
                    res.send(error)
                } else {
                    res.send({message : "Product Added Sucessfull"})
                }
            })
})

app.get("/products", async(req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error){
        console.log(`${error}`)
        process.exit(1)
    } 
})

app.listen(5000, () => {
    console.log("started at 5000")
})