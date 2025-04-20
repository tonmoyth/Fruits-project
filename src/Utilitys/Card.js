import toast from "react-hot-toast";

const getCard = () => {
    const saveCard = localStorage.getItem('card');

    if(saveCard){
        const converted = JSON.parse(saveCard);
        return converted;
    }else{
        return [];
    }
}

const setCard = (food) => {
    const saveCard = getCard();
    const chacking = saveCard.find(f => f.idCategory === food.idCategory);
    if(chacking){
        toast.error('already added')
        return
    }else{
        saveCard.push(food);
        toast.success('added success');
        const convertStr = JSON.stringify(saveCard);
        localStorage.setItem('card',convertStr);
    }
}

const removeCard = (id) => {
    const saveCard = getCard();
    const selection = saveCard.filter(food => food.idCategory !== id);
    const convertStr = JSON.stringify(selection);
    localStorage.setItem('card',convertStr);
    toast.success('remove successfully')
}


export {setCard,getCard,removeCard}