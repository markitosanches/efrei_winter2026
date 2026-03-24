<template>
      <aside class=" fixed overflow-hidden top-0 right-0 h-full rounded-lg">
        <div class="top-0 right-0 h-full relative bg-gray-900 text-white">
            <h1 class="flex justify-between items-center p-3 bg-gray-500 border-b-1 border-white  font-size-26">
                    <svg class="w-6 h-6 :text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                    </svg>
                <button @click="toggle" class="text-lg font-bold cursor-pointer">&times;</button>
            </h1>
            <div class="max-h-full p-3 overflow-auto">
                <table class="w-[400px] border-collapse text-sm">
                    <thead>
                        <tr class="text-xs">
                            <th>Product Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(quantity, key, i) in cart" :key="i" class="my-2">
                            <td><img :src="getPhoto(key)" :alt="key" class="max-w-[100px] max-h-[100px] my-2" /></td>
                            <td>{{ key }}</td>
                            <td>$ {{ getPrice(key) }}</td>
                            <td class="text-center">{{ quantity }}</td>
                            <td>$ {{(getPrice(key)*quantity).toFixed(2)  }}</td>
                            <td class="text-center">
                                <button @click="remove(key)" class="cursor-pointer text-red-600 px-7 text-lg font-bold">
                                    &times;
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p  v-if="!Object.keys(cart).length" class="text-center"><em>No items in cart</em></p>
                <div class="flex justify-between mt-3">
                    <span><strong>Total:</strong> $ {{calculateTotal()}}</span>
                    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Checkout</button>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>

export default{
    props:['toggle', 'cart', 'inventory', 'remove'],
    methods:{
        getPrice (name) {
            const product  = this.inventory.find((p)=>{
                return p.name === name
            })
            return product.price.toFixed(2)
        },
        getPhoto (name) {
            const product  = this.inventory.find((p)=>{
                return p.name === name
            })
            return product.photo
        },
        calculateTotal () {
            const total = Object.entries(this.cart).reduce((acc, curr) => {
                return acc + (curr[1] * this.getPrice(curr[0]))
            }, 0)
            return total.toFixed(2)
        }
    }
}
</script>