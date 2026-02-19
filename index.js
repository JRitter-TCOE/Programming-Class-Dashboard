const center = $('#content_center');

// Feed holds post objects
const feed = [];


// Displays a Post Preview in the feed on the dashboad
function displayPostPreview({title, body, date, img}) {
    const post = $('<article class="post_preview"></article>');
    post.append(`<img src="${img}" width="256" height="256">`);
    post.append($(`<h2>${title}</h2>`));
    post.append(`<p>${date}</p>`);
    post.append(`<p>${body}</p>`);
    center.append(post);
}


// Example Post for testing
const examplePost = {
    title: 'Example Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: new Date().toLocaleDateString(),
    img: "./images/laptop.avif"
}

// Display many example posts for testing
for (let i=0; i<10; i++) {
    displayPostPreview(examplePost);
}