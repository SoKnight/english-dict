document.addEventListener('DOMContentLoaded', () => {
    const chaptersList = document.querySelector("div.chapters");
    const contentPane = document.querySelector("div.content");

    const loadedChapters = new Map();       // <chapterId> -> <wordsList>
    const loadedWordModels = new Map();     // <word> -> <wordModel>

    for (let wordModel of words) {
        let chapterId = wordModel[0];
        let word = wordModel[2];

        if (!chapterId || !word)
            continue;

        let wordsList = loadedChapters.get(chapterId);
        if (!wordsList) {
            wordsList = [word];
            loadedChapters.set(chapterId, wordsList);
        } else {
            wordsList.push(word);
        }

        loadedWordModels.set(word, wordModel);
    }

    console.log(`Loaded ${loadedWordModels.size} word(s):`);
    console.log(loadedWordModels);

    for (let chapterId in chapters) {
        let chapterName = chapters[chapterId];
        let wordsList = loadedChapters.get(chapterId);

        let chapterLink = generateChapterLink(chapterId, chapterName, !!wordsList);
        chaptersList.append(chapterLink);

        if (wordsList) {
            let chapterSection = generateChapterSection(chapterId, chapterName, wordsList, loadedWordModels);
            contentPane.append(chapterSection);
        }
    }
})