import React, { Component } from "react";
import API from "../utils/API";
import Logo from "../images/BookSave.png";
import {  Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./search.css";
import Paper from '@material-ui/core/Paper';

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
      <Container fluid>
            {this.state.books.length ? (
              <React.Fragment>
              <img className = "newLogo" alt= "logo" src = {Logo}/>
              <List>
                {this.state.books.map(book => (
                  <Paper elevation={6}>
                  <ListItem
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    href={book.href}
                    thumbnail={book.thumbnail}
                    description={book.description}
                    deleteBook={() => this.deleteBook(book._id)}
                  />
                  </Paper>
                ))}
              </List>
              </React.Fragment>
            ) : (
              <React.Fragment>
              <img className = "img" alt= "logo" src = {Logo}/>
              <h2 id="message" style = {{marginTop: 40}}className="text-center">No Results to Display</h2>
              </React.Fragment>
            )}
      </Container>
      </div>
    );
  }
}

export default Saved;
