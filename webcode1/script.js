async function fetchBooks() {
    const url = 'https://anapioficeandfire.com/api/books';
    const container = document.getElementById('book-container');
    const searchInput = document.getElementById('search-input');
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      const filteredData = data.slice(0, 10); // Limit to 10 books
  
      // Clear existing content in the container
      container.innerHTML = '';
  
      filteredData.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <h3>${book.name}</h3>
          <p>ISBN: ${book.isbn}</p>
          <p>Pages: ${book.numberOfPages}</p>
          <p>Authors: ${book.authors.join(', ')}</p>
          <p>Publisher: ${book.publisher}</p>
          <p>Released: ${book.released}</p>
          <p>Characters: ${book.characters.slice(0, 5).join(', ')}</p>
        `;
  
        container.appendChild(bookElement);
      });
  
      // Add event listener for search input
      searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();
        const bookElements = document.querySelectorAll('.book');
  
        bookElements.forEach(bookElement => {
          const bookTitle = bookElement.querySelector('h3').textContent.toLowerCase();
          const isMatch = bookTitle.includes(searchTerm);
  
          if (isMatch) {
            bookElement.classList.add('highlight');
          } else {
            bookElement.classList.remove('highlight');
          }
        });
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the fetchBooks function when the page is loaded
  window.addEventListener('DOMContentLoaded', fetchBooks);
  
  