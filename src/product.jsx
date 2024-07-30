const productArray = [
    {
        id: '1',
        title: 'Coffee',
        price: 5.23,
        image: 'https://dummyjson.com/image/200x100'
    },
    {
        id: '2',
        title: 'Sunglass',
        price: 25.11,
        image: 'https://dummyjson.com/image/200x100'
    },
    {
        id: '3',
        title: 'Camera',
        price: 45.58,
        image: 'https://dummyjson.com/image/200x100'
    }
]

function getProductData (id) {
    let productData = productArray.find(product => product.id === id);
    return productData;
}

export {productArray, getProductData};

