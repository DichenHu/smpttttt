import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BookCell } from "./BookCell";
import SearchBar from "./SearchBar";
import BookData from "./Data.json";


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
          id: 3000,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Aughtie Walk   ",
          price: " Albert Park ",
          customer: " aviliable yes",
        },
        {
          id: 2,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Port Melbourne Respiratory Clinic",
          price: "Port Melbourne Medical",
          customer: "aviliable yes",
        },
        {
          id: 3,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Bourke Street Melbourne",
          price: "city",
          customer: "aviliable yes",
        },
        {
          id: 4,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Montague Street",
          price: " South Melbourne",
          customer: "aviliable yes",
        },
        {
          id: 5,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "Alfred Health ",
          price: "The Alfred Hospital",
          customer: "walk through",
        },
        {
          id: 6,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Location :calton",
          price: "contect :19244556322",
          customer: "aviliable yes",
        },
        {
          id: 7,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Prahran Respiratory Clinic",
          price: "Star Health - Prahran Town Hall",
          customer: "walk through",
        },
        {
          id: 8,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Melbourne Pathology",
          price: "- Balaclava",
          customer: "- (Asymptomatic only) - Walk Through",
        },
        {
          id: 9,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Location :calton",
          price: "contect :19244556322",
          customer: "aviliable yes",
        },
        {
          id: 10,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " 4Cyte Pathology",
          price: "- Melbourne CBD ",
          customer: "Walk Through",
        },
        {
          id: 11,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Location :calton",
          price: "contect :19244556322",
          customer: "aviliable yes",
        },
        {
          id: 12,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " St Vincent's Hospital Melbourne ",
          price: "Fever Clinic",
          customer: "- Walk Through",
        },
        {
          id: 13,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Fitzroy Respiratory Clinic",
          price: "Victorian Aboriginal Health Service",
          customer: "aviliable yes",
        },
        {
          id: 14,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " • Cohealth -",
          price: "- Collingwood",
          customer: "aviliable yes",
        },
        {
          id: 15,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " The Royal Melbourne Hospital n",
          price: "Walk Throug",
          customer: "aviliable yes",
        },
        {
          id: 16,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " The Royal Children's Hospital -",
          price: "calton",
          customer: "Walk Through",
        },
        {
          id: 17,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Melbourne Pathology",
          price: "North Melbourne",
          customer: "- Drive Through",
        },
        {
          id: 18,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " 4Cyte Pathology",
          price: "- Fairfield -",
          customer: " Drive Through",
        },
        {
          id: 19,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Melbourne Pathology",
          price: "Moonee Ponds ",
          customer: "- (Asymptomatic only) - Walk Through",
        },
        {
          id: 20,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Melbourne Showgrounds",
          price: " drive through",
          customer: "aviliable yes",
        },
        {
          id: 21,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Hampstead Road",
          price: " drive through",
          customer: "aviliable yes",
        },
        {
          id: 22,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: "  Cohealth -",
          price: " - West Footscray",
          customer: "aviliable yes",
        },
        {
          id: 23,
          image:
            "https://parklandtalk.com/wp-content/uploads/2020/11/mufid-majnun-oI20ehIGNd4-unsplash-scaled-e1605647163476.jpg",
          name: " Altona North Respiratory Clinic",
          price: " - altona",
          customer: "aviliable yes",
        }
      ];

      this.setState({ ...this.state, soldBooks: books });
    }, 2000);
  };

  render() {
    return (
      <div className="container">
        <h2>Place for covid-19 test </h2>
        <SearchBar placeholder="Enter a Place Name..." data={BookData} />
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
