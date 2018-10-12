
function getFirstSelector(selector)  {
    return document.querySelector(selector);

    // want any selector - so don't want to specify class or id

  // - DOES NOT WORK - return document.getElementsByTagName(selector)[0]; ...
}

function nestedTarget() { 
    return document.querySelector('#nested .target');
}

// THIS WAY DOES NOT PASS TESTS FOR SOME REASON...


// function increaseRankBy(n) { 
//     const rankedLists = document.querySelectorAll('.ranked-list li')
//     // rankedLists.forE(i => parseInt(i.innerText) + n)  
//     for (let l of rankedLists) {
//         l.innerText = parseInt(l.innerText) + n
//     } 
// }


// ALI's way 
function increaseRankBy(n) {
    // Get the ranked list 
    const rankedLists = document.querySelectorAll('.ranked-list');
    // get ranked list, without getting the list elements
  
    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children;
    //   for loop on the ul
  
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
         //   for loop on the li elements - function actually acts to add n
        //  here - on each of the children (li) elements, there is assignment 
      }
    }
    
}



function deepestChild() { 
    let node = document.getElementById('grand-node');

    let nextNode = node.children[0];
    // nextNode basically looks for a child node, if there is a child node then the
    // iterations will continue, otherwise it will stop, at which point node is returned 
    
    while (nextNode) {
        node = nextNode;
        nextNode = node.children[0];
    }
    
    return node;
}