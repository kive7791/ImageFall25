// objects.js

// Ground plane primitive
AFRAME.registerPrimitive('a-ground-plane', {
  defaultComponents: {
    geometry: {
      primitive: 'plane',
      width: 50,
      height: 50
    },
    material: {
      color: '#000000'
    },
    rotation: {x: -90, y: 0, z: 0},
    'static-body': {}
  },
  mappings: {
    position: 'position',
    rotation: 'rotation',
    width: 'geometry.width',
    height: 'geometry.height',
    color: 'material.color'
  }
});

// Tea plane primitive
AFRAME.registerPrimitive('a-tea-plane', {
  defaultComponents: {
    geometry: {
      primitive: 'box',
      depth: 25,
      height: 5,
      width: 25
    },
    material: {
      src: '#Grass'
    },
    'static-body': {}
  },
  mappings: {
    position: 'position',
    rotation: 'rotation',
    src: 'material.src',
    depth: 'geometry.depth',
    height: 'geometry.height',
    width: 'geometry.width'
  }
});

// Stair block primitive
AFRAME.registerPrimitive('a-stair-block-bottom', {
  defaultComponents: {
    geometry: {
      primitive: 'box',
      depth: 2,
      height: 2,
      width: 4
    },
    material: {
      src: '#StoneBottom'
    },
    'static-body': {}
  },
  mappings: {
    position: 'position',
    rotation: 'rotation',
    src: 'material.src',
    depth: 'geometry.depth',
    height: 'geometry.height',
    width: 'geometry.width'
  }
});

// Stair block primitive
AFRAME.registerPrimitive('a-stair-block-top', {
  defaultComponents: {
    geometry: {
      primitive: 'box',
      depth: 2.3,
      height: .5,
      width: 3.95
    },
    material: {
      src: '#StoneTop'
    },
    'static-body': {}
  },
  mappings: {
    position: 'position',
    rotation: 'rotation',
    src: 'material.src',
    depth: 'geometry.depth',
    height: 'geometry.height',
    width: 'geometry.width'
  }
});
