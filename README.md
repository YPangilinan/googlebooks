# Welcome to GoogleBooks

GoogleBooks is a new react-based application that allows you to search the Google Books API and store books into your own library. This application utilizes React components, helper/util functions, and lifecycle methods in order to query and display books based on the user searches. This application uses the full MERN (MongoDB, Express, React, Node) stack so that users can save books to review or purchase later! <br>

<img width="800" alt="Screen Shot 2020-08-22 at 6 38 24 PM" src="https://user-images.githubusercontent.com/61812035/90968890-ac060080-e4a6-11ea-9fa7-be3e0630fe39.png">

### See it in Action!
*Google Books* is deployed to heroku. Click [here](https://google-books-yp.herokuapp.com/) to view it! Or refer to the Gifs below.

### What does it do

**SEARCH** <br>
The home page allows you to search the GoogleBooks API for any book you desire.<br><br>
![search](https://user-images.githubusercontent.com/61812035/90968978-df955a80-e4a7-11ea-9f11-0a35e8cfbffc.gif)<br>

**SAVE**<br>
On each book, you have the option to *save* it to your own library to refer to it later on.<br><br>
![save (2)](https://user-images.githubusercontent.com/61812035/90968982-e623d200-e4a7-11ea-860a-75a79e1e9924.gif)<br>

**VIEW**<br>
You also have the option to view the book which will bring you directly to the Google Books website for that specific book. <br><br>
![view](https://user-images.githubusercontent.com/61812035/90968985-ed4ae000-e4a7-11ea-8017-34939e750199.gif)<br>

**DELETE**<br>
If you no longer want it in your library, you have the option to delete the book as well. <br><br>
![delete (2)](https://user-images.githubusercontent.com/61812035/90968990-f3d95780-e4a7-11ea-9987-f8a51de193a2.gif)

### How was this app created?
This assignment utilizes the MERN stack!<br>
<img width = "640px" src = "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg"><br>
The specific technologies used to create this app are:
- HTML
- JavaScript
- React
- Axios
- Express
- [Create-React-App](https://github.com/facebook/create-react-app)
- React-DOM
- [MaterialUI](https://material-ui.com/) for styling

## Want to run it locally?
To install the application follow the instructions below:

	git clone git@github.com:ypangilinan/googlebooks
	cd googlebooks
	npm install
This should install the necessary packages from the Package.JSON needed for this application. 

In the terminal,run the Node.js application with the command below.

	npm start
  
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.  

### Assignment Requirements
* This application requires at minimum 2 pages, check out the following mockup images for each page:

  * [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Start by using the 07-Ins_Mern example as a base for your application.

2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

3. Using mongoose, then create a Book schema.

4. At a minimum, books should have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

* Creating `documents` in your `books` collection similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

* The layout should include at least two React Components for each page `Search` and `Saved`.

* Feel free to try out alternative CSS framework to Bootstrap.

6. Add the following Express routes for your app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

* Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

- - -
