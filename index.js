const loader = new THREE.GLTFLoader();
loader.load('/path/to/your/model.gltf', (gltf) => {
    const model = gltf.scene;

    // Set up materials for different parts of the model
    model.traverse((child) => {
        if (child.isMesh) {
            // Load textures and set materials here
            const texture = new THREE.TextureLoader().load('/path/to/texture.jpg');
            const material = new THREE.MeshStandardMaterial({ map: texture });
            child.material = material;
        }
    });

    scene.add(model);
});
// Set up room dimensions and scale
const roomWidth = 10;
const roomHeight = 5;
const roomDepth = 10;

// Create a box geometry for the room
const roomGeometry = new THREE.BoxGeometry(roomWidth, roomHeight, roomDepth);

// Create a material for the room
const roomMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

// Create the room mesh
const roomMesh = new THREE.Mesh(roomGeometry, roomMaterial);
scene.add(roomMesh);
const apiKey = 'YOUR_API_KEY';
const customizationOptions = {
    hairstyle: 'short',
    clothing: 'tshirt',
    // Add more customization options here
};

const url = `https://api.readyplayer.me/v1/avatars?${new URLSearchParams(customizationOptions)}`;

fetch(url, {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})
.then(response => response.json())
.then(data => {
    // Process the avatar data
    const avatarUrl = data.avatar;
    // Load the avatar using Three.js and position it within the scene
})
.catch(error => {
    console.error('Error fetching avatar data:', error);
});

