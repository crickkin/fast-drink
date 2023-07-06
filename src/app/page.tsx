import Image from 'next/image';

import styles from '../../styles/Home.module.css';

import ingredientsJson from '../resources/ingredients.json';
import IngredientSlot from './components/ingredoentSlot';

function getIngredientList() {
    const res = ingredientsJson;
    return res;
}

export default function Home() {
  const categories = [
    { id: 0, name: 'Alcóolico', type: 'alcohol' },
    { id: 1, name: 'Fruta', type: 'fruit' },
    { id: 2, name: 'Diluidor', type: 'thinner' },
    { id: 3, name: 'Especiaria', type: 'flavoring' },
    { id: 4, name: 'Extras', type: 'extra'}
  ]

  return (
    <div>
      <Image className={styles.logo} src='./images/logo.png' width={100} height={100} alt='logo'/>
      <h1 className={styles.header}>Bem vindo à CocktailMe!</h1>
      <div className={styles.container}>
        <h2 className={styles.header}>Qualquer drink R$ 15,00 e pode escolher 1 item de cada uma das categorias a baixo</h2>
        <div className={styles.cardContainer}>
          { categories.map((category) => {
            return <CategoryCard key={category.id} category = { category } />
          })}
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.contactInfo}>Faça seu pedido pelo whatsapp +55 22 99920-5851 ou +55 21 98860-7817</p>
      </footer>
    </div>
  );
}

function CategoryCard({ category } : any) {
  const { name, type } = category;
  const ingredients = getIngredientList().ingredients.filter(ingredient => ingredient.type == type);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeader}> { name }</h3>
      <div>
        { ingredients.map((ingredient) => {
          return <IngredientSlot key={ingredient.id} ingredient = {ingredient} />
        })}
      </div>
    </div>
  );
}