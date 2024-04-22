import Home from "../components/Home";
import {connect} from 'react-redux'
import {addToCart} from '../services/actions/action'



const mapStateToProps = state =>({
  
})


const mapDispatchToProps = dispatch  =>({
    addToCartHandler:data=>dispatch(addToCart)
})


export default connect(mapStateToProps,mapDispatchToProps)(Home);








// export default Home;