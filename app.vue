<template>
  <div class="fixed z-[-1] w-full h-[100vh]">
      <div class="flex items-center justify-center h-full">
          <div class="w-[80%] flex flex-col justify-center items-center">
              <h1 class="text-4xl font-bold text-center"><span class="text-blue-400">Flu</span>xus <span class="text-blue-400">By</span>pass</h1>
              <div class="flex justify-center mt-5 max-sm:flex-col">
                  <UInput v-model=hwid placeholder="Enter your hwid" class="sm:ml-2" color="blue"/>
                  <UButton label="Bypass" color="blue" variant="solid" class="justify-center sm:ml-2 max-sm:mt-3" :disabled="isHwidEmpty" :loading="isBypassing" @click="bypass"/>
              </div>
              <UAlert v-if="isBypassSuccess" class="text-center mt-5 sm:w-72 max-sm:w-[80%]" :title="key"/>
          </div>
      </div>

      <p class="text-center text-gray-400 text-sm absolute bottom-0 w-full">Made with ❤️ by tana</p>
      <UNotifications />
  </div>
</template>

<script setup>
const hwid = ref('');
const key = ref('');
const isBypassing = ref(false);
const isBypassSuccess = ref(false);
const isHwidEmpty = computed(() => hwid.value === '' || hwid.value === null || hwid.value === undefined);
const toast = useToast();

const bypass = async () => {
    isBypassing.value = true;
    try {
        const response = await $fetch(`http://localhost:3000/api/bypass?hwid=${hwid.value}`);
        const openingIndex = response.indexOf('let content = ("');
        const closingIndex = response.indexOf(';', openingIndex);
        key.value = response.substring(openingIndex + 16, closingIndex - 2);
        isBypassSuccess.value = true;
        toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'Notification',
            description: "Successfully got the key",
            color: 'green',
        });
    } catch (error) {
        toast.add({
            icon: 'i-heroicons-x-circle',
            title: 'Notification',
            description: "Couldn't get the key",
            color: 'red',
        });
    }
    isBypassing.value = false;
};
</script>
