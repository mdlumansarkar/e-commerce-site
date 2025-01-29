import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill all fields." };
        }

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Failed to create product");
            }

            set((state) => ({ products: [...state.products, data.data] }));

            return { success: true, message: "Product created successfully" };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data})
    },deleteProduct: async(pid) =>{
        const res = await fetch(`/api/products/${pid}`,{
            method:"DELETE",
        });
        const data = await res.json();
        if(!data.success){
            return {success:false,message:data.message};
        }
        set((state) =>({ products: state.products.filter(product => product._id !== pid) }));
        return {success : true,message:data.message}
    },updatedProduct: async (pid, updatedProduct) => {
        try {
            const res = await fetch(`/api/products/${pid}`, { // Ensure correct API route
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });
    
            const data = await res.json(); // Read JSON response only once
            console.log("Update response:", data); // Debug response
    
            if (!res.ok || !data.success) {
                return { success: false, message: data.message || "Update failed!" };
            }
    
            // Await state update
            await set((state) => ({
                products: state.products.map((product) =>
                    product._id === pid ? { ...product, ...updatedProduct } : product
                ),
            }));
    
            return { success: true, message: "Product updated successfully!" };
        } catch (error) {
            console.error("Update failed:", error);
            return { success: false, message: "Something went wrong!" };
        }
    }
    
    
    
    // 
    // 
    // 
    // 
    // 
    // updatedProduct: async (pid,updatedProduct) =>{
    //     const res = await fetch(`api/product/${pid}`,{
    //         method:"PUT",
    //         headers:{
    //             "Content-type":"application/json",
    //         },
    //         body:JSON.stringify(updatedProduct)
    //     })
    //     const data = await res.json();
    //     if(!data.success){
    //         return {success:true,message:data.message}
    //         set((state) =>({
    //             product: state.products.map ((product) => (product._id === pid? data.data : product)),
    //         }))
    //     }
    // }
}));

























// import { create } from "zustand";

 
//     export const useProductStore = create((set) =>({
//         products:[],
//         setProducts: (products) => set({products}),
//         createProduct: async(newProduct) =>{
//             if(!newProduct.name || ! newProduct.price || !newProduct.image){
//                 return{success:false,message:"Please fill all fields."}
//             }
//             const res = await fetch("/api/products",{
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 body:JSON.stringify(newProduct)
//             })
//             const data = await res.json();
//             set((state)=>({products:[...state.products,data.data]}));
//             return {success:true,message:"Product created success"}
//         }
//     }))


