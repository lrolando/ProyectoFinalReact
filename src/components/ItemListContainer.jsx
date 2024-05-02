import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ItemList} from './ItemList';

import {Container, Card} from 'react-bootstrap';

import { getFirestore, getDoc, doc, collection, getDocs, where, query } from "firebase/firestore";
import data from "../data/products.json";

export const ItemListContainer = () => 
    {
        const [products, setProducts] = useState([]);
        const {id} = useParams();

        useEffect(() => {

            const db = getFirestore();

            let refCollection

            if(!id){
                refCollection = collection(db, "items");
            } else {
                refCollection = query(
                    collection(db, "items"),
                    where("categoryId", "==", id)
                )
            }
            getDocs(refCollection).then((snapshot) => {
                setProducts(
                snapshot.docs.map((doc) => {
                            return{ id: doc.id, ...doc.data() }}))})
                },[id])
    return (
        <Container>
                <ItemList products={products}/>
        </Container>
    )
};
    