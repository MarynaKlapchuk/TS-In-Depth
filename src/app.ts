import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import {
    purge,
    getAllBooks,
    printRefBook,
    getObjectProperty,
    createCustomer,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    getTitles,
    logSearchResults,
} from './functions';
import { Book, Librarian, Magazine } from './interfaces';
import { Library } from './classes/library';
import { Category } from './enums';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from './types';
// import type { Library } from './classes/library';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ================== Task 2.01 ==================
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// ================== Task 3.01 ==================
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomer IDBCursor;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// const a = typeof createCustomerID;
// console.log(idGenerator('Boris', 20));

// ================== Task 3.02 ==================
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));
// logFirstAvailable();
// console.log(getBookByID(1));

// console.log(checkOutBooks('Noname Customer', 1, 3, 4));
// console.log(checkOutBooks('Noname Customer', ...[1, 3, 4]));

// ================== Task 3.03 ==================
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));

// ================== Task 3.04 ==================
// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(123));

// ================== Task 4.01 ==================
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
//     // markDamaged(reason: string) {
//     //     console.log(`Damaged: ${reason}`);
//     // },
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// ================== Task 4.02 ==================
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// ================== Task 4.03 ==================
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 2,
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null,
// };

// ================== Task 4.04 ==================
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// ================== Task 4.05 ==================
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamage'));
// console.log(getProperty(myBook, 'isbn'));

// ================== Task 5.01 ==================
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// =============== Task 5.02, 5.03 ===============
// const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());
// refBook.printCitation();

// ================== Task 5.04 ==================
// // const favoriteLibrarian = new UniversityLibrarian();
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// // const favoriteLibrarian: Librarian & A = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLibrarian.a = 2;

// ================== Task 5.05 ==================
// const personBook: PersonBook ={
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown'
// };

// const options: TOptions = { duration: 20 };
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// ================== Task 6.03, 6.04 ==================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// ================== Task 6.05 ==================
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// ================== Task 6.06 ==================
// let library: Library;
// const library: Library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna',
// };

// ================== Task 7.01 ==================
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// // const result = purge<Book>(inventory);
// // const result = purge(inventory);
// const result = purge([1, 2, 3]);
// console.log(result);

// ================== Task 7.02, 7.03 ==================
// // const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// // console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[1], 'author'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'author'));

// ================== Task 7.04 ==================
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular',
// };

// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300,
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// =============== Task 8.01, 8.02 ===============
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;
// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1['printLibrarian']();

// ================== Task 8.03 ==================
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian1);
// favoriteLibrarian1.assistFaculty = null;
// favoriteLibrarian1.teachCommunity = null;

// ================== Task 8.04 ==================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();

// ================== Task 8.05 ==================
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// ================== Task 8.06 ==================
// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// console.log(favoriteLibrarian);

// ================== Task 8.07 ==================
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// // refBook.copies = 10;
// refBook.copies = -10;
// console.log(refBook.copies);

// ================== Task 9.01 ==================
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// ================== Task 9.02 ==================
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// ================== Task 9.03 ==================
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End');
