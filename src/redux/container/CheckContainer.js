import { connect } from 'react-redux'
import CheckItem from "../../components/ClassCom/ClassCom"
import {addToCart} from '../action/action'

const mapStateToPorps=state=>({

})

const mapDispatchToprops  = dispatch=>({

     addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapDispatchToprops,mapStateToPorps)(CheckItem)