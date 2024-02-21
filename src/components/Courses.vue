<template>
    <div id = 'Courses'>
        <v-container>
                <v-layout column>
                    <v-carousel>
                        <v-carousel-item
                            src="./../../public/dom-fou-YRMWVcdyhmI-unsplash.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./../../public/leon-wu-LLfRMRT-9AY-unsplash.jpg"
                            cover
                        ></v-carousel-item>

                        <v-carousel-item
                            src="./../../public/vitaliy-nqyK3NuwC6E-unsplash.jpg"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                    </v-layout>
                    <v-layout>
                    <v-container>
                        <v-row align="center" justify="center">
                            <div class="d-flex align-center flex-column">
                                <div class="text-subtitle-2">With props</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>{{  componentTitle }}</v-card-title>

                                    
                                </v-card-item>

                                <v-card-text>
                                    <v-list
      :items="courses"
      item-title="courseName"
      item-value="id"
    ></v-list>
                                    </v-card-text></v-card> 

                                
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
       courses:[
         {
             id: 1,
             courseName: 'Financial Economics'
         },
         {
             id: 2,
             courseName: 'Psychology'
         },
         {
             id: 3,
             courseName: 'Computer science'
         },
         {
             id: 4,
             courseName: 'Financial Engineering'
         },
         {
             id: 5,
             courseName: 'Medicine and Surgery'
         },
         {
             id: 6,
             courseName: 'Education'
         },
         {
             id: 7,
             courseName: 'Architecture'
         },
         {
             id: 8,
             courseName: 'Forestry'
         },
        {
             id: 9,
             courseName: 'Law'
         },
         {
             id: 10,
             couresName: 'Hospitality and Tourism'
         },
       ],
      componentTitle: 'Courses at Strath Uni'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>


