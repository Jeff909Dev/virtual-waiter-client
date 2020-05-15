import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchStablishmentData, fetchMenuData } from './../actions/establishmentActions';
import { Route, Switch, withRouter } from 'react-router-dom';
import { filter } from 'lodash';
import MainLayout from '../layouts/MainLayout';


//PAGES
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import MenuExtended from '../pages/MenuExtended';
import Status from '../pages/Status';
import ReviewCart from './../components/ReviewCart';
import Checkout from '../pages/Checkout';

class MainContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            showBottomCart: true
        }
    }

    componentDidMount() {
        this.props.fetchStablishmentData();
        this.props.fetchMenuData();
    }

    render() {
        return (
            <Fragment>
                <MainLayout>
                    <Switch>
                        <Route exact path="/" render={props => <Home lang={this.props.lang} />} />
                        <Route exact path="/menu" render={props => <Menu lang={this.props.lang} />} />
                        <Route exact path="/menu/:cat" render={props => {
                            const products = filter(this.props.product_list, { 'Tipo_Plato': Number(props.match.params.cat) })
                            return <MenuExtended cat={props.match.params.cat} products={products} lang={this.props.lang} />
                        }} />
                        <Route exact path="/status" render={props => <Status lang={this.props.lang} />} />
                        <Route exact path="/checkout" render={props => <Checkout lang={this.props.lang} />} />
                    </Switch>
                    {
                        this.props.location.pathname !== "/"  
                            ? <ReviewCart /> : null
                    }
                </MainLayout>
            </Fragment>
        )
    }
}

MainContainer.defaultProps = {
    product_list: []
}

const mapDispatchToProps =  ({ fetchStablishmentData, fetchMenuData });
const mapStateToProps = (state, props) => ({ product_list: state.menu.product_list });
const MainConnected = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default withRouter(MainConnected);