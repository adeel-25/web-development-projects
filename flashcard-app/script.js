const flashcards = {
    dataStructures: [
        {
            question: "What is the difference between an array and a linked list?",
            answer: "An array stores elements in contiguous memory and allows fast index access. A linked list stores nodes connected by pointers and is easier for insertion and deletion."
        },
        {
            question: "What is the time complexity of binary search?",
            answer: "O(log n), because the search space is divided in half after each comparison."
        },
        {
            question: "What is a stack?",
            answer: "A stack is a linear data structure that follows LIFO: Last In, First Out."
        },
        {
            question: "What is a queue?",
            answer: "A queue is a linear data structure that follows FIFO: First In, First Out."
        },
        {
            question: "What is a hash table?",
            answer: "A hash table stores key-value pairs and uses a hash function to find the index where data should be stored."
        },
        {
            question: "What is collision in hashing?",
            answer: "A collision happens when two different keys produce the same hash index."
        },
        {
            question: "What is recursion?",
            answer: "Recursion is when a function calls itself to solve smaller versions of the same problem."
        },
        {
            question: "What is the difference between BFS and DFS?",
            answer: "BFS explores level by level using a queue. DFS explores as deep as possible using a stack or recursion."
        },
        {
            question: "What is a binary search tree?",
            answer: "A binary search tree is a tree where left child values are smaller than the root and right child values are greater than the root."
        },
        {
            question: "What is Big O notation?",
            answer: "Big O describes how the runtime or memory usage of an algorithm grows as input size increases."
        }
    ],

    operatingSystems: [
        {
            question: "What is a process?",
            answer: "A process is a program in execution. It has its own memory space and system resources."
        },
        {
            question: "What is a thread?",
            answer: "A thread is a smaller unit of execution inside a process. Threads share the same memory space of the process."
        },
        {
            question: "What is the difference between a process and a thread?",
            answer: "Processes have separate memory spaces. Threads share memory within the same process."
        },
        {
            question: "What is virtual memory?",
            answer: "Virtual memory gives each process the illusion of having a large continuous memory space, even if physical memory is limited."
        },
        {
            question: "What is a system call?",
            answer: "A system call is a request from a user program to the operating system for a service, such as file access or memory allocation."
        },
        {
            question: "What is a race condition?",
            answer: "A race condition happens when multiple threads access shared data at the same time and the result depends on execution order."
        },
        {
            question: "What is deadlock?",
            answer: "Deadlock happens when processes are stuck waiting for each other forever and none can continue."
        },
        {
            question: "What are the four conditions for deadlock?",
            answer: "Mutual exclusion, hold and wait, no preemption, and circular wait."
        },
        {
            question: "What is CPU scheduling?",
            answer: "CPU scheduling is the method the operating system uses to decide which process runs next on the CPU."
        },
        {
            question: "What is context switching?",
            answer: "Context switching is when the operating system saves the state of one process and loads the state of another process."
        }
    ],

    java: [
        {
            question: "What is a class in Java?",
            answer: "A class is a blueprint for creating objects. It defines fields and methods."
        },
        {
            question: "What is an object in Java?",
            answer: "An object is an instance of a class. It has data and behavior."
        },
        {
            question: "What is the main method in Java?",
            answer: "The main method is the starting point of a Java program: public static void main(String[] args)."
        },
        {
            question: "What is inheritance?",
            answer: "Inheritance allows one class to acquire fields and methods from another class using extends."
        },
        {
            question: "What is polymorphism?",
            answer: "Polymorphism allows the same method call to behave differently depending on the object type."
        },
        {
            question: "What is encapsulation?",
            answer: "Encapsulation means hiding data using private fields and accessing it through public methods."
        },
        {
            question: "What is the difference between == and .equals() in Java?",
            answer: "== compares references for objects, while .equals() compares object contents if the method is properly defined."
        },
        {
            question: "What is an array in Java?",
            answer: "An array is a fixed-size collection that stores elements of the same data type."
        },
        {
            question: "What is a constructor?",
            answer: "A constructor is a special method used to initialize objects when they are created."
        },
        {
            question: "What is pass-by-value in Java?",
            answer: "Java passes copies of values to methods. For objects, the reference value is copied, so methods can change the object's fields."
        }
    ]
};

let currentSection = "";
let currentIndex = 0;
let showingAnswer = false;

function showSection(sectionName) {
    currentSection = sectionName;
    currentIndex = 0;
    showingAnswer = false;

    document.getElementById("sections").style.display = "none";
    document.getElementById("flashcardArea").style.display = "block";

    if (sectionName === "dataStructures") {
        document.getElementById("sectionTitle").innerHTML = "Data Structures";
    } else if (sectionName === "operatingSystems") {
        document.getElementById("sectionTitle").innerHTML = "Operating Systems";
    } else {
        document.getElementById("sectionTitle").innerHTML = "Intro to Java";
    }

    showCard();
}

function showCard() {
    let card = flashcards[currentSection][currentIndex];

    document.getElementById("card").innerHTML = card.question;

    document.getElementById("counter").innerHTML =
        "Card " + (currentIndex + 1) + " of " + flashcards[currentSection].length;

    showingAnswer = false;
}

function flipCard() {
    let card = flashcards[currentSection][currentIndex];

    if (showingAnswer === false) {
        document.getElementById("card").innerHTML = card.answer;
        showingAnswer = true;
    } else {
        document.getElementById("card").innerHTML = card.question;
        showingAnswer = false;
    }
}

function nextCard() {
    if (currentIndex < flashcards[currentSection].length - 1) {
        currentIndex++;
        showCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        showCard();
    }
}

function goBack() {
    document.getElementById("sections").style.display = "block";
    document.getElementById("flashcardArea").style.display = "none";
}