import Image from 'next/image';

import styles from '../../../styles/Components.module.css';

export default function IngredientSlot({ ingredient }: any) {

    const { icon, alt, name } = ingredient;

    return (
        <div className={styles.ingredientSlotContainer}>
            { (icon) ? <Image src={icon} alt={alt || ''}/> : <div/> }
            <p>{name}</p>
        </div>
    );
}