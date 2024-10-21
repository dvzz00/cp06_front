document.addEventListener('DOMContentLoaded', function () {
    const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
    const bookList = document.getElementById('book-list');
  
    fetch(booksEndpoint)
      .then(response => response.json())
      .then(books => {
        books.forEach(book => {
          const bookElement = document.createElement('div');
          bookElement.classList.add('book', `book-${book.id}`);
          bookElement.innerHTML = `
            <h3>${book.titulo}</h3>
            <img src="${book.imagem}" alt="${book.titulo}" width="200px">
            <p>${book.resumo}</p>
          `;//caso queria controlar o tamanho da imagem no sass/css, remova a propriedade width="200px"
          bookList.appendChild(bookElement);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar os livros:', error);
      });
  });  