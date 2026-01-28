// Funcționalități JavaScript pentru site-ul Notiuni Educaționale

document.addEventListener('DOMContentLoaded', function() {
    // Inițializare
    initMobileMenu();
    initAnimations();
    initInteractiveElements();
    initScrollEffects();
});

// Meniu mobil
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Închide meniul când se face click pe un link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Animații la scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observă elementele pentru animații
    document.querySelectorAll('.subject-card, .topic-card, .formula-card, .resource-card').forEach(el => {
        observer.observe(el);
    });
}

// Elemente interactive
function initInteractiveElements() {
    // Exerciții interactive pentru Matematică
    initMathExercises();
    
    // Experimente pentru Fizică
    initPhysicsExperiments();
    
    // Tabelul periodic pentru Chimie
    initPeriodicTable();
    
    // Sistemul celular pentru Biologie
    initCellSystem();
    
    // Teste interactive pentru Biologie
    initBiologyQuiz();
}

// Exerciții de matematică
function initMathExercises() {
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            const feedback = this.parentElement.nextElementSibling;
            
            // Resetează stilurile
            this.parentElement.querySelectorAll('.option-btn').forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.color = '';
            });
            
            // Aplică stilul corect
            if (isCorrect) {
                this.style.backgroundColor = '#4CAF50';
                this.style.color = 'white';
                feedback.innerHTML = '<p style="color: #4CAF50;">✓ Răspuns corect!</p>';
            } else {
                this.style.backgroundColor = '#f44336';
                this.style.color = 'white';
                feedback.innerHTML = '<p style="color: #f44336;">✗ Răspuns greșit. Încearcă din nou!</p>';
            }
        });
    });
}

// Experimente de fizică
function initPhysicsExperiments() {
    const experimentButtons = document.querySelectorAll('.experiment-btn');
    
    experimentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const experimentCard = this.closest('.experiment-card');
            const visual = experimentCard.querySelector('.experiment-visual');
            
            // Animație pentru pendul
            if (experimentCard.querySelector('.pendulum')) {
                animatePendulum(visual);
            }
            
            // Animație pentru circuit
            if (experimentCard.querySelector('.circuit')) {
                animateCircuit(visual);
            }
            
            // Animație pentru undă
            if (experimentCard.querySelector('.wave')) {
                animateWave(visual);
            }
        });
    });
}

// Animație pendul
function animatePendulum(container) {
    const pendulum = container.querySelector('.pendulum');
    if (pendulum) {
        pendulum.style.animation = 'pendulum-swing 2s ease-in-out infinite';
        
        setTimeout(() => {
            pendulum.style.animation = '';
        }, 10000);
    }
}

// Animație circuit
function animateCircuit(container) {
    const bulb = container.querySelector('.bulb');
    if (bulb) {
        bulb.style.animation = 'bulb-glow 1s ease-in-out infinite alternate';
        
        setTimeout(() => {
            bulb.style.animation = '';
        }, 5000);
    }
}

// Animație undă
function animateWave(container) {
    const waveLine = container.querySelector('.wave-line');
    if (waveLine) {
        waveLine.style.animation = 'wave-motion 2s ease-in-out infinite';
        
        setTimeout(() => {
            waveLine.style.animation = '';
        }, 8000);
    }
}

// Tabelul periodic interactiv
function initPeriodicTable() {
    const elements = document.querySelectorAll('.element');
    const elementInfo = document.querySelector('.element-details');
    
    if (elements.length && elementInfo) {
        const elementData = {
            'H': { name: 'Hidrogen', atomicNumber: 1, mass: 1.008, type: 'Non-metal' },
            'He': { name: 'Heliu', atomicNumber: 2, mass: 4.003, type: 'Gaz nobil' },
            'Li': { name: 'Litiu', atomicNumber: 3, mass: 6.941, type: 'Metal alcalin' },
            'Be': { name: 'Beriliu', atomicNumber: 4, mass: 9.012, type: 'Metal alcalin-pământos' },
            'B': { name: 'Bor', atomicNumber: 5, mass: 10.811, type: 'Semimetal' },
            'C': { name: 'Carbon', atomicNumber: 6, mass: 12.011, type: 'Non-metal' },
            'N': { name: 'Azot', atomicNumber: 7, mass: 14.007, type: 'Non-metal' },
            'O': { name: 'Oxigen', atomicNumber: 8, mass: 15.999, type: 'Non-metal' },
            'F': { name: 'Fluor', atomicNumber: 9, mass: 18.998, type: 'Halogen' },
            'Ne': { name: 'Neon', atomicNumber: 10, mass: 20.180, type: 'Gaz nobil' },
            'Na': { name: 'Sodiu', atomicNumber: 11, mass: 22.990, type: 'Metal alcalin' },
            'Mg': { name: 'Magneziu', atomicNumber: 12, mass: 24.305, type: 'Metal alcalin-pământos' },
            'Al': { name: 'Aluminiu', atomicNumber: 13, mass: 26.982, type: 'Metal' },
            'Si': { name: 'Siliciu', atomicNumber: 14, mass: 28.086, type: 'Semimetal' },
            'P': { name: 'Fosfor', atomicNumber: 15, mass: 30.974, type: 'Non-metal' },
            'S': { name: 'Sulf', atomicNumber: 16, mass: 32.065, type: 'Non-metal' },
            'Cl': { name: 'Clor', atomicNumber: 17, mass: 35.453, type: 'Halogen' },
            'Ar': { name: 'Argon', atomicNumber: 18, mass: 39.948, type: 'Gaz nobil' }
        };
        
        elements.forEach(element => {
            element.addEventListener('click', function() {
                const symbol = this.getAttribute('data-element');
                const data = elementData[symbol];
                
                if (data) {
                    elementInfo.innerHTML = `
                        <h4>${data.name} (${symbol})</h4>
                        <p><strong>Numărul atomic:</strong> ${data.atomicNumber}</p>
                        <p><strong>Masa atomică:</strong> ${data.mass} u</p>
                        <p><strong>Tip:</strong> ${data.type}</p>
                    `;
                    
                    // Highlight elementul selectat
                    elements.forEach(el => el.classList.remove('selected'));
                    this.classList.add('selected');
                }
            });
        });
    }
}

// Sistemul celular interactiv
function initCellSystem() {
    const organelles = document.querySelectorAll('[data-organelle]');
    const organelleInfo = document.querySelector('.organelle-details');
    
    if (organelles.length && organelleInfo) {
        const organelleData = {
            'nucleus': {
                name: 'Nucleu',
                description: 'Centrul de control al celulei, conține ADN-ul și coordonează activitățile celulare.',
                function: 'Conține materialul genetic și controlează diviziunea celulară.'
            },
            'mitochondria': {
                name: 'Mitocondrii',
                description: 'Organitele responsabile pentru producerea energiei celulare.',
                function: 'Produc ATP prin respirația celulară.'
            },
            'er': {
                name: 'Reticul Endoplasmic',
                description: 'Rețea de tubule și sacule în interiorul celulei.',
                function: 'Sinteza proteinelor și transportul materialelor.'
            },
            'golgi': {
                name: 'Aparatul Golgi',
                description: 'Centrul de procesare și sortare a proteinelor.',
                function: 'Modifică, sortează și ambalează proteinele pentru transport.'
            },
            'lysosome': {
                name: 'Lizozomi',
                description: 'Vezicule care conțin enzime digestive.',
                function: 'Digestia materialelor celulare și eliminarea deșeurilor.'
            }
        };
        
        organelles.forEach(organelle => {
            organelle.addEventListener('click', function() {
                const type = this.getAttribute('data-organelle');
                const data = organelleData[type];
                
                if (data) {
                    organelleInfo.innerHTML = `
                        <h4>${data.name}</h4>
                        <p><strong>Descriere:</strong> ${data.description}</p>
                        <p><strong>Funcție:</strong> ${data.function}</p>
                    `;
                    
                    // Highlight organitul selectat
                    organelles.forEach(org => org.classList.remove('selected'));
                    this.classList.add('selected');
                }
            });
        });
    }
}

// Teste interactive pentru biologie
function initBiologyQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            const feedback = this.parentElement.nextElementSibling;
            
            // Resetează stilurile
            this.parentElement.querySelectorAll('.quiz-option').forEach(opt => {
                opt.style.backgroundColor = '';
                opt.style.color = '';
            });
            
            // Aplică stilul corect
            if (isCorrect) {
                this.style.backgroundColor = '#4CAF50';
                this.style.color = 'white';
                feedback.innerHTML = '<p style="color: #4CAF50;">✓ Răspuns corect!</p>';
            } else {
                this.style.backgroundColor = '#f44336';
                this.style.color = 'white';
                feedback.innerHTML = '<p style="color: #f44336;">✗ Răspuns greșit. Încearcă din nou!</p>';
            }
        });
    });
}

// Efecte de scroll
function initScrollEffects() {
    // Header transparent la scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Animații pentru elementele care apar la scroll
    const scrollElements = document.querySelectorAll('.loading');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('loaded');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
}

// Simulări pentru fizică
function initPhysicsSimulations() {
    // Simulator de proiectile
    const projectileSliders = document.querySelectorAll('.simulation-slider');
    const trajectory = document.querySelector('.projectile-trajectory');
    
    if (projectileSliders.length && trajectory) {
        projectileSliders.forEach(slider => {
            slider.addEventListener('input', function() {
                updateProjectileTrajectory();
            });
        });
    }
    
    // Constructor de circuite
    const circuitComponents = document.querySelectorAll('.circuit-component');
    const circuitWorkspace = document.querySelector('.circuit-workspace');
    
    if (circuitComponents.length && circuitWorkspace) {
        circuitComponents.forEach(component => {
            component.addEventListener('click', function() {
                addComponentToCircuit(this);
            });
        });
    }
}

// Funcție pentru actualizarea traiectoriei proiectilului
function updateProjectileTrajectory() {
    const trajectory = document.querySelector('.projectile-trajectory');
    if (trajectory) {
        // Simulează o traiectorie parabolică
        trajectory.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
        trajectory.style.borderRadius = '50% 50% 0 0';
        trajectory.style.height = '100px';
        trajectory.style.width = '200px';
        trajectory.style.margin = '20px auto';
    }
}

// Funcție pentru adăugarea componentelor în circuit
function addComponentToCircuit(component) {
    const workspace = document.querySelector('.circuit-workspace');
    if (workspace) {
        const newComponent = component.cloneNode(true);
        newComponent.style.position = 'absolute';
        newComponent.style.left = Math.random() * 200 + 'px';
        newComponent.style.top = Math.random() * 100 + 'px';
        workspace.appendChild(newComponent);
    }
}

// Animații CSS adiționale
const style = document.createElement('style');
style.textContent = `
    @keyframes pendulum-swing {
        0%, 100% { transform: rotate(-15deg); }
        50% { transform: rotate(15deg); }
    }
    
    @keyframes bulb-glow {
        0% { opacity: 0.3; }
        100% { opacity: 1; }
    }
    
    @keyframes wave-motion {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(20px); }
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    .selected {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
    }
    
    .scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(15px);
    }
    
    .element.selected {
        background: var(--gradient-primary);
        color: white;
        transform: scale(1.1);
    }
    
    .organelle.selected {
        background: var(--gradient-secondary);
        color: white;
        transform: scale(1.1);
    }
`;

document.head.appendChild(style);

// Inițializare simulări fizică
document.addEventListener('DOMContentLoaded', function() {
    initPhysicsSimulations();
}); 