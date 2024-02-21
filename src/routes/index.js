import { createRouter,createWebHistory } from "vue-router";

 import Homepage from "./../components/Homepage.vue"
 import AboutUs from "./../components/About us.vue"
 import Alumni from "./../components/Alumni.vue"
 import ContactUs from "./../components/Contact us.vue"
 import Courses from "./../components/Courses.vue"
 import Events from "./../components/Events.vue"
 import Library from "./../components/Library.vue"
import Partnerships from "./../components/Partnerships.vue"
import HomepageVue from "./../components/Homepage.vue";

const routes =[
     {
        path: '/',
        name: 'homepage',
        component: Homepage,
        },

     {
        path: '/aboutus',
        name: 'About us',
        component: AboutUs,
        },

        {
            path: '/alumni',
             name: 'Alumni',
            component: Alumni,
            },

            {
                path: '/contactus',
                name: 'Contact us',
                component: ContactUs,
                },

                {
                    path: '/events',
                    name: 'Events',
                    component: Events,
                    }, 

                    {
                        path: '/library',
                        name: 'Library',
                        component: Library,
                        },

                        {
                            path: '/partnerships',
                            name: 'Partnerships',
                            component: Partnerships,
                            }, 

                            {
                                path: '/courses',
                                name: 'Courses',
                                component: Courses,
                                },        

    
]

const router =createRouter({
    history:createWebHistory(),
    routes,
})

export default router