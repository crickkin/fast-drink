import Image from 'next/image';

import styles from '../../../styles/Components.module.css';

export default function IngredientSlot({ ingredient }: any, showPrice: boolean) {

    const { icon, alt, name, price } = ingredient;

    return (
        <div className={styles.ingredientSlotContainer}>
            { (icon) ? <Image src={icon} alt={alt || ''}/> : <div/> }
            <p>{name} - R$ {price}</p>
            
        </div>
    );
}