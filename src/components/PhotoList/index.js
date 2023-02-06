import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    
    {
      name: 'Almaden Lake North West View',
      category: 'landscape',
      description:
        'Almaden Lake Park, Ca'
    },
    {
      name: 'Vasona Lake Southern View',
      category: 'landscape',
      description:
      'Vasona Lake County Park, California.'
    },
    {
      name: 'Vasona Lake Old Stone Wall',
      category: 'landscape',
      description:
      'Vasona Lake County Park, California.'
    },
    {
      name: 'Almaden Lake Dusk',
      category: 'landscape',
      description:
      'Almaden Lake Park, Ca'
    },
    {
      name: 'Almaden Lake',
      category: 'landscape',
      description:
        'Almaden Lake Park, CA'
    },
    {
      name: 'Vasona Lake',
      category: 'landscape',
      description:
        'Vasona Lake County Park, California.'
    },
    {
      name: 'Stone Wall and Steps',
      category: 'landscape',
      description:
      'This photo was taken on Vasona Lake, California.'
    },
    {
      name: 'Turkey Vulture Posing',
      category: 'wildlife',
      description:
        "Spreading wings to disperse heat on a hot day. This photo was taken at St. Joseph's Hill Open Space Preserve trail just north of Lexington Reservoir, California."
    },
    {
      name: 'Bobcat Hiding',
      category: 'wildlife',
      description:
        "You can't see me! This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California."
    },
    {
      name: 'Young Red Shouldered Hawk',
      category: 'wildlife',
      description:
        'Acording to Google Lens this is a Red Shouldered Hawk. This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.'
    },
    {
      name: 'Bobcat',
      category: 'wildlife',
      description:
        'Same Bobcat as above.'
    },
    {
      name: 'California Quail',
      category: 'wildlife',
      description:
        'California Quale sitting on a fence. The California State Bird.'
    },
    {
      name: 'Red Shouldered Hawk',
      category: 'wildlife',
      description:
        'Same Hawk as above.'
    },
    {
      name: 'Great Egret',
      category: 'wildlife',
      description:
      'Great Egret. This photo was taken on Almaden Lake, California.' 
    },
    {
      name: 'Osprey',
      category: 'wildlife',
      description:
        'Acording to Google Lens this is an Osprey. If you look close you can see a trout in the left claw. This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.'
    },
    {
      name: 'Geese',
      category: 'wildlife',
      description:
        'Photo was taken on Almaden Lake, California.'
    },
    {
      name: 'Hummingbird',
      category: 'wildlife',
      description:
        'This photo was taken on Vasona Lake, California.'
    },
    {
      name: 'Red Shouldered Hawk Back View',
      category: 'wildlife',
      description:
        'Same Hawk as above.'
    },
    {
      name: 'Common Merganster',
      category: 'wildlife',
      description:
        'Common Merganster aka Goosander. This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.'
    },
    {
      name: 'Mallards',
      category: 'wildlife',
      description:
        'This photo was taken on Vasona Lake, California.'
    },
    {
      name: 'Turkey Vultures',
      category: 'wildlife',
      description:
        "This photo was taken at St. Joseph's Hill Open Space Preserve trail just north of Lexington Reservoir, California."
    },
    {
      name: 'Acorn Woodpecker with Holes in Tree',
      category: 'wildlife',
      description:
        'Note many holes in the tree are full of nuts. This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.'
    },
    {
      name: 'Great Egret Reflecting',
      category: 'wildlife',
      description:
      'Great Egret.  This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.' 
    },
    {
      name: 'Spider Web and Spider',
      category: 'wildlife',
      description:
      "This photo was taken at St. Joseph's Hill Open Space Preserve trail just north of Lexington Reservoir, California."
    },
    {
      name: 'Bald Eagle',
      category: 'wildlife',
      description:
      'Photo was taken on Almaden Lake, California.'
    },
    {
      name: 'Acorn Woodpecker',
      category: 'wildlife',
      description:
        'This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.'
    },
    {
      name: 'Bald Eagle Front View',
      category: 'wildlife',
      description:
      'Photo was taken on Almaden Lake, California.'
    },
    {
      name: 'Turkey Vulture Full Wingspan',
      category: 'wildlife',
      description:
      'This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California.'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
