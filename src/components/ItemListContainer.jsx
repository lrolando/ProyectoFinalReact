import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemList} from './ItemList';

import { Container } from 'react-bootstrap';

import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

export const ItemListContainer = () => 
    {
        const [products, setProducts] = useState([]);
        const {id} = useParams();

        useEffect(() => {
            const fetchData = async () => {
                const db = getFirestore();
                const itemsRef = id
                    ? query(collection(db, "items"), where("categoryId", "==", id))
                    : collection(db, "items");
        
                const categoriesRef = collection(db, "categories");
        
                try {
                    const itemsSnapshot = await getDocs(itemsRef);
                    const itemsData = itemsSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
        
                    const categoriesSnapshot = await getDocs(categoriesRef);
                    const categoriesMap = categoriesSnapshot.docs.reduce((acc, doc) => {
                        acc[doc.id] = doc.data().title;
                        return acc;
                    }, {});
        
                    const itemsWithCategories = itemsData.map(item => ({
                        ...item,
                        category: categoriesMap[item.categoryId] || ""
                    }));
        
                    setProducts(itemsWithCategories);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
        
            fetchData();
        }, [id]);

    return (
        <Container>
                <ItemList products={products}/>
        </Container>
    )
};
    