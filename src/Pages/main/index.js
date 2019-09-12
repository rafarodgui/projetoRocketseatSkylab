import React, { Component} from 'react';
import api from '../../Services/api';
import './style.css'

export default class Main extends Component{

    constructor(props){
        super(props)
        this.state = {
            products: [],
            productsInfo: {},
            page: 1,
        }
    }

    componentDidMount(){
        this.loadProducts()
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?${page}`);

        const { docs, ...productsInfo} = response.data;

        this.setState({products: docs, productsInfo})

    }

    prevPage = () =>{

    }

    nextPage = () => {

        const {page, productsInfo} = this.state;

        if(page === productsInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render(){

        const { products } = this.state;

        return (
            <div className="product-list">
               {products.map(product =>
                   <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <a href="#">Acessar</a>
                   </article>
               )}

                <div className="acoes">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        );
    }
}

