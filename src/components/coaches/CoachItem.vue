<template>
    <li>
      <h3>{{ fullName }}</h3>
      <h4>${{ rate }}/hour</h4>
      <div>
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      </div>
      <div class="actions">
        <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
        <base-button link :to="coachDetailsLink">View Details</base-button>
        <base-button @click="deleteCoach">Delete</base-button>
      </div>
       
    </li>
  </template>
  
  <script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
  export default {
  emits: ['loadCoaches'],
  components: { BaseBadge, BaseButton },
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
      coachContactLink() {
        return this.$route.path + '/' + this.id + '/contact'; // /coaches/c1/contact
      },
      coachDetailsLink() {
        return this.$route.path + '/' + this.id; // /coaches/c1
      },
      
    },
    methods:{
   
      async  deleteCoach(){
          console.log(this.id);
        try {
          await  this.$store.dispatch('coaches/deleteCoach', this.id);
          await this.$store.dispatch('requests/deleteCoachRequests');
        
         } catch (error) {
         console.log(this.error)  ;
         }
        

          this.$emit('loadCoaches',true);
        }

       }
  };
  </script>
  
  <style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  h3,
  h4 {
    margin: 0.5rem 0;
  }
  
  div {
    margin: 0.5rem 0;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
  }
  </style>