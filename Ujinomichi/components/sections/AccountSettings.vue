<template>
  <div class="space-y-3 border p-4 rounded-md mb-4">
    <label class="block">
      <span class="text-[#4E5548]">Adresse email</span>
      <input
        type="email"
        v-model="email"
        class="w-full px-3 py-2 border rounded"
        placeholder="example@mail.com"
      />
    </label>

    <label class="block">
      <span class="text-[#4E5548]">Mot de passe (nouveau)</span>
      <input
        type="password"
        v-model="password"
        class="w-full px-3 py-2 border rounded"
        placeholder="********"
      />
    </label>

    <label class="block">
      <span class="text-[#4E5548]">Téléphone</span>
      <input
        type="tel"
        inputmode="numeric"
        pattern="[0-9]*"
        maxlength="14"
        :value="formatPhone(phone)"
        @input="handlePhoneInput"
        class="w-full px-3 py-2 border rounded"
        placeholder="06 12 34 56 78"
      />
    </label>
    <div class="flex flex-col md:flex-row gap-2">
      <button
        @click="openModal"
        class="w-full bg-[#4E5548] hover:bg-[#7C8259] text-white py-2 rounded font-semibold"
      >
        Enregistrer les modifications
      </button>
      <button
        class="w-full bg-[#E6DBD0] hover:bg-[#EFE4D9] text-[#4E5548] py-2 rounded font-semibold"
      >
        Supprimer le compte
      </button>
    </div>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 backdrop-blur-sm bg-white/60 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-md text-center">
        <h2 class="text-xl font-semibold mb-4">
          Confirmez votre mot de passe actuel
        </h2>
        <input
          type="password"
          v-model="currentPassword"
          class="w-full px-3 py-2 border rounded"
          placeholder="Mot de passe actuel"
        />
        <div class="flex justify-end gap-2 mt-4">
          <button
            @click="closeModal"
            class="bg-[#E6DBD0] hover:bg-[#EFE4D9] text-[#4E5548] px-4 py-2 rounded font-bold"
          >
            Annuler
          </button>
          <button
            @click="confirmModify"
            class="bg-[#4E5548] hover:bg-[#7C8259] text-white px-4 py-2 rounded font-bold"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
const store = useAuthStore();
const userStore = useUserStore();
const toast = useToast();

const email = ref(userStore.email);
const password = ref("");
const phone = ref();
const token = useCookie("token");

const currentPassword = ref("");
const showModal = ref(false);

userStore.token = token.value;

function formatPhone(val) {
  // retire tout sauf les chiffres, conserve 0 devant
  let clean = (val || "").replace(/\D/g, "");
  if (clean.length > 10) clean = clean.slice(0, 10);
  // Ajoute un espace tous les 2 chiffres
  return clean.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}

// Gestion de la saisie
function handlePhoneInput(e) {
  let clean = e.target.value.replace(/\D/g, "");
  if (clean.length > 10) clean = clean.slice(0, 10);
  phone.value = clean;
  console.log(phone.value);
  e.target.value = formatPhone(clean); // Met à jour l'affichage (trick)
}
function openModal() {
  showModal.value = true;
}

function closeModal() {
  currentPassword.value = "";
  showModal.value = false;
}

async function confirmModify() {
  await fetch("/api/user/modifyUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      phone: phone.value,
      currentPassword: currentPassword.value,
      token: token.value,
    }),
  });
  toast.success("Informations modifiées avec succès!");
  closeModal(); // ferme le modal après la modification
}

onMounted(() => {
  store.checkAuth();
  userStore.getInfo();
  let src = String(userStore.phone_number || "");
  if (src.length === 9 && !src.startsWith("0")) {
    src = "0" + src;
  }
  phone.value = src;
});
</script>
