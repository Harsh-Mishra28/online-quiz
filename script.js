 
        const categories = {
            mathematics: {
                name: 'Mathematics',
                icon: '🔢',
                description: 'Test your mathematical skills and problem-solving abilities',
                questions: [
                    { q: "What is 15% of 200?", opts: ["25", "30", "35", "40"], ans: 1 },
                    { q: "If a triangle has angles of 60° and 80°, what is the third angle?", opts: ["30°", "40°", "50°", "60°"], ans: 1 },
                    { q: "What is the square root of 144?", opts: ["10", "11", "12", "13"], ans: 2 },
                    { q: "What is 7 × 8?", opts: ["54", "56", "58", "60"], ans: 1 },
                    { q: "If x + 5 = 12, what is x?", opts: ["5", "6", "7", "8"], ans: 2 },
                    { q: "What is 3/4 as a percentage?", opts: ["65%", "70%", "75%", "80%"], ans: 2 },
                    { q: "What is the value of π (pi) approximately?", opts: ["2.14", "3.14", "4.14", "5.14"], ans: 1 },
                    { q: "What is 2³?", opts: ["6", "8", "9", "12"], ans: 1 },
                    { q: "What is the perimeter of a square with side 5cm?", opts: ["15cm", "20cm", "25cm", "30cm"], ans: 1 },
                    { q: "What is 100 ÷ 4?", opts: ["20", "25", "30", "35"], ans: 1 }
                ]
            },
            science: {
                name: 'Science',
                icon: '🔬',
                description: 'Explore physics, chemistry, and biology concepts',
                questions: [
                    { q: "What is the chemical symbol for Gold?", opts: ["Go", "Gd", "Au", "Ag"], ans: 2 },
                    { q: "What planet is closest to the Sun?", opts: ["Venus", "Mercury", "Mars", "Earth"], ans: 1 },
                    { q: "What is the powerhouse of the cell?", opts: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], ans: 1 },
                    { q: "What is the speed of light?", opts: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], ans: 0 },
                    { q: "What gas do plants absorb from the atmosphere?", opts: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], ans: 2 },
                    { q: "How many bones are in the adult human body?", opts: ["186", "206", "226", "246"], ans: 1 },
                    { q: "What is H2O commonly known as?", opts: ["Hydrogen", "Water", "Oxygen", "Salt"], ans: 1 },
                    { q: "What force keeps us on the ground?", opts: ["Magnetism", "Friction", "Gravity", "Pressure"], ans: 2 },
                    { q: "What is the largest organ in the human body?", opts: ["Heart", "Brain", "Liver", "Skin"], ans: 3 },
                    { q: "At what temperature does water boil (Celsius)?", opts: ["90°C", "100°C", "110°C", "120°C"], ans: 1 }
                ]
            },
            history: {
                name: 'History',
                icon: '📜',
                description: 'Journey through important historical events and figures',
                questions: [
                    { q: "In which year did World War II end?", opts: ["1943", "1944", "1945", "1946"], ans: 2 },
                    { q: "Who was the first President of the United States?", opts: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"], ans: 1 },
                    { q: "Which ancient wonder is still standing today?", opts: ["Hanging Gardens", "Great Pyramid of Giza", "Colossus of Rhodes", "Lighthouse of Alexandria"], ans: 1 },
                    { q: "What year did the Titanic sink?", opts: ["1910", "1911", "1912", "1913"], ans: 2 },
                    { q: "Who painted the Mona Lisa?", opts: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"], ans: 2 },
                    { q: "Which empire built Machu Picchu?", opts: ["Aztec", "Maya", "Inca", "Olmec"], ans: 2 },
                    { q: "What year did the Berlin Wall fall?", opts: ["1987", "1988", "1989", "1990"], ans: 2 },
                    { q: "Who was known as the 'Iron Lady'?", opts: ["Queen Elizabeth", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"], ans: 1 },
                    { q: "In which year did India gain independence?", opts: ["1945", "1946", "1947", "1948"], ans: 2 },
                    { q: "Who discovered America in 1492?", opts: ["Vasco da Gama", "Ferdinand Magellan", "Christopher Columbus", "Marco Polo"], ans: 2 }
                ]
            },
            geography: {
                name: 'Geography',
                icon: '🌍',
                description: 'Test your knowledge of countries, capitals, and landmarks',
                questions: [
                    { q: "What is the capital of France?", opts: ["London", "Berlin", "Paris", "Madrid"], ans: 2 },
                    { q: "Which is the largest ocean on Earth?", opts: ["Atlantic", "Indian", "Arctic", "Pacific"], ans: 3 },
                    { q: "What is the longest river in the world?", opts: ["Amazon", "Nile", "Yangtze", "Mississippi"], ans: 1 },
                    { q: "How many continents are there?", opts: ["5", "6", "7", "8"], ans: 2 },
                    { q: "What is the smallest country in the world?", opts: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], ans: 1 },
                    { q: "Which country has the most islands?", opts: ["Indonesia", "Philippines", "Sweden", "Norway"], ans: 2 },
                    { q: "What is the capital of Australia?", opts: ["Sydney", "Melbourne", "Canberra", "Perth"], ans: 2 },
                    { q: "Which desert is the largest in the world?", opts: ["Sahara", "Arabian", "Gobi", "Antarctic"], ans: 3 },
                    { q: "What is the highest mountain in the world?", opts: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], ans: 2 },
                    { q: "Which country is home to the kangaroo?", opts: ["New Zealand", "Papua New Guinea", "Australia", "Indonesia"], ans: 2 }
                ]
            },
            reasoning: {
                name: 'Logical Reasoning',
                icon: '🧩',
                description: 'Challenge your logical thinking and problem-solving skills',
                questions: [
                    { q: "If all Bloops are Razzies and all Razzies are Lazzies, all Bloops are definitely Lazzies?", opts: ["True", "False", "Cannot say", "Sometimes"], ans: 0 },
                    { q: "What comes next: 2, 4, 8, 16, __?", opts: ["24", "32", "28", "20"], ans: 1 },
                    { q: "If A = 1, B = 2, C = 3, what does CAT equal?", opts: ["24", "27", "21", "30"], ans: 0 },
                    { q: "Which is the odd one out: Dog, Cat, Lion, Table?", opts: ["Dog", "Cat", "Lion", "Table"], ans: 3 },
                    { q: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?", opts: ["5 minutes", "10 minutes", "100 minutes", "20 minutes"], ans: 0 },
                    { q: "What is the next number: 1, 1, 2, 3, 5, 8, __?", opts: ["11", "12", "13", "14"], ans: 2 },
                    { q: "If you have 3 apples and you take away 2, how many do you have?", opts: ["1", "2", "3", "5"], ans: 1 },
                    { q: "A clock shows 3:15. What is the angle between hour and minute hands?", opts: ["0°", "7.5°", "15°", "30°"], ans: 1 },
                    { q: "What comes next: J, F, M, A, M, J, __?", opts: ["J", "A", "S", "O"], ans: 0 },
                    { q: "If some Zips are Zaps and all Zaps are Zops, are some Zips definitely Zops?", opts: ["Yes", "No", "Cannot say", "Maybe"], ans: 0 }
                ]
            },
            politics: {
                name: 'Politics',
                icon: '🏛️',
                description: 'Test your knowledge of political systems and world leaders',
                questions: [
                    { q: "How many articles are there in the Indian Constitution?", opts: ["395", "396", "397", "398"], ans: 0 },
                    { q: "Who is known as the Father of the Indian Constitution?", opts: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"], ans: 2 },
                    { q: "What is the term length for a US President?", opts: ["3 years", "4 years", "5 years", "6 years"], ans: 1 },
                    { q: "Which is the largest democracy in the world?", opts: ["USA", "India", "Brazil", "Indonesia"], ans: 1 },
                    { q: "What does UN stand for?", opts: ["United Nations", "Universal Network", "Union of Nations", "Unity Network"], ans: 0 },
                    { q: "Who was the first female Prime Minister in the world?", opts: ["Indira Gandhi", "Margaret Thatcher", "Sirimavo Bandaranaike", "Golda Meir"], ans: 2 },
                    { q: "How many permanent members are in the UN Security Council?", opts: ["4", "5", "6", "7"], ans: 1 },
                    { q: "What is the capital of the European Union?", opts: ["Paris", "Berlin", "Brussels", "Amsterdam"], ans: 2 },
                    { q: "Who has the power to declare war in the US?", opts: ["President", "Congress", "Supreme Court", "Pentagon"], ans: 1 },
                    { q: "What is the minimum age to become President of India?", opts: ["30", "35", "40", "45"], ans: 1 }
                ]
            },
            technology: {
                name: 'Technology',
                icon: '💻',
                description: 'Explore the world of computers, internet, and innovations',
                questions: [
                    { q: "Who is known as the father of computers?", opts: ["Steve Jobs", "Bill Gates", "Charles Babbage", "Alan Turing"], ans: 2 },
                    { q: "What does CPU stand for?", opts: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], ans: 0 },
                    { q: "Which company developed the iPhone?", opts: ["Samsung", "Apple", "Google", "Microsoft"], ans: 1 },
                    { q: "What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], ans: 0 },
                    { q: "Who founded Microsoft?", opts: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], ans: 1 },
                    { q: "What year was Google founded?", opts: ["1996", "1997", "1998", "1999"], ans: 2 },
                    { q: "What does AI stand for?", opts: ["Automated Intelligence", "Artificial Intelligence", "Advanced Internet", "Application Interface"], ans: 1 },
                    { q: "Which programming language is known as the 'language of the web'?", opts: ["Python", "Java", "JavaScript", "C++"], ans: 2 },
                    { q: "What does USB stand for?", opts: ["Universal Serial Bus", "United System Bus", "Universal System Board", "Unified Serial Board"], ans: 0 },
                    { q: "Who founded Facebook?", opts: ["Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos"], ans: 2 }
                ]
            },
            literature: {
                name: 'Literature',
                icon: '📚',
                description: 'Dive into the world of books, authors, and literary works',
                questions: [
                    { q: "Who wrote 'Romeo and Juliet'?", opts: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], ans: 1 },
                    { q: "Which book begins with 'It was the best of times, it was the worst of times'?", opts: ["Great Expectations", "Oliver Twist", "A Tale of Two Cities", "David Copperfield"], ans: 2 },
                    { q: "Who wrote '1984'?", opts: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"], ans: 1 },
                    { q: "What is the first book of the Harry Potter series?", opts: ["Chamber of Secrets", "Prisoner of Azkaban", "Philosopher's Stone", "Goblet of Fire"], ans: 2 },
                    { q: "Who wrote 'Pride and Prejudice'?", opts: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "George Eliot"], ans: 2 },
                    { q: "In which country was Agatha Christie born?", opts: ["USA", "England", "France", "Ireland"], ans: 1 },
                    { q: "Who wrote 'The Great Gatsby'?", opts: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"], ans: 1 },
                    { q: "What is the best-selling book of all time?", opts: ["Harry Potter", "Lord of the Rings", "The Bible", "Don Quixote"], ans: 2 },
                    { q: "Who wrote 'To Kill a Mockingbird'?", opts: ["Harper Lee", "Truman Capote", "Tennessee Williams", "Flannery O'Connor"], ans: 0 },
                    { q: "In what year was the first Harry Potter book published?", opts: ["1995", "1996", "1997", "1998"], ans: 2 }
                ]
            }
        };

        let currentUser = null;
        let currentCategory = null;
        let currentQuestions = [];
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let questionTimer = null;
        let timeLeft = 20;
        let quizStartTime = null;
        let totalQuizTime = 0;

        function login() {
            const userName = document.getElementById('userName').value.trim();
            if (!userName) {
                alert('Please enter your name');
                return;
            }

            currentUser = {
                name: userName,
                loginTime: new Date().toISOString()
            };

            const userData = JSON.parse(localStorage.getItem('quizUsers') || '{}');
            if (!userData[userName]) {
                userData[userName] = {
                    name: userName,
                    attempts: 0,
                    scores: []
                };
            }
            localStorage.setItem('quizUsers', JSON.stringify(userData));

            showScreen('homeScreen');
            updateNavbar();
            loadCategories();
        }

        function updateNavbar() {
            document.getElementById('navbar').style.display = 'flex';
            const initial = currentUser.name.charAt(0).toUpperCase();
            document.getElementById('userInfo').innerHTML = `
                <div class="user-avatar">${initial}</div>
                <div class="user-name">${currentUser.name}</div>
                <button class="logout-btn" onclick="logout()">Logout</button>
            `;
        }

        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                currentUser = null;
                document.getElementById('navbar').style.display = 'none';
                showScreen('loginScreen');
            }
        }

        function showHome() {
            showScreen('homeScreen');
            updateNavLinks('home');
        }

        function scrollToCategories() {
            showScreen('homeScreen');
            setTimeout(() => {
                document.getElementById('categoriesSection').scrollIntoView({ behavior: 'smooth' });
            }, 100);
            updateNavLinks('categories');
        }

        function updateNavLinks(active) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (active === 'home') {
                document.querySelectorAll('.nav-link')[0].classList.add('active');
            } else if (active === 'categories') {
                document.querySelectorAll('.nav-link')[1].classList.add('active');
            }
        }

        function loadCategories() {
            const grid = document.getElementById('categoryGrid');
            grid.innerHTML = '';

            Object.keys(categories).forEach(key => {
                const cat = categories[key];
                const card = document.createElement('div');
                card.className = 'category-card';
                card.onclick = () => startQuiz(key);
                
                const userData = JSON.parse(localStorage.getItem('quizUsers') || '{}');
                const userScores = userData[currentUser.name]?.scores.filter(s => s.category === key) || [];
                const attempts = userScores.length;
                const bestScore = attempts > 0 ? Math.max(...userScores.map(s => s.score)) : 0;

                card.innerHTML = `
                    <div class="category-icon">${cat.icon}</div>
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                    <div class="category-stats">
                        <div class="stat">
                            <div class="stat-value">${cat.questions.length}</div>
                            <div class="stat-label">Questions</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${attempts}</div>
                            <div class="stat-label">Attempts</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${bestScore}</div>
                            <div class="stat-label">Best Score</div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function startQuiz(categoryKey) {
            currentCategory = categoryKey;
            currentQuestions = shuffleArray([...categories[categoryKey].questions]);
            currentQuestionIndex = 0;
            userAnswers = new Array(currentQuestions.length).fill(null);
            quizStartTime = Date.now();
            totalQuizTime = 0;

            document.getElementById('quizTitle').textContent = categories[categoryKey].name + ' Quiz';
            showScreen('quizScreen');
            loadQuestion();
        }

        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        function loadQuestion() {
            const question = currentQuestions[currentQuestionIndex];
            document.getElementById('questionText').textContent = question.q;
            document.getElementById('questionCounter').textContent = 
                `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

            const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';

            const optionsGrid = document.getElementById('optionsGrid');
            optionsGrid.innerHTML = '';

            const letters = ['A', 'B', 'C', 'D'];
            question.opts.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                if (userAnswers[currentQuestionIndex] === index) {
                    optionDiv.classList.add('selected');
                }

                optionDiv.innerHTML = `
                    <div class="option-letter">${letters[index]}</div>
                    <div>${option}</div>
                `;
                optionDiv.onclick = () => selectAnswer(index);
                optionsGrid.appendChild(optionDiv);
            });

            startQuestionTimer();
        }

        function startQuestionTimer() {
            clearInterval(questionTimer);
            timeLeft = 20;
            document.getElementById('timerCircle').textContent = timeLeft;
            document.getElementById('timerCircle').classList.remove('warning');

            questionTimer = setInterval(() => {
                timeLeft--;
                document.getElementById('timerCircle').textContent = timeLeft;

                if (timeLeft <= 5) {
                    document.getElementById('timerCircle').classList.add('warning');
                }

                if (timeLeft <= 0) {
                    clearInterval(questionTimer);
                    nextQuestion();
                }
            }, 1000);
        }

        function selectAnswer(index) {
            userAnswers[currentQuestionIndex] = index;
            
            const options = document.querySelectorAll('.option');
            options.forEach((opt, i) => {
                opt.classList.remove('selected');
                if (i === index) {
                    opt.classList.add('selected');
                }
            });

            setTimeout(() => nextQuestion(), 500);
        }

        function nextQuestion() {
            clearInterval(questionTimer);

            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            clearInterval(questionTimer);
            totalQuizTime = Math.floor((Date.now() - quizStartTime) / 1000);

            let correct = 0;
            userAnswers.forEach((answer, index) => {
                if (answer === currentQuestions[index].ans) {
                    correct++;
                }
            });

            const wrong = currentQuestions.length - correct;
            const percentage = Math.round((correct / currentQuestions.length) * 100);

            const userData = JSON.parse(localStorage.getItem('quizUsers') || '{}');
            if (!userData[currentUser.name].scores) {
                userData[currentUser.name].scores = [];
            }
            userData[currentUser.name].scores.push({
                category: currentCategory,
                score: correct,
                total: currentQuestions.length,
                percentage: percentage,
                time: totalQuizTime,
                date: new Date().toISOString()
            });
            userData[currentUser.name].attempts++;
            localStorage.setItem('quizUsers', JSON.stringify(userData));

            document.getElementById('scoreValue').textContent = `${correct}/${currentQuestions.length}`;
            document.getElementById('percentageValue').textContent = `${percentage}%`;
            document.getElementById('correctAnswers').textContent = correct;
            document.getElementById('wrongAnswers').textContent = wrong;
            document.getElementById('totalTime').textContent = `${totalQuizTime}s`;

            let message = '';
            if (percentage >= 80) {
                message = '🌟 Outstanding Performance!';
            } else if (percentage >= 60) {
                message = '👏 Great Job!';
            } else if (percentage >= 40) {
                message = '👍 Good Effort!';
            } else {
                message = '💪 Keep Practicing!';
            }
            document.getElementById('resultMessage').textContent = message;

            const reviewContainer = document.getElementById('answersReview');
            reviewContainer.innerHTML = '';

            currentQuestions.forEach((question, index) => {
                const userAnswer = userAnswers[index];
                const correctAnswer = question.ans;
                const isCorrect = userAnswer === correctAnswer;

                const answerItem = document.createElement('div');
                answerItem.className = `answer-item ${isCorrect ? 'correct' : 'incorrect'}`;
                
                answerItem.innerHTML = `
                    <div class="answer-question">
                        <strong>Q${index + 1}:</strong> ${question.q}
                    </div>
                    <div class="answer-details">
                        <span>
                            <span class="answer-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}">
                                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                            </span>
                        </span>
                        <span><strong>Your Answer:</strong> ${userAnswer !== null ? question.opts[userAnswer] : 'Not answered'}</span>
                        ${!isCorrect ? `<span><strong>Correct Answer:</strong> ${question.opts[correctAnswer]}</span>` : ''}
                    </div>
                `;
                reviewContainer.appendChild(answerItem);
            });

            showScreen('resultsScreen');
        }

        function retakeQuiz() {
            startQuiz(currentCategory);
        }

        function showScreen(screenId) {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenId).classList.add('active');
        }
    