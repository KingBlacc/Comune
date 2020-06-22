/**
 * Question 1
 */

const elements = [];

//Q 1.1
const sumOfCount = (elArr) => {
    let sum = 0;
    elArr.forEach(user => sum += user.count);
    alert(`Sum of element(s) count is ${sum}`);
    return sum;
}

//Q 1.2
const sortElements = (elArr) => {
    const newArr = elArr; 
    elArr.sort((a,b) => (a.count > b.count) ?  1 : -1);  
    elArr.forEach((element, index) => element['order'] = index);
    return newArr;
}

//Q 1.3
const addElement = (name, count) => {
    elements.push({name, count});
    return elements;
}

//Q 1.5
addNewElement = (name, count) => {
    const newElements = addElement(name, count);
    return sortElements(newElements);
}


/**
 * Question 2
 */

//Mock request
function getResponse() {
    return new Promise((resolve, reject) => {
        const timeout = Math.floor(Math.random() * 2000);
        setTimeout(() => {
        resolve(timeout);
        }, timeout);
    });
}

//Q 2.1
fetchData = () => {
    getResponse()
    .then(res => {
        console.log('Response', res);
    })
    .catch(err => {
        console.log('Error', err);
    })
}

//Q 2.2
const wrapperServicer = () => {
    return new Promise((resolve, reject) => {
        getResponse()
        .then(res => {
            if(res < 800) resolve(res);
            if(res > 800) reject(res);
        })
        .catch(err => reject(err))
    })
}

//Q 2.3
const displayTen = () => {
    const responsesCalled = [];
    
    for(var i = 0; i < 10 ; i++){
        wrapperServicer()
        .then(res => responsesCalled.push(res))
        .catch(err => responsesCalled.push(err));
    }

    return responsesCalled;
}

/**
 * Question 3
 */

 //Q 3.1
/**
 * Firstly because the function is not declared properly (It's missing a curly bracket after the parenthesis)
 * Secondly because we are attempting to mutate the this directly
 * State can only be updated throught this.setState
 */

 //Q 3.2
const increaseCount = (increase) => {
    this.setState(prevState => {
        return {
            count: prevState.count += increase
        }
    })
}

/**Q 3.3
 * When applications become larger I use redux to manage my state, 
 * redux helps us avail the entire application state globally. 
 * Using reducers to track what state to mutate and that way I am able to seperate
 * Reducers from each other and have less redundant state inside of my components
 * It makes it easy to manage user authentication throughout the app.
 * I can use conditionally statements to change component visibility based on the auth permissions too.
 * Unlike hooks I can combine all reducers and use one Provider to persist the data 
 */
