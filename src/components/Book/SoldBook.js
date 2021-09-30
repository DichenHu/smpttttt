import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BookCell } from "./BookCell";

import { Link } from "react-router-dom";

const frameStyle = {
    border: "solid",
    borderWidth: 1,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 12,
};
class SoldBook extends Component {
    state = {
        soldBooks: null,
    };

    componentDidMount() {
        this.getSoldBooks();
    }

    getSoldBooks = () => {
        setTimeout(() => {
            const books = [
                {
                    id: 1,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Aughtie Walk ",
                    price: "call :19244556322" ,
                    customer: " location:Albert Park",
                },
                { id: 2,  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                name: " Location :calton",
                price: "contect :19244556322" ,
                customer: "aviliable yes", },
                {
                    id: 3,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 4,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 5,
                    image: "https://images.squarespace-cdn.com/content/v1/56bf8adad51cd4587e5f14b2/1514572181808-ERMYYQNWJQXHHRC2NO1H/best-books-book-youll-ever-read.jpg",

                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 6,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 7,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 8,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 9,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 10,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 11,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 12,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 13,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 14,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 15,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 16,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 17,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 18,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 19,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },
                {
                    id: 20,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: " Location :calton",
                    price: "contect :19244556322" ,
                    customer: "aviliable yes",
                },


            ];

            this.setState({ ...this.state, soldBooks: books });
        }, 2000);
    };

    render() {
        return (
            <div className="container">
                <h2>Place for covid-19 test </h2>
                <hr class="solid"></hr>

                <div className="container" style={frameStyle}>
                    <h5>Aviliable place for covid-19 test</h5>
                    <hr class="solid"></hr>

                    <div class="row">
                        {this.state.soldBooks
                            ? this.state.soldBooks.map((book) => (
                                  <div
                                      class="col-4"
                                      style={{
                                          height: 500,
                                          width: 300,
                                          border: "solid 1px",
                                      }}
                                  >
                                      <Link to={`/book/${book.id}`}>
                                          {<BookCell book={book} />}
                                      </Link>
                                  </div>
                              ))
                            : "Loading"}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {})(SoldBook);
