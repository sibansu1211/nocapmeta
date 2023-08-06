const avatarLoader = new THREE.GLTFLoader();
avatarLoader.load(avatarUrl, (gltf) => {
    const avatar = gltf.scene;
    // Apply materials, adjust position, and add the avatar to the scene
});
