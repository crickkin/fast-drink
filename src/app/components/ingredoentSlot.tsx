import Image from 'next/image';

export default function IngredientSlot({ props }: any) {
    return (
        <div>
            <Image src={props.icon} alt={props.alt || ''}/>
            <p>{props.name}</p>
        </div>
    );
}