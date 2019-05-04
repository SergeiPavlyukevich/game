import Img1 from '../assets/images/circle.jpg';
import Img2 from '../assets/images/cup.jpg';
import Img3 from '../assets/images/kaktus.jpg';
import Img4 from '../assets/images/mur.jpg';
import Img5 from '../assets/images/pump.jpg';
import Img6 from '../assets/images/apple.jpg';
import Img7 from '../assets/images/berry.jpg';
import Img8 from '../assets/images/bmw.jpg';
import Img9 from '../assets/images/coca.jpg';
import Img10 from '../assets/images/ekler.jpg';
import Img11 from '../assets/images/gituar.jpg';
import Img12 from '../assets/images/meet.jpg';
import Img13 from '../assets/images/phone.jpg';
import Img14 from '../assets/images/pear.jpg';
import Img15 from '../assets/images/st.jpg';
import Img16 from '../assets/images/tee.jpg';

const imgUrls = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img1, Img2];

function shuffleArray(array) {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}

export const generateData = (blockCount = 10) => {
    const result = [];
    for (let i = 0; i < blockCount; i++) {
        const block = {
            id: i,
            isOpen: false,
            isVisible: true,
            imageUrl: imgUrls[i % (blockCount / 2)],
        };
        result.push(block);
    }
    return shuffleArray(result);
};
