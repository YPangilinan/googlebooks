import React, { Component } from "react";
import { BookListItem } from "../components/BookList";
import API from "../utils/API";
import Logo from "../images/logo.png";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "./search.css";
import BottomNav from "../components/BottomNav";

class Books extends Component {
  state = {
    books: [],
    search: "",
    title: "",
    author: "",
    description: ""
  };

  componentDidMount() {

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.searchBook(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err));
  };

  handleSavedBook = data => {
    console.log("This is the book data from handleSavedBook:")
    console.log(data);
    API.saveBook(data)
    .then(res => alert("Your book was saved! 😄") && this.loadBooks())

    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <img className = "img" alt= "logo" src = {Logo}/>
      <Container fluid>
      <Row>
      <Col size="md-12">
            <div>
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Begin your literary journey"
              />
              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            </div>
            </Col>
            </Row>
            <Row>
            <Col size="md-12">
              {!this.state.books.length ? (
                <p id="message" className="text-center"></p> 
              ) : (
                <div>
                  {this.state.books.map(books => {
                    return(
                      <BookListItem 
                        key={books.id}
                        title={books.volumeInfo.title}
                        author={books.volumeInfo.authors}
                        id={books.id}
                        href={books.volumeInfo.previewLink}
                        thumbnail={books.volumeInfo.imageLinks.thumbnail}
                        description={books.volumeInfo.description}
                        handleSavedBook={() => this.handleSavedBook({
                          title: books.volumeInfo.title,
                          author: books.volumeInfo.authors,
                          id: books.id,
                          href: books.volumeInfo.previewLink,
                          thumbnail: books.volumeInfo.imageLinks.thumbnail,
                          description: books.volumeInfo.description
                        })}
                      />    
                  );              
                  })}                              
               </div>

              )}
            </Col>
          </Row>
      </Container>
      <BottomNav/>
      </div>
    );
  }
}

export default Books;
