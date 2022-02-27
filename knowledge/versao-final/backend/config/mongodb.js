const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/knowledge_stats', {
            useUnifiedTopology:true, 
            useNewUrlParser: true,
        })
    }catch(error) {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!' + error
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    }
}

connectDB();

    