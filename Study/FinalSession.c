#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <conio.h>

struct book{
	int code;
	char name[30];
	char author[30];
	char status[20];
};
	struct book *b;
	void showMenu();
	void getBooks(struct book *b, int n);
	void showBooks(struct book *b, int n);
	void searchByCode(struct book *b, int n);
	void searchByName(struct book *b, int n);
	void viewDetails(struct book *b, int n);
	void updateBookStatus(struct book *b, int n);

int main(){
	showMenu();
	printf("\nATTENTION!!! You do not have a library yet.\nLet's make one <3 <3 <3 :))\n\nPress enter to continue.\n");
	getch();
	int n, choice;
	printf("\nEnter number of the book in library: ");
	scanf("%d", &n);
	b = (struct book*)malloc(n*sizeof(struct book));
	getBooks(b, n);	
	do{
		showMenu();
		printf("\nEnter a choice (1-7) ");
		scanf("%d", &choice);
		if (choice == 1){
			printf("\nATTENTION!!! Run program again to change number of the book in library ");
			getBooks(b, n);
		}
		else if (choice == 2){
			showBooks(b, n);
		}
		else if (choice == 3){
			searchByCode(b, n);
		}
		else if (choice == 4){
			searchByName(b, n);		
		}
		else if (choice == 5){
			viewDetails(b, n);
		}
		else if (choice == 6){
			updateBookStatus(b, n);
		}
		else if (choice == 7){
			break;
		}
		else{
			printf("\nWrong input!!! Please try again.\n");
		}
	}while(choice != 7);
	free(b);
	return 0;
}

void showMenu(){
	printf("------------------------------");
	printf("\n|           MENU             |\n------------------------------");
	printf("\n| 1 |     Create library     |\n------------------------------");
	printf("\n| 2 |    Show the library    |\n------------------------------");
	printf("\n| 3 |  Search books by code  |\n------------------------------");
	printf("\n| 4 |  Search books by name  |\n------------------------------");
	printf("\n| 5 |   View book details    |\n------------------------------");
	printf("\n| 6 | Update the book status |\n------------------------------");
	printf("\n| 7 |         Exit           |\n------------------------------");
}

void getBooks(struct book *b, int n) //Initialize Library
{
	for (int i = 0; i <n ; i++){
		printf("\nEnter the %d book information!!!", i+1);
		printf("\nEnter name for book %d: ", i+1);
		fflush(stdin);
		gets((b+i)->name);
		printf("Enter code for the book %d: ", i+1);
		scanf("%d", &(b+i)->code);
		printf("Enter author name for the book %d: ", i+1);
		fflush(stdin);
		gets((b+i)->author);
		printf("Enter status for the book %d: ", i+1);
		fflush(stdin);
		gets((b+i)->status);	
	}
	printf("\nSuccesfully enter library!!!");
	printf("\nPress enter to continue.\n");
	getch();
}

void showBook(int i) //Show a book
{
	printf("\nThe %d book's information: ", i+1);
	printf("\nThe book's name: %s ", (b+i)->name);
	printf("\nThe book's code: %d", (b+i)->code);
	printf("\nThe book's author name : %s", (b+i)->author);
	printf("\nThe book's status: %s\n", (b+i)->status);
}

void showBooks(struct book *b, int n) //Allow staff to view all books in the library (code, name, author, borrowed or not)
{
	printf("\n\tTHE LIBRARY\n---------------------------------");
	for (int i = 0; i < n; i ++){ 
		showBook(i); 
	}
	printf("\nPress enter to continue.\n");
	getch();
}

void searchByCode(struct book *b, int n) //Allow staff to search books by code 
{
	int codeToFind;
	printf("\nEnter the code of the book that you want to search: ");
	scanf("%d", &codeToFind);
	for (int i = 0; i < n; i ++){
		if (codeToFind == (b+i)->code){
			printf("\nFounded.");
			showBook(i);
		}
	}
	printf("\nPress enter to continue.\n");
	getch();
}

void searchByName(struct book *b, int n) // and name.
{
	char nameToFind[40];
	printf("\nEnter the name of the book that you want to search: ");
	fflush(stdin);
	gets(nameToFind);
	for (int i = 0; i < n; i ++){
		if(strcmp((b+i)->name, nameToFind) == 0){
			printf("\nFounded.");
			showBook(i);
		}
	}
	printf("\nPress enter to continue.\n");
	getch();
}

void viewDetails(struct book *b, int n) //Allow staff to view book details including borrow and return history.
{
	char nameToFind[40];
	printf("\nEnter the name of the book that you want to see its details: ");
	fflush(stdin);
	gets(nameToFind);
	for (int i = 0; i < n; i ++){
		if(strcmp((b+i)->name, nameToFind) == 0){
			printf("\nThis is %s informatin: ", nameToFind);
			showBook(i);
		}
	}
	printf("\nPress enter to continue.\n");
	getch();
}

void updateBookStatus(struct book *b, int n) //Allow staff to update the book status once it is borrowed or returned.
{
	char nameToFind[40];
	char newStatus[20];
	printf("\nEnter the name of the book that you want to change its status: ");
	fflush(stdin);
	gets(nameToFind);
	for (int i = 0; i < n; i ++){
		if(strcmp((b+i)->name, nameToFind) == 0){
			printf("\nFounded.");
			showBook(i);
			printf("\nWhat is its status now? ");
			fflush(stdin);
			gets(newStatus);
			strcpy((b+i)->status, newStatus);
		}
		else{
			continue;
		}	
	printf("\nSuccessfully update the book status!!!");
	printf("\nPress enter to continue.\n");
	getch();
	}
}