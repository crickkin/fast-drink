import Image from 'next/image';

import '../globals.css';
import styles from "../../../styles/Menu.module.css"
import itemsJson from '../../resources/items.json';
import ingredientsJson from '../../resources/ingredients.json';
import IngredientSlot from '../components/ingredoentSlot';

function getMenu() {
    const res = itemsJson;
    return res;
}

function getIngredientList() {
    const res = ingredientsJson;
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
    const imageSource = "./images/" + image;

    return (
        <div className={styles.container}>
            <Image src={imageSource} width={200} height={280} alt={name} />
            <div className={styles.containerInfo}>
                <h2>{name}</h2>
                <h3>Ingredientes:</h3>
                { item.ingredients?.map((ingredientCode: string) => {
                    const ingredients = getIngredientList().ingredients;
                    const ingredient = ingredients.find(ingredient => ingredient.code == ingredientCode);

                    return (
                        <div>
                            { (ingredient != undefined) 
                                ? <IngredientSlot key={ingredient.id} ingredient= { ingredient } /> 
                                : <div></div> }
                        </div>
                        )}
                )}

                <div>
                    <h3>Modo de preparo:</h3>
                    <a href={recipe} target='blank'>Saiba mais sobre o modo de preparo aqui.</a>
                </div>
            </div>
        </div>
    );
}