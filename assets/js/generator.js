function generateChapterLink(chapterId, chapterName, wasFound) {
    let chapterLink = createElement("a", "chapter-link");
        chapterLink.innerHTML = `<span class="index">${chapterId}.</span> ${chapterName}`;

    if (wasFound) {
        chapterLink.href = `#chapter-${chapterId}`;
    }

    return chapterLink;
}

function generateChapterSection(chapterId, chapterName, wordsList, loadedWordsModels) {
    let title = createElement("h2", "title");
        title.id = `chapter-${chapterId}`;
        title.innerHTML = `<span class="index">${chapterId}.</span> ${chapterName}`;

    let chapterSection = document.createElement("section");
        chapterSection.append(title);

    let cardsList = createElement("div", "word-cards");
    wordsList.forEach(item => cardsList.append(generateWordCard(loadedWordsModels.get(item))));

    chapterSection.append(cardsList);
    return chapterSection;
}

function generateWordCard(wordModel) {
    let wordCard = createElement("div", "card");

    let word = wordModel[2];
    if (word) {
        let wordNode = document.createElement("h4");
            wordNode.innerHTML = word;

        let node = createElement("div", "header");
        node.append(wordNode);

        let transcription = wordModel[3];
        if (transcription) {
            let transcriptionNode = document.createElement("h5");
                transcriptionNode.innerHTML = transcription;

            node.append(transcriptionNode);
        }

        let location = wordModel[1];
        if (location && location.length === 2) {
            let locationNode = document.createElement("h6");
                locationNode.innerHTML = `${location[0]} page, ${location[1]} paragraph`;

            node.append(locationNode);
        }

        wordCard.append(node);
    }

    let meaning = wordModel[4];
    let translation = wordModel[5];
    if (meaning || translation) {
        let meaningNode = document.createElement("p");
            meaningNode.innerHTML = meaning ? meaning : "(no meaning)";

        let translationNode = document.createElement("p");
            translationNode.innerHTML = translation ? translation : "(нет перевода)";

        let node = createElement("div", "meaning");
            node.append(meaningNode);
            node.append(translationNode);

        wordCard.append(node);
    }

    let examples = wordModel[6];
    if (examples && examples.length % 2 === 0) {
        let node = createElement("div", "examples");
            node.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-book-open\"><path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/></svg>";

        let listNode = createElement("div", "list");
        for (let i = 0; i < examples.length; i++) {
            let listItem = createElement("p", i % 2 === 0 ? "en" : "ru");
                listItem.innerHTML = examples[i];

            listNode.append(listItem);
        }

        node.append(listNode);
        wordCard.append(node);
    }

    return wordCard;
}

function createElement(tagName, styleClass) {
    let element = document.createElement(tagName);
        element.classList.add(styleClass);

    return element;
}