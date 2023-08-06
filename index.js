const loader = new THREE.GLTFLoader();
loader.load('/path/to/your/model.gltf', (gltf) => {
    const model = gltf.scene;

   
    model.traverse((child) => {
        if (child.isMesh) {
           
            const texture = new THREE.TextureLoader().load('/path/to/texture.jpg');
            const material = new THREE.MeshStandardMaterial({ map: texture });
            child.material = material;
        }
    });

    scene.add(model);
});

const roomWidth = 10;
const roomHeight = 5;
const roomDepth = 10;

const roomGeometry = new THREE.BoxGeometry(roomWidth, roomHeight, roomDepth);


const roomMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });


const roomMesh = new THREE.Mesh(roomGeometry, roomMaterial);
scene.add(roomMesh);
const apiKey = 'YOUR_API_KEY';
const customizationOptions = {
    hairstyle: 'short',
    clothing: 'tshirt',
    
};

const url = `https://api.readyplayer.me/v1/avatars?${new URLSearchParams(customizationOptions)}`;

fetch(url, {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})
.then(response => response.json())
.then(data => {
    
    const avatarUrl = data.avatar;
    
})
.catch(error => {
    console.error('Error fetching avatar data:', error);
});

