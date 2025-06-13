<template>
  <div class="space-y-3 border p-4 rounded-md">
    <label class="block">
      <span class="text-gray-700">Adresse email</span>
      <input
        type="email"
        v-model="email"
        class="w-full px-3 py-2 border rounded"
        placeholder="example@mail.com"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Mot de passe</span>
      <input
        type="password"
        v-model="password"
        class="w-full px-3 py-2 border rounded"
        placeholder="********"
      />
    </label>

    <label class="block">
      <span class="text-gray-700">Téléphone</span>
      <input
        type="tel"
        v-model="phone"
        class="w-full px-3 py-2 border rounded"
        placeholder="06 12 34 56 78"
      />
    </label>

    <div class="flex flex-col md:flex-row gap-2">
      <button
        v-on:click="modify"
        class="w-full bg-[#3E4233] text-white py-2 rounded font-semibold"
      >
        Enregistrer les modifications
      </button>
      <button
        class="w-full bg-[#E9DECF] text-gray-800 py-2 rounded font-semibold"
      >
        Supprimer le compte
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const store = useAuthStore();
const userStore = useUserStore();

const email = ref(userStore.email);
const password = ref();
const phone = ref(userStore.phone_number);
const token = useCookie("token");

userStore.token = token.value;
//console.log(userStore);
async function modify() {
  await fetch("/api/user/modifyUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      phone: phone.value,
      token: token.value,
    }),
  });
}

onMounted(() => {
  store.checkAuth();
  userStore.getInfo();
});
</script>
