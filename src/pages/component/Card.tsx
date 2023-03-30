import React from 'react';

export default function getImages(nivel: number) {
    const Images = [
        '/assets/catito1.jpg',
        '/assets/catito2.jpg',
        '/assets/catito3.jpg',
        '/assets/catito4.jpg',
        '/assets/catito5.jpg',
        '/assets/catito6.jpg',
        '/assets/catito7.jpg',
        '/assets/catito8.jpg',
        '/assets/catito9.jpg',
        '/assets/catito10.jpg',
    ];

    const newImages = Images.slice(0, nivel);

    return newImages
        .flatMap((image) => [`a|${image}`, `b|${image}`])
        .sort(() => Math.random() - 0.5);
}
