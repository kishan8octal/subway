<script setup>
import { ref } from "vue";
import { ChevronRight } from "../components/Icons/Index";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import HeaderLogo from "../components/HeaderLogo.vue";
import Button from "../components/Button.vue";
import RadioGroup from "../components/RadioGroup.vue";
import iziToast from 'izitoast';
import axios from 'axios';

const options = [
    { name: "William Loesche Elementary School", id: 1 }
  // { name: "Medical Office", id: 1 },
  // { name: "American Heritage", id: 2 },
];
const selectedOptions = ref("");
const router = useRouter();
const store = useStore();
const isLoading = ref(false);
const customer = ref({
    name: '',
    contact: '',
    email:''
});


const handleSubmit = () => {
    isLoading.value = true;
    if (customer.value.name?.trim() === ""){
        iziToast.error({
            position:'topRight',
            message: 'The name is required.',
        });
        isLoading.value = false;
        return false;
    }
    
    if (customer.value.contact.toString()?.trim() === ""){
        iziToast.error({
            position:'topRight',
            message: 'The contact is required.',
        });
        isLoading.value = false;
        return false;
    }

    if (customer.value.contact.toString()?.length !== 10) {
        iziToast.error({
            position: 'topRight',
            message: 'The contact must be 10 digit.',
        });
        isLoading.value = false;
        return false;
    }

    if (customer.value.email.toString()?.trim() === ""){
        iziToast.error({
            position:'topRight',
            message: 'The Email is required.',
        });
        isLoading.value = false;
        return false;
    }
    
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(customer?.value?.email).toLowerCase()))){
        iziToast.error({
            position:'topRight',
            message: 'Enter valid email address.',
        });
        isLoading.value = false;
        return false;
    }

    store.dispatch("storeData", { branch: selectedOptions, customer: customer.value });
    setTimeout(() => {
      router.push({ name: "deliveryTime" });
    }, 100);
    
}
</script>
<template>
  <div class="z-50 h-full">
    <HeaderLogo
            :isBackButton="false"
            :isLoading="isLoading"
            :isShowOrderDetails="false"
    />
    <div class="relative z-10 flex flex-col gap-[1rem]">
      <div class="text-center flex flex-col gap-2">
        <h3 class="text-[28px] font-extrabold text-white lobster-regular mt-5">
          Place Your Food Order To Get Delivery From
        </h3>
        <div>
          <img src="../assets/subwayLogo.png"
            class="h-[100px] w-[100px] sm:w-[300px] bg-img-white sm:h-[300px] relative z-50 object-cover mx-auto" />
        </div>
<!--        <div class="flex justify-center mt-2 items-center gap-3">-->
<!--          <img src="../assets/outlineLocation.svg" class="h-[30px] bg-img-white" />-->
<!--          <p class="flex flex-col text-start text-2xl viga-regular text-white">-->
<!--              <span>595 Tomlinson Rd, Philadelphia, PA 19116</span>-->
<!--            <span>Philadelphia PA 19115</span>-->
<!--            <span>9979 Bustleton Avenue,</span>-->
<!--          </p>-->
<!--        </div>-->
      </div>
        <div class="container mx-auto px-5 pb-[2rem] pt-[5rem] md:pt-[15rem] relative z-20">
            <div class="mx-auto w-full max-w-[550px]">
                <div>
                    <div class="text-center text-4xl my-3 font-bold text-xl viga-regular">
                        Customer Details
                    </div>
                    <div class="mb-5">
                        <label for="name" class="text-xl font-semibold text-gray-900">Name
                        <span class="text-red-500">*</span>
                        </label>
                        <input
                                v-model="customer.name"
                                autofocus
                                type="text" name="name" id="name" placeholder="Name"
                                class="w-full rounded-lg border my-2
                                border-green-600 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                                 bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none 
                                  focus:ring-2 focus:ring-green-600 focus:ring-opacity-20" />
                    </div>
                    <div class="mb-5">
                        <label for="contact" class="text-xl font-semibold text-gray-900 py-2">Phone Number
                            <span class="text-red-500">*</span>
                        </label>
                        <input
                                v-model="customer.contact"
                                type="number" name="contact" id="contact" placeholder="Phone Number"
                                class="w-full rounded-lg border my-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                                 border-green-600 bg-white py-3 px-6 text-xl font-medium text-[#6B7280] outline-none
                                  focus:ring-2 focus:ring-green-600 focus:ring-opacity-20" />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="text-xl py-2 font-semibold text-gray-900">Email
                            <span class="text-red-500">*</span>
                        </label>
                        <input
                                v-model="customer.email"
                                type="email" name="email" id="email" placeholder="Email" 
                                class="w-full rounded-lg border my-2 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                                border-green-600 py-3 px-6 text-xl font-medium text-[#6B7280] outline-none
                                  focus:ring-2 focus:ring-green-600 focus:ring-opacity-20" />
                    </div>
                </div>
        </div>
            <div class="flex items-center justify-center flex-col">
                <label class="text-xl font-semibold text-gray-900">Select Branch</label>
                <RadioGroup @change="handleSubmit" v-model="selectedOptions" :options="options" class="my-3" />
            </div>
        </div>
        <Button 
                variant="destructive"
                class="p-4 text-lg"
                :loading="isLoading"
                @click="handleSubmit"
        >Next</Button>
    </div>
  </div>
</template>
