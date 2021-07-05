<template>
    <div
        class="draggable-container vh-100"
        :id="id"
        @dragover.prevent
        @drop.prevent="drop">
        <slot/>
    </div>
</template>
<script>
export default {
  props: ['id'],
  methods: {
    drop: (e) => {
      const cardId = e.dataTransfer.getData('card_id');
      const card = document.getElementById(cardId);
      card.style.display = 'block';
      card.style.cursor = 'pointer';
      e.target.appendChild(card);
    },
  },
};
</script>
