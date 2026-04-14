<template>
    <div class="min-h-screen flex items-center justify-center border-t border-gray-100">
      <div class="border mt-2 p-6 rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <div v-show="message" class="bg-red-500 mb-2 text-white p-2 rounded">{{ message }}</div>
        <h2 class="text-2xl font-semibold mb-6">Add New User</h2>
        <div>
          <form>
            <div class="mb-4">
              <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input v-model="user.fullname" type="text" id="fullName" class="mt-1 p-2 border w-full rounded-md" />
            </div>
            <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input v-model="user.email" type="email" id="username" class="mt-1 p-2 border w-full rounded-md" />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input v-model="user.password" type="password" id="password" class="mt-1 p-2 border w-full rounded-md" />
            </div>
            <div class="mb-6">
              <button type="button" @click="saveUser" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import UserDataService from '../services/UserDataService';

export default {
    data () {
        return {
            message: null,
            user: {}
        }
    },
    methods: {
        saveUser () {
           UserDataService.create(this.user)
           .then(response=> {
            this.$router.push({name: 'login'})
           })
           .catch(error => {
            this.message = error.response.data.message
           })
        }
    }
    
}
</script>