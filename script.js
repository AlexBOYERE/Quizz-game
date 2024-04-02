const tempQuestions = [
    {
        'id': 1,
        'question': 'Paris est la capitale de la France.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/4gOM_dhV-t1brmmmff-vVkrqn-MVr0VtKF5jRvaZme8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRiL0xh/X1RvdXJfRWlmZmVs/X3Z1ZV9kZV9sYV9U/b3VyX1NhaW50LUph/Y3F1ZXMlMkNfUGFy/aXNfYW8lQzMlQkJ0/XzIwMTRfJTI4MiUy/OS5qcGcvNTEycHgt/TGFfVG91cl9FaWZm/ZWxfdnVlX2RlX2xh/X1RvdXJfU2FpbnQt/SmFjcXVlcyUyQ19Q/YXJpc19hbyVDMyVC/QnRfMjAxNF8lMjgy/JTI5LmpwZw',
        'answerText': 'La capitale de la France est Paris.',
    },
    {
        'id': 2,
        'question': 'Marseille est la capitale de la France.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/tY21wsjop2tpfcwwCKC7TfLoKMRd0N621BzAqjetGTM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQwL05v/dHJlX0RhbWVfZGVf/bGFfR2FyZGUuanBn/LzUxMnB4LU5vdHJl/X0RhbWVfZGVfbGFf/R2FyZGUuanBn',
        'answerText': 'La capitale de la France n\'est pas Marseille c\'est Paris.',
    },
    {
        'id': 3,
        'question': 'La Grande Muraille de Chine est visible depuis l\'espace.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/Jeoax33vhDCMahRAU3DLcl9LTxpExX-7o-B6Q8zkqKs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0dyZWF0V2Fs/bF8yMDA0X1N1bW1l/cl80LmpwZw',
        'answerText': 'La légende selon laquelle la Grande Muraille de Chine est la seule structure humaine visible depuis l\'espace est fausse.'
    },

    {
        'id': 4,
        'question': 'La Banquise est un océan.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/-IgyERJRl-9iGn2mRmfUezUTRC1cdUjwBWKNpXXrjYY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zLmZy/YW5jZTI0LmNvbS9t/ZWRpYS9kaXNwbGF5/LzA2YTM5ZGVlLTc3/YTUtMTFlYy1iYjU2/LTAwNTA1NmE5N2Uz/Ni93Ojk4MC9wOjE2/eDkvMDAwX1dhczg1/OTU3MjkuanBn',
        'answerText': 'La Banquise est une grande étendue de glace de mer qui recouvre l\'océan Arctique pendant une grande partie de l\'année. Ce n\'est pas un océan en soi .'
    },
    {
        'id': 5,
        'question': 'L\'Antarctique est le continent le plus chaud de la Terre.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/uhx2CukNzF9wD3VfQPZ1buGc1C2B8Bb4tldOHCyGUdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9zYjBxdzlm/ODRvZDIvMTExMjU4/LzUwZDFjMTA2OWU1/MzkzZmM1OWIzNGE3/NzVjMjVmMWYxL29y/bmUtaGFyYm91ci1h/bnRhcmN0aWNhLWhn/ci0xNTIzMjctX3Bo/b3RvX29zY2FyX2Zh/cnJlcmFfd2ViMS5q/cGc_cT03NSZ3PTE5/MjAmZm09d2VicA',
        'answerText': 'L\' Antarctique est en fait le continent le plus froid de la Terre, avec des températures extrêmement basses.'
    },
    {
        'id': 6,
        'question': 'Le Taj Mahal est situé en Inde.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/XNyTJja4jnZvs-D1TQU6jA29KNfyRZudcShrbmb5Z9w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cGhvdG9zLXByZW1p/dW0vdGFqLW1haGFs/Xzc4MzYxLTQ2NDEu/anBnP3NpemU9NjI2/JmV4dD1qcGc',
        'answerText': 'Oui, le Taj Mahal est situé à Agra, en Inde.'
    },
    {
        'id': 7,
        'question': 'Les kangourous sont originaires d\'Australie.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/xacm91hwx_CvpF4SHi0T24YElxwOArgmZPnbbP8H67U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTk1/MTUzMzY4L2ZyL3Bo/b3RvL2thbmdvdXJv/dS1yb3VnZS1kYW5z/LWxlcy1wcmFpcmll/cy1kZS1sb3V0YmFj/ay1hdXN0cmFsaWVu/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ySXpzT3U5V3ho/N1MzcnpjUXBLNUM5/ZWJIV2NxTVFkUGZ0/MTBXREdvam9nPQ',
        'answerText': 'Oui, les kangourous sont originaires d\'Australie.'
    },
    {
        'id': 8,
        'question': 'Le Sahara est le plus grand désert du monde.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/xLt-UTcW2R_fnN-Q0GXqKxQ_GCIXCaf7Afkgr8qtwTY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM1/MDgyNTg1L3Bob3Rv/L3NhaGFyYS1zY3Vs/cHR1cmVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Zanhl/dTVybG9RM0ItRElS/NzRNQ0FrckhLeEZJ/cGlJcGNpUDJEQXVz/WEswPQ',
        'answerText': 'Oui, le Sahara est le désert le plus grand et le plus chaud du monde.'
    },
    {
        'id': 9,
        'question': 'Le Japon est constitué de plusieurs centaines d\'îles.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/bA4tpdJwEIXmXzK-vrnJ5V-ZhgMcUYARMBGcY0EEG4g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMt/My5jbG91ZGluYXJ5/LmNvbS9qbnRvL2lt/YWdlL3VwbG9hZC93/XzY3MCxoXzQ1MCxj/X2ZpbGwsZl9hdXRv/LGZsX2xvc3N5LHFf/YXV0by92MS9tZWRp/YS9maWxlcl9wdWJs/aWMvZGIvNzgvZGI3/ODM2NTUtN2FjNS00/NWNjLWEyODAtM2Nl/ZDljNWMxNDBlL2Vu/b2Rlbl9wbmd6djM',
        'answerText': 'Oui, le Japon est constitué de plus de 6 800 îles.'
    },
    {
        'id': 10,
        'question': 'Le mont Everest est la montagne la plus haute du monde.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/-Ef9T7LTk-uPoJCxkMboKnKKrHRZkkH6h_xQK_O0B9g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmthemFkZW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA0L2V2ZXJlc3Qt/ZmxpY2tyLWUxNDk1/MDE2NzAzNjkxLmpw/Zw',
        'answerText': 'Oui, le mont Everest est le plus haut sommet de la Terre.'
    },
    {
        'id': 11,
        'question': 'La tour Eiffel est plus haute que le mont Everest.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/OmgzOZmU_Ub4XH9Gnib82xQt-C_l6oP46s9oWgNuttw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJhbmNlLXZveWFn/ZS5jb20vdmlzdWFs/cy9waG90b3MvdG91/ci1laWZmZWwtMzYz/ODFfdzEwMDAud2Vi/cA',
        'answerText': 'La tour Eiffel est bien plus petite que le mont Everest. La réponse est FAUX.'
    },
    {
        'id': 12,
        'question': 'Le Brésil est le plus grand pays d\'Amérique du Sud.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/ZB7o9-1E7SUAE99Ls2RQthOsodh8U1GoQCVo_tF3rsM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL1ByYWlhX2Rl/X0NvcGFjYWJhbmFf/LV9SaW9fZGVfSmFu/ZWlybyxfQnJhc2ls/LmpwZw',
        'answerText': 'Oui, le Brésil est le plus grand pays d\'Amérique du Sud.'
    },
    {
        'id': 13,
        'question': 'L\'Égypte est en Afrique.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/s1bMWmzMhuHOFSAwnEmx0z1NMoa9XN4FC95sX2g8gc4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhlL0FsZXhhbmRy/aWFfRWd5cHRfKDIz/NTEwODQ5MykuanBl/Zw',
        'answerText': 'Oui, l\'Égypte est un pays situé en Afrique du Nord-Est.'
    },
    {
        'id': 14,
        'question': 'La Statue de la Liberté est située à Londres.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/Scrj1Nb9mMidaBWZN10WVH1UmurSI7Ijp04Wl_D1K4U/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bnljLmZyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA3L3N0/YXR1ZV9saWJlcnRl/Mi5qcGc',
        'answerText': 'Non, la Statue de la Liberté est située à New York, aux États-Unis.'
    },
    {
        'id': 15,
        'question': 'La Grande Barrière de Corail se trouve au large de la côte de l\'Australie.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/LTU-370VAV6mbBDjEWnpIRnR7tY2g01XlYEUSYOAugc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/MWpvdXIxYWN0dS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDUvVklERU9f/YmFycmllcmUtY29y/YWlsLTkyN3g2MTgu/anBn',
        'answerText': 'Oui, la Grande Barrière de Corail est située au large de la côte nord-est de l\'Australie.'
    },
    {
        'id': 16,
        'question': 'Le lac Baïkal est le plus profond lac du monde.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/ShQSSHQgyM9e1uo50_QrpiIXha1EWvhJU6kc3d-NXHk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZXYubXUvaW1hZ2Vz/L2F0dHJhY3Rpb25z/LzY2NTgvOTYweDY0/MC80MDkzNTYuanBn',
        'answerText': 'Oui, le lac Baïkal en Sibérie est le lac le plus profond et le plus ancien du monde.'
    },
    {
        'id': 17,
        'question': 'La Cité interdite se trouve à Tokyo.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/4tEVeE_qi5V3MRDC3HorzQuzuWyREQbC5mthbv7QQrY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VmL1RoZV9Gb3Ji/aWRkZW5fQ2l0eV8t/X1ZpZXdfZnJvbV9D/b2FsX0hpbGwuanBn',
        'answerText': 'Non, la Cité interdite est située à Pékin, en Chine.'
    },
    {
        'id': 18,
        'question': 'Le Groenland est un pays indépendant.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/_5Ne1BvZ2aKkv7Bvp8QMqBh-9xXiK-DLUfHwyNR8wys/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9zYjBxdzlm/ODRvZDIvMTAyMzQ3/L2UzYzBkMTU0ODZk/MWY1NDE5NTAyYmM0/MWFmMDg4ZTM2L251/dWstZ3JlZW5sYW5k/LWhnci0xNDg4MTYt/cGhvdG9fc2h1dHRl/cnN0b2NrLmpwZz9x/PTc1Jnc9MTkyMCZm/bT13ZWJw',
        'answerText': 'Non, le Groenland est un territoire autonome du Danemark.'
    },
    {
        'id': 19,
        'question': 'La Finlande est le pays avec le moins de lacs au monde.',
        'answer': false,
        'imagePath': 'https://imgs.search.brave.com/HYfXSW1-vREv8ua82zzF3WmhxGez5qKFGxgReKNKkGM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtaW1hZ2VzLmxw/bnQuZnIvY2QtY3c4/MDkvaW1hZ2VzLzIw/MjQvMDMvMjAvMjYy/Njg1NDBscHctMjYy/Njg1NDEtbWVnYS11/bmUtanBnXzEwMTg5/MjQ1LmpwZw',
        'answerText': 'La Finlande possède plus de 187 000 lacs officiels, ce qui en fait le pays des mille lacs. La réponse est FAUX.'
    },
    {
        'id': 20,
        'question': 'Le français est la langue officielle du Canada.',
        'answer': true,
        'imagePath': 'https://imgs.search.brave.com/EqpmbN8fZr8KLI9cQsY0EleaftocF3Eob-cWLPr2tJs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAw/NjAxODM0L2ZyL3Bo/b3RvL2Nhbm8lQzMl/QUItc3VyLWxlLWxh/Yy1tb3JhaW5lLXBh/cmMtbmF0aW9uYWwt/ZGUtYmFuZmYtYWNj/dWVpbC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Vnd3MmND/dlFybFViSklKZ01H/TmRrLWpINHZnLUh2/MXo1SmVjRFRiOW45/TT0',
        'answerText': 'Oui, le français est l\'une des deux langues officielles du Canada, avec l\'anglais.'
    },
];

const imageField = document.getElementById('image');
const questionField = document.getElementById('question');
const scoreField = document.getElementById('score');
const recordField = document.getElementById('record');
const explicationCard = document.getElementById('explication');
const quizCard = document.getElementById('quiz');
const titleField = document.getElementById('title');
const descriptionField = document.getElementById('description');
const responseField = document.getElementById('response');

// Server side
let object;
let id = '';
let imagePath = '';
let question = '';
let answer = '';
let answerText = '';

// Stastistics
let score = 0;
let record = 0;

function startGame() {
    getQuestionFromServer();
}

function getQuestionFromServer() {
    // Get the question, image, answer from the server
    do {
        object = tempQuestions[Math.floor(Math.random() * tempQuestions.length)];
    } while (object.id === id);

    id = object.id;

    question = object.question;
    answer = object.answer;
    answerText = object.answerText;
    imagePath = object.imagePath;

    // Set the question, image, answer to the user
    questionField.textContent = question;
    imageField.src = imagePath;

    // Hide explication card
    explicationCard.classList.add('d-none');
    responseField.classList.remove('text-success');
    responseField.classList.remove('text-danger');

    // Display quiz card
    quizCard.classList.remove('d-none');
}

function getResponseFromUser(responseUser) {
    // Check if the response is correct
    if (responseUser === answer) {
        // Animation erreur ou réussite

        // Display the response to the user
        displayResponse(true);
        score++;
    } else {
        // Animation erreur ou réussite

        // Display the response to the user
        displayResponse(false);

        score = 0;
    }

    // Update statistic
    updateStatistic(score);
}

function updateStatistic(score) {
    scoreField.textContent = score;

    if (score > record) {
        record = score;
        recordField.textContent = score;
    }
}

function displayResponse(state) {
    // Hide quiz card
    quizCard.classList.add('d-none');

    // Display the response to the user
    responseField.textContent = (state === true) ? 'Bravo! Bonne réponse.' : 'Désolé! Mauvaise réponse.';
    let $class = (state === true) ? 'success' : 'danger';
    responseField.classList.add('text-' + $class);
    titleField.textContent = question;
    descriptionField.textContent = answerText;

    // Seter mes réponses
    explicationCard.classList.remove('d-none');
}

startGame();