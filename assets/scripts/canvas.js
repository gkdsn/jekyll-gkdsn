var imgSrcs = new Array();
$('.js-img').each(function() {
    var src = $(this).attr('src');
    imgSrcs.push(src);
})
let i = 0;

const loader = new THREE.TextureLoader();
// set up a renderer
const renderer = new THREE.WebGLRenderer({
    // antialias: true,
    alpha: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
// THREE colors look like 0xff00ff, same as #ff00ff
// renderer.setClearColor(0x333333, 1)

// find the element to add the renderer to!
const section = document.querySelector("main")
section.appendChild(renderer.domElement)

// lets create a scene
const scene = new THREE.Scene()

// lets create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
camera.position.z = -50
camera.lookAt(scene.position)

// lets add some lighting
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, -1)
scene.add(light)

// hold some data about the shapes being added
const shapes = []


// lets add in an animation loop
const animate = function () {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)

    camera.position.setZ(camera.position.z + 1)

    // lets rotate the shapes each frame
    shapes.forEach(shape => {
        shape.rotateZ(0.001)
        shape.rotateY(0.001)
        //     shape.position.setZ(shape.position.z - 1)
        })
}
  
  // start the animation
  animate()
  
  // lets hold a state of hue
  let hue = 0
  
  // lets make a function that creates a shape
  const createShape = function (x, y) {
    
    let imageMaterial = imgSrcs[i]
    // const randNumber = Math.floor(Math.random() * geometries.length)
    const geometry = new THREE.BoxGeometry(31, 25, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: loader.load(''+ imageMaterial +'')
    })
    const shape = new THREE.Mesh(geometry, material)
    // shape.material.side = THREE.DoubleSide;
    
    shape.position.set(
      (window.innerWidth / 2) - x, 
      (window.innerHeight / 2) - y, 
      camera.position.z + 200
    )
    // shape.rotateX(0.1)
    // shape.rotateZ(0.1)
    
    // lets add it to the scene and the list of shapes
    shapes.push(shape) 
    scene.add(shape)
    
  }
  
  // lets do things on a draw
  let isMouseDown = false
  
  document.addEventListener("mousemove", function (event) {
    if (isMouseDown) {
      createShape(event.pageX, event.pageY)
    }
  })
  
  document.addEventListener("mousedown", function () {
    isMouseDown = true
  })
  
  document.addEventListener("mouseup", function () {
    isMouseDown = false
    i = i + 1
    if (i >= imgSrcs.length) {
        i = 0
    }
  })
  
  document.addEventListener("touchmove", function (event) {
    if (isMouseDown) {
      createShape(event.pageX, event.pageY)
    }
  })
  
  document.addEventListener("touchstart", function () {
    isMouseDown = true
  })
  
  document.addEventListener("touchend", function () {
    isMouseDown = false
  })
  
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })