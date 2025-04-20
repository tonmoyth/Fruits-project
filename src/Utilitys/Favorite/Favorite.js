import toast from "react-hot-toast";

const getFavorite = () => {
    const favorite = localStorage.getItem('favorite');
    if(favorite){
        const favoriteConvert = JSON.parse(favorite);
        return favoriteConvert;
    }else{
        return [];
    }
}


const setFavorite = (food) => {
    const saveFavorite = getFavorite();
    const chacking = saveFavorite.find(f => f.idCategory === food.idCategory)

    if(chacking){
        toast.error('already added')
        return
    }else{
        saveFavorite.push(food)
        toast.success('added successfully!!')
        const convertStr = JSON.stringify(saveFavorite);
        localStorage.setItem('favorite',convertStr)
    }
}

const removeFavorite = (id) => {
    const saveFavorite = getFavorite();
    const selection = saveFavorite.filter(food => food.idCategory !== id);
    const convertStr = JSON.stringify(selection);
    localStorage.setItem('favorite',convertStr);
    toast.success('remove successfully')
}

export {setFavorite,getFavorite,removeFavorite}