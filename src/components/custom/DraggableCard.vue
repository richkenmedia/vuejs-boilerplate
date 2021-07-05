<template>
    <div
        :id="id"
        class="draggable-card card shadow-sm"
        :draggable="draggable"
        @dragstart="dragStart"
        @dragend="dragStop"
        @dragover.stop>
        <slot/>
    </div>
</template>

<script>
export default {
  props: [
    'id', 'draggable',
  ],
  methods: {
    dragStart: (e) => {
      const { target } = e;
      e.dataTransfer.setData('card_id', target.id);
      target.style.cursor = 'move';
    },
    dragStop: (e) => {
      console.log(e);
    },
  },
};
</script>
