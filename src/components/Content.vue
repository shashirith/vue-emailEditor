<script setup>
import { Icon } from '@iconify/vue';
import { ref, inject, onActivated, onDeactivated } from 'vue';
import { EmailEditor } from 'vue-email-editor';
import { useRouter, RouterLink } from 'vue-router';

const formData = inject('formData');
const emailEditor = ref(null);
const show = ref(null);
const router = useRouter();
const saveAndContinue = () => {
  saveDesign();

}
const editorLoaded = () => {
  // Pass your template JSON here
  emailEditor.value.editor.loadDesign(formData["content"]);
};
const editorReady = () => {
  console.log(':ready')
}
const saveDesign = () => {
  emailEditor.value.editor.saveDesign((design) => {
    formData.content = design;
    router.push("/targeting");
  });
};
const exportHtml = () => {

};
const handleBack = () => {
  router.go(-1);
};

onActivated(() => {
  show.value = true;
  console.log("content ativated");
})

onDeactivated(() => {
  show.value = false;
  console.log("content deactivated")
})

</script>


<template>
  <div :style="{ width: '100%' }">
    <div :style="{ height: '50px' }" class="w-[100%] bg-slate-600 px-[50px] flex flex-row justify-between items-center">
      <div class="flex flex-row items-center gap-[5px]">
        <Icon icon="mingcute:left-fill" class="text-white" />
        <h1 @click="handleBack" class="font-[inter] tetx-[12px] text-white cursor-pointer">Back</h1>
      </div>
      <div class="flex flex-row items-center gap-[10px]">
        <input value="New (25 Feb 2022, 14:20)"
          class="w-fit underline underline-offset-[5px] outline-none bg-black/0 text-white"
          placeholder="New (25 Feb 2022, 14:20)">
        <Icon icon="mdi:pencil" class="text-white" />
      </div>
      <div>
        <button @click="saveAndContinue" class="p-[5px] text-[12px] rounded-md bg-[#12B981] text-white font-[inter]">Save
          & Continue</button>
      </div>
    </div>
    <div class="editor">
      <EmailEditor v-if="show" @ready="editorReady" ref="emailEditor" style="height: 100%;" />
    </div>
  </div>
</template>


<style scoped>
.editor {
  height: calc(100vh - 50px);
}
</style>
