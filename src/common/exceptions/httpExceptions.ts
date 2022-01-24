/* eslint-disable max-classes-per-file */
import { HttpException, HttpStatus } from "@nestjs/common";

export namespace CommumError {
	export class WithThisIdDoesNotExists extends HttpException {
		constructor(bookId: number) {
			super(
				{
					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
					message: `There is no book id ${bookId} registered in the database`,
				},
				HttpStatus.UNPROCESSABLE_ENTITY
			);
		}
	}
}

export namespace CreateUserErrors {
	export class UserWithNameAlreadyExists extends HttpException {
		constructor() {
			super(
				{
					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
					message: "There is already a user with this name registered in the system",
				},
				HttpStatus.UNPROCESSABLE_ENTITY
			);
		}
	}

	export class UserWithEmailAlreadyExists extends HttpException {
		constructor() {
			super(
				{
					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
					message: "There is already a user with this email registered in the system",
				},
				HttpStatus.UNPROCESSABLE_ENTITY
			);
		}
	}
}

export namespace LoginErrors {
	export class UserWithGoogleSubDoesNotExists extends HttpException {
		constructor() {
			super(
				{
					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
					message: "There is no user with this google id",
				},
				HttpStatus.UNPROCESSABLE_ENTITY
			);
		}
	}
}

// export namespace RegisterBookError {
// 	export class BookImageNotProvided extends HttpException {
// 		constructor() {
// 			super(
// 				{
// 					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
// 					message: "An image of the book is required for registration",
// 				},
// 				HttpStatus.UNPROCESSABLE_ENTITY
// 			);
// 		}
// 	}
// 	export class BookAlreadyExists extends HttpException {
// 		constructor(bookTitle: string) {
// 			super(
// 				{
// 					statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
// 					message: `There is already a book with ${bookTitle} title`,
// 				},
// 				HttpStatus.UNPROCESSABLE_ENTITY
// 			);
// 		}
// 	}
// }

// export namespace UpdateBookError {
// 	export class BookWithThisIdDoesNotExists extends CommumError.WithThisIdDoesNotExists {
// 		constructor(bookId: number) {
// 			super(bookId);
// 		}
// 	}
// }

// export namespace DeleteBookError {
// 	export class BookWithThisIdDoesNotExists extends CommumError.WithThisIdDoesNotExists {
// 		constructor(bookId: number) {
// 			super(bookId);
// 		}
// 	}
// }
