import { useContext} from "react";
import { CartContext } from "../context/cartContext";

export function useCart(){
    const context = useContext(CartContext);
    return context;
}