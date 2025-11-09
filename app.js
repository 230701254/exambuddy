// Data Management
let appData = {
    subjects: []
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    
    // Initialize with sample data if no data exists
    if (appData.subjects.length === 0) {
        initializeSampleData();
    }
    
    renderSubjects();
    renderProgress();
    setupEventListeners();
});

// Load data from localStorage
function loadData() {
    const saved = localStorage.getItem('exambuddy-data');
    if (saved) {
        try {
            appData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading data:', e);
            appData = { subjects: [] };
        }
    }
}

// Save data to localStorage
function saveData() {
    try {
        localStorage.setItem('exambuddy-data', JSON.stringify(appData));
    } catch (e) {
        console.error('Error saving data:', e);
        alert('Error saving data. Please check your browser storage settings.');
    }
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Initialize sample data
function initializeSampleData() {
    // Subject 1: FOAI (Fundamentals of Artificial Intelligence)
    const foaiSubject = createSubject('FOAI', '2025-11-15');
    
    const foaiUnit1 = createUnit(foaiSubject.id, 'UNIT 1');
    createTopic(foaiSubject.id, foaiUnit1.id, 'Four Types of Agent - Simple Reflex, Model Based, Goal Based and Utility Based');
    createTopic(foaiSubject.id, foaiUnit1.id, 'Types of Environments In AI');
    createTopic(foaiSubject.id, foaiUnit1.id, 'History of AI');
    createTopic(foaiSubject.id, foaiUnit1.id, 'Uninformed Search Strategies - Breadth First Search, Depth First Search, Uniform Cost Search, Bidirectional Search (algorithms + problems)');
    
    const foaiUnit2 = createUnit(foaiSubject.id, 'UNIT 2');
    createTopic(foaiSubject.id, foaiUnit2.id, 'Informed search Strategies - Best First Search, Greedy BFS, A* and A0* (algorithm + problems)');
    
    // Subject 2: FMC (Fundamentals of Mobile Computing)
    const fmcSubject = createSubject('FMC', '2025-11-17');
    
    const fmcChapter1 = createUnit(fmcSubject.id, 'Chapter 1');
    createTopic(fmcSubject.id, fmcChapter1.id, 'Evolution of mobile technologies (1g - 5g)(*)');
    createTopic(fmcSubject.id, fmcChapter1.id, 'Architecture of mobile computing(*)');
    createTopic(fmcSubject.id, fmcChapter1.id, 'Security in mobile computing (*)');
    createTopic(fmcSubject.id, fmcChapter1.id, 'Mobility of bits and bytes');
    createTopic(fmcSubject.id, fmcChapter1.id, 'Dialog control, middlewares and gateways (*)');
    createTopic(fmcSubject.id, fmcChapter1.id, 'Quantum inspired algorithms for mobile computing');
    
    const fmcChapter2 = createUnit(fmcSubject.id, 'Chapter 2');
    createTopic(fmcSubject.id, fmcChapter2.id, 'Bluetooth stack protocol(*)');
    createTopic(fmcSubject.id, fmcChapter2.id, 'GSM and it\'s architecture(*)');
    createTopic(fmcSubject.id, fmcChapter2.id, 'GPRS and it\'s network application and architecture(*)');
    createTopic(fmcSubject.id, fmcChapter2.id, 'Mobile IP');
    createTopic(fmcSubject.id, fmcChapter2.id, 'WAP(*)');
    
    const fmcUnit3 = createUnit(fmcSubject.id, 'Unit 3');
    createTopic(fmcSubject.id, fmcUnit3.id, 'SS#7 Signaling');
    createTopic(fmcSubject.id, fmcUnit3.id, 'IN Conceptual model');
    createTopic(fmcSubject.id, fmcUnit3.id, 'Virtual Private Network(VPN)');
    createTopic(fmcSubject.id, fmcUnit3.id, 'Integration of cloud-based quantum computing with mobile devices');
    
    const fmcUnit4 = createUnit(fmcSubject.id, 'Unit 4');
    createTopic(fmcSubject.id, fmcUnit4.id, 'PDA');
    createTopic(fmcSubject.id, fmcUnit4.id, 'Palm OS Architecture');
    createTopic(fmcSubject.id, fmcUnit4.id, 'Symbian OS Architecture');
    createTopic(fmcSubject.id, fmcUnit4.id, 'Quantum programming frameworks for mobile applications');
    
    const fmcUnit5 = createUnit(fmcSubject.id, 'Unit 5');
    createTopic(fmcSubject.id, fmcUnit5.id, 'Voice Over IP – H.323 framework');
    createTopic(fmcSubject.id, fmcUnit5.id, 'Session Initiation Protocol (SIP)');
    createTopic(fmcSubject.id, fmcUnit5.id, 'IP Multimedia Systems (IMS)');
    createTopic(fmcSubject.id, fmcUnit5.id, 'Next generation networks');
    
    // Subject 3: TOC (Theory of Computation)
    const tocSubject = createSubject('TOC', '2025-11-19');
    // No units/topics specified yet - can be added later
    
    // Subject 4: CN (Computer Networks)
    const cnSubject = createSubject('CN', '2025-11-24');
    
    const cnUnit1 = createUnit(cnSubject.id, 'Unit 1');
    createTopic(cnSubject.id, cnUnit1.id, 'OSI and TCP/IP Architecture');
    createTopic(cnSubject.id, cnUnit1.id, 'Network topologies');
    createTopic(cnSubject.id, cnUnit1.id, 'Error detection and correction');
    
    const cnUnit2 = createUnit(cnSubject.id, 'Unit 2');
    createTopic(cnSubject.id, cnUnit2.id, 'ALOHA Architecture');
    createTopic(cnSubject.id, cnUnit2.id, 'Wireless lan');
    createTopic(cnSubject.id, cnUnit2.id, 'IP Service model and fragmentation');
    
    const cnUnit3 = createUnit(cnSubject.id, 'Unit 3');
    createTopic(cnSubject.id, cnUnit3.id, 'Distance vector algorithm');
    createTopic(cnSubject.id, cnUnit3.id, 'Link state algorithm');
    createTopic(cnSubject.id, cnUnit3.id, 'Border gateway protocol ()');
    createTopic(cnSubject.id, cnUnit3.id, 'IPv6(*)');
    createTopic(cnSubject.id, cnUnit3.id, 'MultiCasting');
    
    const cnChapter4 = createUnit(cnSubject.id, 'Chapter 4');
    createTopic(cnSubject.id, cnChapter4.id, 'TCP and UDP(*)');
    createTopic(cnSubject.id, cnChapter4.id, 'Comparision between TCP and UDP()');
    createTopic(cnSubject.id, cnChapter4.id, 'Adaptive Retransmission');
    createTopic(cnSubject.id, cnChapter4.id, 'Congestion control()');
    createTopic(cnSubject.id, cnChapter4.id, 'Congestion avoidance(*)');
    createTopic(cnSubject.id, cnChapter4.id, 'Quality of Service (QOS)');
    
    const cnChapter5 = createUnit(cnSubject.id, 'Chapter 5');
    createTopic(cnSubject.id, cnChapter5.id, 'SMTP()');
    createTopic(cnSubject.id, cnChapter5.id, 'ICMP(*)');
    createTopic(cnSubject.id, cnChapter5.id, 'POP3');
    createTopic(cnSubject.id, cnChapter5.id, 'MIME');
    createTopic(cnSubject.id, cnChapter5.id, 'HTTP()');
    createTopic(cnSubject.id, cnChapter5.id, 'DNS(*)');
    createTopic(cnSubject.id, cnChapter5.id, 'FTP');
    createTopic(cnSubject.id, cnChapter5.id, 'SNMP');
    
    // Note: saveData() is already called in createSubject, createUnit, and createTopic
    // But we'll call it once more to ensure everything is saved
    saveData();
}

// ========== SUBJECT CRUD OPERATIONS ==========

function createSubject(name, examDate = null) {
    const subject = {
        id: generateId(),
        name: name,
        examDate: examDate,
        units: []
    };
    appData.subjects.push(subject);
    saveData();
    return subject;
}

function updateSubject(id, name, examDate = null) {
    const subject = getSubject(id);
    if (subject) {
        subject.name = name;
        subject.examDate = examDate || null;
        saveData();
        return subject;
    }
    return null;
}

function deleteSubject(id) {
    appData.subjects = appData.subjects.filter(s => s.id !== id);
    saveData();
}

function getSubject(id) {
    return appData.subjects.find(s => s.id === id);
}

// ========== UNIT CRUD OPERATIONS ==========

function createUnit(subjectId, name) {
    const subject = getSubject(subjectId);
    if (subject) {
        const unit = {
            id: generateId(),
            name: name,
            topics: []
        };
        subject.units.push(unit);
        saveData();
        return unit;
    }
    return null;
}

function updateUnit(subjectId, unitId, name) {
    const unit = getUnit(subjectId, unitId);
    if (unit) {
        unit.name = name;
        saveData();
        return unit;
    }
    return null;
}

function deleteUnit(subjectId, unitId) {
    const subject = getSubject(subjectId);
    if (subject) {
        subject.units = subject.units.filter(u => u.id !== unitId);
        saveData();
    }
}

function getUnit(subjectId, unitId) {
    const subject = getSubject(subjectId);
    if (subject) {
        return subject.units.find(u => u.id === unitId);
    }
    return null;
}

// ========== TOPIC CRUD OPERATIONS ==========

function createTopic(subjectId, unitId, name) {
    const unit = getUnit(subjectId, unitId);
    if (unit) {
        const topic = {
            id: generateId(),
            name: name,
            completed: false
        };
        unit.topics.push(topic);
        saveData();
        return topic;
    }
    return null;
}

function updateTopic(subjectId, unitId, topicId, name) {
    const topic = getTopic(subjectId, unitId, topicId);
    if (topic) {
        topic.name = name;
        saveData();
        return topic;
    }
    return null;
}

function deleteTopic(subjectId, unitId, topicId) {
    const unit = getUnit(subjectId, unitId);
    if (unit) {
        unit.topics = unit.topics.filter(t => t.id !== topicId);
        saveData();
    }
}

function toggleTopicCompletion(subjectId, unitId, topicId) {
    const topic = getTopic(subjectId, unitId, topicId);
    if (topic) {
        topic.completed = !topic.completed;
        saveData();
        return topic;
    }
    return null;
}

function getTopic(subjectId, unitId, topicId) {
    const unit = getUnit(subjectId, unitId);
    if (unit) {
        return unit.topics.find(t => t.id === topicId);
    }
    return null;
}

// ========== PROGRESS CALCULATION ==========

function calculateProgress() {
    let total = 0;
    let completed = 0;

    appData.subjects.forEach(subject => {
        subject.units.forEach(unit => {
            unit.topics.forEach(topic => {
                total++;
                if (topic.completed) {
                    completed++;
                }
            });
        });
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
        completed,
        total,
        percentage
    };
}

function calculateSubjectProgress(subject) {
    let total = 0;
    let completed = 0;

    subject.units.forEach(unit => {
        unit.topics.forEach(topic => {
            total++;
            if (topic.completed) {
                completed++;
            }
        });
    });

    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
        completed,
        total,
        percentage
    };
}

// ========== UI RENDERING ==========

function renderSubjects() {
    const container = document.getElementById('subjects-container');
    const emptyState = document.getElementById('empty-state');

    if (appData.subjects.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    
    // Store which subjects are currently expanded (default is collapsed)
    const expandedSubjects = new Set();
    const existingCards = container.querySelectorAll('.subject-card');
    existingCards.forEach(card => {
        const unitsContainer = card.querySelector('.units-container');
        if (unitsContainer && !unitsContainer.classList.contains('hidden')) {
            const subjectId = card.dataset.subjectId;
            if (subjectId) {
                expandedSubjects.add(subjectId);
            }
        }
    });
    
    container.innerHTML = '';

    appData.subjects.forEach(subject => {
        const subjectCard = createSubjectCard(subject);
        container.appendChild(subjectCard);
        
        // Restore expanded state if it was expanded before (default is collapsed)
        if (expandedSubjects.has(subject.id)) {
            const unitsContainer = subjectCard.querySelector('.units-container');
            const collapseBtn = subjectCard.querySelector('.collapse-btn');
            if (unitsContainer && collapseBtn) {
                unitsContainer.classList.remove('hidden');
                collapseBtn.innerHTML = '▼';
            }
        }
    });
}

function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.dataset.subjectId = subject.id;

    const header = document.createElement('div');
    header.className = 'subject-header';

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'subject-title-wrapper';
    
    const title = document.createElement('div');
    title.className = 'subject-title';
    title.textContent = subject.name;
    title.style.cursor = 'pointer';
    title.onclick = () => toggleSubjectCollapse(card);
    
    const daysRemaining = document.createElement('span');
    daysRemaining.className = 'days-remaining';
    const days = calculateDaysRemaining(subject.examDate);
    if (days !== null) {
        if (days < 0) {
            daysRemaining.textContent = `(Exam passed ${Math.abs(days)} days ago)`;
            daysRemaining.classList.add('exam-passed');
        } else if (days === 0) {
            daysRemaining.textContent = '(Exam is today!)';
            daysRemaining.classList.add('exam-today');
        } else {
            daysRemaining.textContent = `(${days} day${days !== 1 ? 's' : ''} remaining)`;
            daysRemaining.classList.add('exam-upcoming');
        }
    }
    
    titleWrapper.appendChild(title);
    if (days !== null) {
        titleWrapper.appendChild(daysRemaining);
    }

    const collapseBtn = document.createElement('button');
    collapseBtn.className = 'collapse-btn';
    collapseBtn.innerHTML = '▶'; // Start collapsed
    collapseBtn.title = 'Minimize/Expand';
    collapseBtn.onclick = () => toggleSubjectCollapse(card);

    const actions = document.createElement('div');
    actions.className = 'subject-actions';

    const addUnitBtn = document.createElement('button');
    addUnitBtn.className = 'btn btn-primary btn-small';
    addUnitBtn.textContent = '+ Add Unit';
    addUnitBtn.onclick = () => showModal('unit', 'add', subject.id);

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-small';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => showModal('subject', 'edit', subject.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-small';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => confirmDelete('subject', subject.id, subject.name);

    // Subject Progress Circle (Pie Chart)
    const subjectProgress = calculateSubjectProgress(subject);
    const progressCircle = document.createElement('div');
    progressCircle.className = 'subject-progress-circle';
    progressCircle.title = `${subjectProgress.completed}/${subjectProgress.total} topics completed (${subjectProgress.percentage}%)`;
    progressCircle.dataset.subjectId = subject.id;
    
    // Create SVG for circular progress
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 36 36');
    svg.className = 'progress-ring';
    
    const circleBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleBg.setAttribute('cx', '18');
    circleBg.setAttribute('cy', '18');
    circleBg.setAttribute('r', '16');
    circleBg.setAttribute('fill', 'none');
    circleBg.setAttribute('stroke', '#e0e0e0');
    circleBg.setAttribute('stroke-width', '3');
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '18');
    circle.setAttribute('cy', '18');
    circle.setAttribute('r', '16');
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#27ae60');
    circle.setAttribute('stroke-width', '3');
    circle.setAttribute('stroke-dasharray', `${subjectProgress.percentage * 100.53 / 100}, 100.53`);
    circle.setAttribute('transform', 'rotate(-90 18 18)');
    circle.className = 'progress-ring-circle';
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '18');
    text.setAttribute('y', '18');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('fill', '#2c3e50');
    text.textContent = subjectProgress.percentage + '%';
    
    svg.appendChild(circleBg);
    svg.appendChild(circle);
    svg.appendChild(text);
    progressCircle.appendChild(svg);

    actions.appendChild(progressCircle);
    actions.appendChild(addUnitBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    header.appendChild(titleWrapper);
    header.appendChild(collapseBtn);
    header.appendChild(actions);

    const unitsContainer = document.createElement('div');
    unitsContainer.className = 'units-container hidden'; // Start hidden (collapsed)

    if (subject.units.length > 0) {
        subject.units.forEach(unit => {
            const unitCard = createUnitCard(subject.id, unit);
            unitsContainer.appendChild(unitCard);
        });
    } else {
        const noUnitsMsg = document.createElement('p');
        noUnitsMsg.style.color = '#7f8c8d';
        noUnitsMsg.style.fontStyle = 'italic';
        noUnitsMsg.textContent = 'No units yet. Add a unit to get started.';
        unitsContainer.appendChild(noUnitsMsg);
    }

    card.appendChild(header);
    card.appendChild(unitsContainer);

    return card;
}

function createUnitCard(subjectId, unit) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.dataset.unitId = unit.id;

    const header = document.createElement('div');
    header.className = 'unit-header';

    const title = document.createElement('div');
    title.className = 'unit-title';
    title.textContent = unit.name;

    const actions = document.createElement('div');
    actions.className = 'unit-actions';

    const addTopicBtn = document.createElement('button');
    addTopicBtn.className = 'btn btn-primary btn-small';
    addTopicBtn.textContent = '+ Add Topic';
    addTopicBtn.onclick = () => showModal('topic', 'add', subjectId, unit.id);

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-small';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => showModal('unit', 'edit', subjectId, unit.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-small';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => confirmDelete('unit', subjectId, unit.name, unit.id);

    actions.appendChild(addTopicBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    header.appendChild(title);
    header.appendChild(actions);

    const topicsContainer = document.createElement('div');
    topicsContainer.className = 'topics-container';

    if (unit.topics.length > 0) {
        unit.topics.forEach(topic => {
            const topicItem = createTopicItem(subjectId, unit.id, topic);
            topicsContainer.appendChild(topicItem);
        });
    } else {
        const noTopicsMsg = document.createElement('p');
        noTopicsMsg.style.color = '#7f8c8d';
        noTopicsMsg.style.fontStyle = 'italic';
        noTopicsMsg.textContent = 'No topics yet. Add a topic to get started.';
        topicsContainer.appendChild(noTopicsMsg);
    }

    card.appendChild(header);
    card.appendChild(topicsContainer);

    return card;
}

function createTopicItem(subjectId, unitId, topic) {
    const item = document.createElement('div');
    item.className = 'topic-item';
    if (topic.completed) {
        item.classList.add('completed');
    }

    const left = document.createElement('div');
    left.className = 'topic-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'topic-checkbox';
    checkbox.checked = topic.completed;
    
    const name = document.createElement('span');
    name.className = 'topic-name';
    name.textContent = topic.name;
    
    checkbox.onchange = () => {
        toggleTopicCompletion(subjectId, unitId, topic.id);
        // Update only the specific topic item and progress, don't re-render all subjects
        const updatedTopic = getTopic(subjectId, unitId, topic.id);
        if (updatedTopic) {
            if (updatedTopic.completed) {
                item.classList.add('completed');
                name.style.textDecoration = 'line-through';
            } else {
                item.classList.remove('completed');
                name.style.textDecoration = 'none';
            }
        }
        
        // Update subject progress circle
        const subject = getSubject(subjectId);
        if (subject) {
            const subjectProgress = calculateSubjectProgress(subject);
            const subjectCard = document.querySelector(`[data-subject-id="${subjectId}"]`);
            if (subjectCard) {
                const progressCircle = subjectCard.querySelector('.subject-progress-circle');
                if (progressCircle) {
                    const circle = progressCircle.querySelector('.progress-ring-circle');
                    const text = progressCircle.querySelector('text');
                    const svg = progressCircle.querySelector('svg');
                    
                    if (circle) {
                        circle.setAttribute('stroke-dasharray', `${subjectProgress.percentage * 100.53 / 100}, 100.53`);
                    }
                    if (text) {
                        text.textContent = subjectProgress.percentage + '%';
                    }
                    if (svg) {
                        progressCircle.title = `${subjectProgress.completed}/${subjectProgress.total} topics completed (${subjectProgress.percentage}%)`;
                    }
                }
            }
        }
        
        renderProgress();
    };

    left.appendChild(checkbox);
    left.appendChild(name);

    const actions = document.createElement('div');
    actions.className = 'topic-actions';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-small';
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => showModal('topic', 'edit', subjectId, unitId, topic.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-small';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => confirmDelete('topic', subjectId, topic.name, unitId, topic.id);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    item.appendChild(left);
    item.appendChild(actions);

    return item;
}

function renderProgress() {
    const progress = calculateProgress();
    
    document.getElementById('progress-percentage').textContent = progress.percentage;
    document.getElementById('progress-bar').style.width = progress.percentage + '%';
    document.getElementById('progress-text').textContent = 
        `${progress.completed} of ${progress.total} topics completed`;
}

// ========== MODAL HANDLERS ==========

function showModal(type, action, subjectId = null, unitId = null, topicId = null) {
    const modal = document.getElementById('modal');
    const form = document.getElementById('modal-form');
    const title = document.getElementById('modal-title');
    const nameInput = document.getElementById('modal-name');
    const examDateGroup = document.getElementById('exam-date-group');
    const examDateInput = document.getElementById('modal-exam-date');

    document.getElementById('modal-type').value = type;
    document.getElementById('modal-subject-id').value = subjectId || '';
    document.getElementById('modal-unit-id').value = unitId || '';
    document.getElementById('modal-topic-id').value = topicId || '';

    // Show/hide exam date field only for subjects
    if (type === 'subject') {
        examDateGroup.classList.remove('hidden');
    } else {
        examDateGroup.classList.add('hidden');
    }

    let currentName = '';
    let currentExamDate = '';
    if (action === 'edit') {
        if (type === 'subject') {
            const subject = getSubject(subjectId);
            currentName = subject ? subject.name : '';
            currentExamDate = subject && subject.examDate ? subject.examDate : '';
            title.textContent = 'Edit Subject';
        } else if (type === 'unit') {
            const unit = getUnit(subjectId, unitId);
            currentName = unit ? unit.name : '';
            title.textContent = 'Edit Unit';
        } else if (type === 'topic') {
            const topic = getTopic(subjectId, unitId, topicId);
            currentName = topic ? topic.name : '';
            title.textContent = 'Edit Topic';
        }
    } else {
        if (type === 'subject') {
            title.textContent = 'Add Subject';
        } else if (type === 'unit') {
            title.textContent = 'Add Unit';
        } else if (type === 'topic') {
            title.textContent = 'Add Topic';
        }
    }

    nameInput.value = currentName;
    examDateInput.value = currentExamDate;
    modal.classList.remove('hidden');
    nameInput.focus();
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    document.getElementById('modal-form').reset();
}

function showDeleteModal(message, callback) {
    const deleteModal = document.getElementById('delete-modal');
    document.getElementById('delete-message').textContent = message;
    deleteModal.classList.remove('hidden');

    const confirmBtn = document.getElementById('confirm-delete');
    const cancelBtn = document.getElementById('cancel-delete');

    const handleConfirm = () => {
        callback();
        hideDeleteModal();
        confirmBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', handleCancel);
    };

    const handleCancel = () => {
        hideDeleteModal();
        confirmBtn.removeEventListener('click', handleConfirm);
        cancelBtn.removeEventListener('click', handleCancel);
    };

    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', handleCancel);
}

function hideDeleteModal() {
    const deleteModal = document.getElementById('delete-modal');
    deleteModal.classList.add('hidden');
}

function confirmDelete(type, subjectId, name, unitId = null, topicId = null) {
    let message = '';
    if (type === 'subject') {
        message = `Are you sure you want to delete the subject "${name}"? This will also delete all units and topics under it. This action cannot be undone.`;
    } else if (type === 'unit') {
        message = `Are you sure you want to delete the unit "${name}"? This will also delete all topics under it. This action cannot be undone.`;
    } else if (type === 'topic') {
        message = `Are you sure you want to delete the topic "${name}"? This action cannot be undone.`;
    }

    showDeleteModal(message, () => {
        if (type === 'subject') {
            deleteSubject(subjectId);
        } else if (type === 'unit') {
            deleteUnit(subjectId, unitId);
        } else if (type === 'topic') {
            deleteTopic(subjectId, unitId, topicId);
        }
        renderSubjects();
        renderProgress();
    });
}

// ========== EVENT LISTENERS ==========

function calculateDaysRemaining(examDate) {
    if (!examDate) {
        return null;
    }
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const exam = new Date(examDate);
    exam.setHours(0, 0, 0, 0);
    
    const diffTime = exam - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

function setupEventListeners() {
    // Add Subject buttons
    document.getElementById('add-subject-btn').addEventListener('click', () => {
        showModal('subject', 'add');
    });

    document.getElementById('empty-add-subject-btn').addEventListener('click', () => {
        showModal('subject', 'add');
    });

    // Modal form submit
    document.getElementById('modal-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit();
    });

    // Close modal buttons
    document.getElementById('close-modal').addEventListener('click', hideModal);
    document.getElementById('cancel-modal').addEventListener('click', hideModal);

    // Close modal on background click
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') {
            hideModal();
        }
    });

    document.getElementById('delete-modal').addEventListener('click', (e) => {
        if (e.target.id === 'delete-modal') {
            hideDeleteModal();
        }
    });
}

function toggleSubjectCollapse(card) {
    const unitsContainer = card.querySelector('.units-container');
    const collapseBtn = card.querySelector('.collapse-btn');
    
    if (unitsContainer.classList.contains('hidden')) {
        unitsContainer.classList.remove('hidden');
        collapseBtn.innerHTML = '▼';
    } else {
        unitsContainer.classList.add('hidden');
        collapseBtn.innerHTML = '▶';
    }
}

function handleFormSubmit() {
    const type = document.getElementById('modal-type').value;
    const subjectId = document.getElementById('modal-subject-id').value;
    const unitId = document.getElementById('modal-unit-id').value;
    const topicId = document.getElementById('modal-topic-id').value;
    const name = document.getElementById('modal-name').value.trim();
    const examDate = document.getElementById('modal-exam-date').value || null;
    
    // Determine if this is an edit or add operation
    let isEdit = false;
    if (type === 'subject' && subjectId) isEdit = true;
    else if (type === 'unit' && unitId) isEdit = true;
    else if (type === 'topic' && topicId) isEdit = true;

    if (!name) {
        alert('Please enter a name');
        return;
    }

    if (type === 'subject') {
        if (isEdit) {
            updateSubject(subjectId, name, examDate);
        } else {
            createSubject(name, examDate);
        }
    } else if (type === 'unit') {
        if (isEdit) {
            updateUnit(subjectId, unitId, name);
        } else {
            createUnit(subjectId, name);
        }
    } else if (type === 'topic') {
        if (isEdit) {
            updateTopic(subjectId, unitId, topicId, name);
        } else {
            createTopic(subjectId, unitId, name);
        }
    }

    hideModal();
    renderSubjects();
    renderProgress();
}

