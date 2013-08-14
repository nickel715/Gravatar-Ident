function replaceAvatars() {
    var images = document.getElementsByTagName('img');

    for (var i = images.length - 1; i >= 0; i--) {

        var src = images[i].getAttribute('src');

        if (src && src.indexOf('gravatar.com') !== -1) {

            var newUrl = src.replace('d=mm', 'd=identicon');
            images[i].setAttribute('src', newUrl);

        }

    }
}

replaceAvatars();

document.addEventListener("DOMSubtreeModified", function() {
    replaceAvatars();
}, false);
