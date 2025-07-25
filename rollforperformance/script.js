let roomCode = '';
let entriesRef;

function createRoom() {
  roomCode = Math.random().toString(36).substr(2, 5).toUpperCase();
  entriesRef = window.db.collection('rooms').doc(roomCode);
  entriesRef.set({ entries: [] });
  startGame();
}

function joinRoom() {
  const input = document.getElementById('roomCodeInput').value.trim().toUpperCase();
  if (!input) return alert('Enter a room code');
  roomCode = input;
  entriesRef = window.db.collection('rooms').doc(roomCode);
  entriesRef.get().then(doc => {
    if (doc.exists) {
      startGame();
    } else {
      alert('Room not found');
    }
  });
}

function startGame() {
  document.getElementById('setup').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('roomDisplay').textContent = roomCode;

  entriesRef.onSnapshot(doc => {
    const data = doc.data();
    const entries = data.entries || [];
    const list = document.getElementById('entries');
    list.innerHTML = '';
    entries.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = entry;
      list.appendChild(li);
    });
  });
}

function submitEntry() {
  const box = document.getElementById('entryBox');
  const text = box.value.trim();
  if (!text) return;
  entriesRef.update({
    entries: firebase.firestore.FieldValue.arrayUnion(text)
  });
  box.value = '';
}
