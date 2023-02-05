import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Pancakes',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Burrito',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Burger',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Turkey Vulture Posing',
      category: 'portraits',
      description:
        "Spreading wings to disperse heat on a hot day. This photo was taken at St. Joseph's Hill Open Space Preserve trail just north of Lexington Reservoir, California."
    },
    {
      name: 'Bobcat Hiding',
      category: 'portraits',
      description:
        "You can't see me! This photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California."
    },
    {
      name: 'Young Red Shouldered Hawk',
      category: 'portraits',
      description:
        'Acording to Google Lens this is a Red Shouldered Hawk. This was photo was taken on Los Alamitos Creek Trail just south of Almaden Lake, California."'
    },
    {
      name: 'Bobcat',
      category: 'portraits',
      description:
        'Same Bobcat as above.'
    },
    {
      name: 'California Quail',
      category: 'portraits',
      description:
        'California Quale sitting on a fence. The California State Bird.'
    },
    {
      name: 'f',
      category: 'portraits',
      description:
        'f'
    },
    {
      name: 'g',
      category: 'portraits',
      description:
        'g'
    },
    {
      name: 'h',
      category: 'portraits',
      description:
        'h'
    },
    {
      name: 'i',
      category: 'portraits',
      description:
        'i'
    },
    {
      name: 'j',
      category: 'portraits',
      description:
        'j'
    },
    {
      name: 'k',
      category: 'portraits',
      description:
        'k'
    },
    {
      name: 'l',
      category: 'portraits',
      description:
        'l'
    },
    {
      name: 'm',
      category: 'portraits',
      description:
        'm'
    },
    {
      name: 'n',
      category: 'portraits',
      description:
        'n'
    },
    {
      name: 'o',
      category: 'portraits',
      description:
        'o'
    },
    {
      name: 'p',
      category: 'portraits',
      description:
        'p'
    },
    {
      name: 'q',
      category: 'portraits',
      description:
        'q'
    },
    {
      name: 'r',
      category: 'portraits',
      description:
        'r'
    },
    {
      name: 's',
      category: 'portraits',
      description:
        's'
    },
    {
      name: 't',
      category: 'portraits',
      description:
        't'
    },
    {
      name: 'u',
      category: 'portraits',
      description:
        'u'
    },
    {
      name: 'v',
      category: 'portraits',
      description:
        'v'
    },
    {
      name: 'w',
      category: 'portraits',
      description:
        'w'
    },
    {
      name: 'x',
      category: 'portraits',
      description:
        'x'
    },
    {
      name: 'y',
      category: 'portraits',
      description:
        'y'
    },
    {
      name: 'z',
      category: 'portraits',
      description:
        'z'
    },
    {
      name: 'aa',
      category: 'portraits',
      description:
        'aa'
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
