<template>
  <div>
    <HeroHeader/>
    
    <div class="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4  border-gray-100 my-4" >
        <div v-for="(product, i) in inventory" :key="i" class=" w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img class="p-8 rounded-t-lg" :src="product.photo" :alt="product.name" />
            <div class="px-5 pb-5 text-center">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">{{ product.name }}</h5>
                <div class="mb-2">
                  <router-link :to="{name: 'product', params:{id: product.id}}" class="hover:text-blue-600 cursor-pointer hover:underline"> See more..</router-link>
                </div>
                <span class="text-3xl font-bold text-gray-900 dark:text-white">$ {{ product.price.toFixed(2) }}</span>
                <div class="flex items-center justify-between mt-2">
                    <input v-model.number="product.quantity" type="number" class="w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <button @click="add(product.name, i)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HeroHeader from '../components/HeroHeader.vue'

export default{
  components: {
    HeroHeader
  },
  props:['inventory', 'add']
}
</script>