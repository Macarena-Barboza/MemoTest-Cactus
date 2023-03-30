import React from 'react';
import home from '@/styles/home.module.scss';
import Image from 'next/image';

export default function ModalLose() {
    return (
        <div className={home.content_alert}>
            <div className={home.alert}>
                <h2 className={home.title__2}>Perdiste!</h2>

                <div className={home.alert__catito}>
                    <Image
                        src={'/assets/catito6 1.png'}
                        alt=""
                        width={100}
                        height={150}
                        className={home.alert__catito1}
                    />

                    <Image
                        src={'/assets/catito3 1.png'}
                        alt=""
                        className={home.alert__catito2}
                        width={100}
                        height={150}
                    />
                    <Image
                        src={'/assets/catito4 1.png'}
                        alt=""
                        className={home.alert__catito3}
                        width={100}
                        height={150}
                    />
                    <Image
                        src={'/assets/catito4 2.png'}
                        alt=""
                        className={home.alert__catito4}
                        width={100}
                        height={150}
                    />
                    <Image
                        src={'/assets/catito5 1.png'}
                        alt=""
                        className={home.alert__catito5}
                        width={100}
                        height={150}
                    />
                </div>
            </div>
        </div>
    );
}
