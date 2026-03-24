<template>
  <div class="border-t border-gray-100">
    <section class="py-5">
        
      <div class="container px-4 px-lg-5 my-5">
        <div class="flex flex-col lg:flex-row items-center lg:items-start">
          <div class="lg:w-1/2 mb-5 lg:mb-0 p-6">
            <img class="w-full mb-5 lg:mb-0" :src="product.photo" :alt="product.name" />
          </div>
          <div class="lg:w-1/2 p-6">
            <div class="small mb-1">Code: {{ product.id }}</div>
            <h1 class="text-3xl lg:text-5xl font-bold mb-3">{{ product.name }}</h1>
            <div class="text-lg mb-5">
              <span>{{ product.price.toFixed(2) }}</span>
            </div>
            <p class="text-lg leading-relaxed mb-5">
              {{ product.description }}
            </p>
            <div class="flex items-center">
                  <input v-model.number="product.quantity" type="number" class=" cursor-pointer mr-6 w-[80px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <button @click="add(product.name, productIndex)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
            </div>
            <hr class="my-4">
            <div class="flex">
              <a href="" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit product</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props: ['inventory', 'add'],
    computed: {
        product () {
            const product = this.inventory.find((p) => {
                return p.id === Number(this.$route.params.id)
            })
            return product
        },
        productIndex () {
            const index = this.inventory.findIndex((p) => {
                return p.id === Number(this.$route.params.id)
            })
            return index
        }
       
    }
}

</script>