<template>
    <div id = 'homepage'>
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

                                <v-card
                                width="400"
                                title="STUDENT LIFE"
                                subtitle="Strathmore way of life"
                                text="Overall, student life at Strathmore University is dynamic, enriching, and offers a holistic learning experience that goes beyond the classroom. It's a place where students can grow intellectually, socially, and personally while making lasting connections and memories. "
                                ></v-card>

                                <div class="mt-4 text-subtitle-2">With slots</div>

                                <v-card width="400">
                                <template v-slot:title>
                                    SPORTS

                                </template>

                                <template v-slot:subtitle>
                                    

                                </template>

                                <template v-slot:text>
                                    Sports play a significant role in the life of students at Strathmore University, offering opportunities for physical activity, teamwork, leadership development, and social engagement. Here are some of the key aspects of sports at Strathmore:
                                </template>
                                </v-card>

                                <div class="mt-4 text-subtitle-2">With markup</div>

                                <v-card width="400">
                                <v-card-item>
                                    <v-card-title>CLUBS</v-card-title>

                                    <v-card-subtitle>Various clubs offered </v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    Academic Clubs: These clubs focus on academic disciplines such as business, finance, law, engineering, and IT. They organize workshops, seminars, and discussions related to their respective fields, allowing students to deepen their knowledge and explore career opportunities.

Cultural Clubs: Cultural clubs celebrate the diversity of Strathmore's student body by promoting awareness and appreciation of different cultures, traditions, and languages. They organize cultural nights, food festivals, and performances, providing platforms for students to showcase their heritage and learn about others'.

Religious Clubs: Religious clubs provide spaces for students to practice and explore their faith traditions. These clubs may organize prayer meetings, religious discussions, community service projects, and spiritual retreats, fostering spiritual growth and fellowship among members.

Special Interest Clubs: Strathmore University hosts a variety of special interest clubs catering to specific hobbies, passions, and recreational activities. Examples include photography clubs, music clubs, dance clubs, hiking clubs, and gaming clubs, where students can pursue their interests, meet like-minded peers, and engage in fun activities.

Entrepreneurship and Innovation Clubs: These clubs support aspiring entrepreneurs and innovators by providing resources, mentorship, and networking opportunities. They organize entrepreneurship workshops, startup competitions, and networking events, empowering students to turn their ideas into viable businesses or social ventures.

Community Service Clubs: Community service clubs engage students in volunteer activities and social impact projects aimed at addressing community needs and making a positive difference in society. They organize outreach programs, charity drives, environmental initiatives, and humanitarian missions, instilling a sense of social responsibility and empathy among members.

Sports and Fitness Clubs: These clubs promote physical activity, health, and wellness among students through sports and fitness-related activities. They organize sports leagues, fitness classes, outdoor adventures, and wellness challenges, encouraging students to stay active, de-stress, and maintain a healthy lifestyle.

Debate and Public Speaking Clubs: Debate and public speaking clubs provide platforms for students to hone their communication, critical thinking, and persuasion skills. They organize debates, public speaking competitions, and workshops on argumentation and rhetoric, empowering students to express themselves effectively and advocate for their ideas.
                                </v-card-text>
                                </v-card>
                            </div>
                        </v-row>
                    </v-container>
                </v-layout>
            </v-container>
    </div>
</template>
<script setup>
  const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>
