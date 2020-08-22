import React, { Component } from "react";
import API from "../utils/API";
import Logo from "../images/logo.png";
import {  Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./search.css";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <img className = "img" alt= "logo" src = {Logo}/>
      <h1 className = "saved"><em>Saved Books</em></h1>
      <Container fluid>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    href={book.href}
                    thumbnail={book.thumbnail}
                    description={book.description}
                    deleteBook={() => this.deleteBook(book._id)}
                  />

                ))}
              </List>
            ) : (
              <h2 id="message" style = {{marginTop: 40}}className="text-center">No Results to Display</h2>
            )}
      </Container>
      </div>
    );
  }
}

export default Saved;
