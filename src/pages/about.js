import React from 'react';
import Layout from '../components/layout'
import AboutParallax from '../components/AboutParallax'
import SEO from '../components/seo'
import Card from '../components/Card'

const About = () => {
    return (
        <Layout>
            <SEO title="About Us" />
              <AboutParallax height="60vh" />
              <Card
              title="Our Mission"
              info="Our mission is to provide event planners with three unique hotel casinos for Reno NV events that are ideally connected via skyway in central Downtown Reno. We provide an exclusive and valuable experience to our guests that no other individual property in Reno can match. Eldorado Hotel Casino, Silver Legacy Resort Casino and Circus Circus Reno have partnered to provide an unmatched meeting and convention offer in Reno in the electric atmosphere of Downtown Reno while also utilizing the nearby Reno Events Center and Downtown Reno Ballroom for larger Reno Nevada conventions. All three properties provide, in addition to versatile meeting facilities, superb accommodations, dining, gaming and nightly entertainment for a most enthralling experience in Reno."
          
              />
              <Card
              title="Why Downtown Reno?"
              info="Of all the places to hold a meeting or event in Nevada, why choose Downtown Reno? Well, to put it simply Downtown Reno has it all! The “Biggest Little City in the World” is one of the most dynamic, entertaining places on Earth, known for big excitement within a small radius. Composed of six city blocks of exceptional dining, exhilarating casinos and top-notch entertainment, this electric city provides guests with a lasting experience, whether your events in Reno involve business matters or social celebrations."
              info2="Eldorado Resort Casino, Silver Legacy Resort and Circus Circus Reno work together to bring satisfying array of accommodations, event spaces, dining, catering and ongoing entertainment to the core of Downtown Reno, while just across the street, the Reno Ballroom and Reno Events Center house even more space for larger parties. With a shared goal of positioning this area as the region’s center of tourism, our event spaces help you see that holding your conference in Reno is smart, affordable and, and most importantly, the satisfying choice for your guests. Learn about our versatile meeting venues so you can plan your Reno NV event in this scintillating atmosphere"
           
              />
             TOP ATTRACTIONS NEARBY
When not reveling in the entertainment offered right onsite in the form of gaming, nightlife and shows at great value, check out the exciting attractions nearby.

Reno Events Center
Reno Aces AAA Baseball Stadium
Reno Bighorns NBA Development Team
Downtown Riverwalk
National Bowling Stadium
National Automobile Museum
Nevada Art Museum
Unique Dining and Nightlife Options
Blocks from the University of Nevada
        </Layout>
    );
};

export default About;