<template lang="html">
  <section class="home">
    <h1>Home Component</h1>
    <div class="row">
      <div class="col-4">
        <h2>Todo</h2>
        <DraggableContainer
          id="todo"
          @item-dropped="itemDropped">
          <DraggableCard
            id="task1"
            draggable="true">
            <p>Paint Building</p>
          </DraggableCard>
        </DraggableContainer>
      </div>
      <div class="col-4">
        <h2>In Progress</h2>
        <DraggableContainer
          id="in-progress"
          @item-dropped="itemDropped">
          <DraggableCard
            id="task2"
            draggable="true">
            <p>Flooring</p>
          </DraggableCard>
        </DraggableContainer>
      </div>
      <div class="col-4">
        <h2>Done</h2>
        <DraggableContainer
          id="done"
          @item-dropped="itemDropped">
          <DraggableCard
            id="task3"
            draggable="true">
            <p>Outdoor Work</p>
          </DraggableCard>
        </DraggableContainer>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import DraggableContainer from '../components/custom/DraggableContainer.vue';
import DraggableCard from '../components/custom/DraggableCard.vue';

export default {
  name: 'Home',
  components: {
    DraggableContainer,
    DraggableCard,
  },
  methods: {
    itemDropped(params) {
      console.log('I am getting called');
      console.log(params);
    },
  },
};

</script>
