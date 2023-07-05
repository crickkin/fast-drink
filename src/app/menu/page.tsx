import Image from 'next/image';

import '../globals.css';
import styles from "../../../styles/Menu.module.css"
import itemsJson from '../../resources/items.json';

function getMenu() {
    const res = itemsJson;
    return res;
}

export default function MenuPage() {
    const menuItems = getMenu().items;
    
    return (
        <div>
            <div className={styles.header}>
                <h1>Cardápio</h1>
            </div>
            <div>
                { menuItems?.map((menuItem) => {
                    return <Menu key={menuItem.id} item={menuItem}/>
                })}
            </div>
        </div>
    )
}

function Menu({ item }: any) {
    const { name, recipe, image } = item || {};
    const imageSource = "/images/" + image;

    return (
        <div>
            <div className={styles.container}>
                <Image src={imageSource} width={200} height={280} alt={name} />
                <div className={styles.containerInfo}>
                    <h2>{name}</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod nulla ut nibh eleifend, et posuere purus facilisis. Mauris elementum, sapien at imperdiet iaculis, magna magna porttitor ex, ac posuere neque felis id nibh. Nulla posuere lacinia nisl eu suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem lectus, egestas vel sapien non, egestas vestibulum nunc. Fusce ornare est eu neque ultricies tempor. Phasellus ultricies molestie mi, vel rutrum orci pharetra ut. Mauris pretium ornare dolor non convallis.
                    </p>

                    <div>
                        <h2>Modo de preparo:</h2>
                        <a href={recipe} target='blank'>Saiba mais sobre o modo de preparo aqui.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}