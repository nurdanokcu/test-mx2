import {
  instagramImg1,
  instagramImg2,
  instagramImg3,
  instagramImg4,
  instagramImg5,
  instagramImg6,
  instagramImg7,
  facebookImg1,
  facebookImg2,
  facebookImg3,
  facebookImg4,
  facebookImg5,
  facebookImg6,
  googleImg1,
  googleImg2,
  googleImg3,
  googleImg4,
  googleImg5,
  googleImg6,
  googleImg7,
} from '~/assets/images/guide';
import {
  instagramYellow,
  facebookLogo,
  googleLogo,
} from '~/assets/images/logo';

export const guides = [
  {
    id: 1,
    name: 'Facebook',
    logo: facebookLogo,
    content: [
      {
        id: 'f01',
        title: 'Image',
        text: 'These are simple, single-image ads that appear in users\' feeds. Advertisers can use these ads to showcase their products or services, and include a call-to-action (CTA) button to drive traffic to their website or landing page.',
        image: facebookImg1,
      },
      {
        id: 'f02',
        title: 'Carousel',
        text: 'Carousel ads on Facebook allow advertisers to display up to 10 images or videos in a single ad, each with its own link. This type of ad is ideal for showcasing a variety of products or services, as well as telling a story through a sequence of images. With its interactive and engaging format, Carousel ads can capture the attention of potential customers and drive traffic to your website or landing page.',
        image: facebookImg2,
      },
      {
        id: 'f03',
        title: 'Story',
        text: 'Stories Ads can include photos, videos, or a combination of both, and are designed to fit seamlessly within the user\'s feed. They can also feature interactive elements such as polling stickers, swipe-up links, and more. Businesses can use Stories Ads to showcase their brand, promote their products or services, drive website traffic, and increase conversions.',
        image: facebookImg3,
      },
      {
        id: 'f04',
        title: 'Video',
        text: 'These ads use video to showcase products, services, or brand messages. They can be placed on Facebook news feed, stories, or in-stream during longer videos.',
        image: facebookImg4,
      },
      {
        id: 'f05',
        title: 'Sponsored Messages',
        text: 'Sponsored Messages Ads on Facebook allow businesses to send targeted, personalized messages to users who have interacted with their brand on Facebook Messenger. These ads appear directly in the user\'s inbox, making them highly visible and engaging. Businesses can use Sponsored Messages Ads to promote new products, offer discounts, and drive conversions. With advanced targeting options, businesses can reach users who have already expressed interest in their brand, increasing the likelihood of conversion.',
        image: facebookImg5,
      },
      {
        id: 'f06',
        title: 'Sponsored Posts',
        text: 'Sponsored Post Ads on Facebook allow businesses to increase the visibility of their organic posts by promoting them to a wider audience. These ads appear in the news feed of Facebook users who are most likely to engage with the content. Businesses can use sponsored post ads to drive traffic to their website, increase brand awareness, and promote new products or services.',
        image: facebookImg6,
      },
    ],
  },
  {
    id: 2,
    name: 'Instagram',
    logo: instagramYellow,
    content: [
      {
        id: 'i01',
        title: 'Photo Ads',
        text: 'These are simple, single-image ads that appear in users\' feeds. Advertisers can use these ads to showcase their products or services, and include a call-to-action (CTA) button to drive traffic to their website or landing page.',
        image: instagramImg1,
      },
      {
        id: 'i02',
        title: 'Video Ads',
        text: 'Video Ads on Instagram allow businesses to create compelling video content that can reach a vast audience on the platform. These ads are great for showcasing product demos, event highlights, and brand storytelling. They can be up to 60 seconds long and can include sound. With the ability to target specific audiences, Video Ads can help businesses increase brand awareness, engagement, and conversions.',
        image: instagramImg2,
      },
      {
        id: 'i03',
        title: 'Carousel Ads',
        text: 'These ads allow advertisers to showcase multiple images or videos in a single ad. They are ideal for showing a product lineup, highlighting features or benefits of a product, or sharing a story through a series of images.',
        image: instagramImg3,
      },
      {
        id: 'i04',
        title: 'Story Ads',
        text: 'Instagram Stories Ads are an immersive and engaging advertising format that allow businesses to create short, full-screen ads that appear in between users\' organic stories. With over 500 million daily active users on Instagram Stories, this ad format is an effective way for businesses to reach a highly engaged audience.',
        image: instagramImg4,
      },
      {
        id: 'i05',
        title: 'Explore Ads',
        text: 'Explore page Ads on Instagram are a great way to reach a new audience. These ads appear on the Explore page, which is where users go to discover new content. With Explore page Ads, you can target users based on their interests and behaviors, making it easy to connect with your ideal customer. These ads can be in the form of photos or videos and can help you drive traffic to your profile or website. By using Explore page Ads, you can increase brand awareness and grow your business on Instagram.',
        image: instagramImg5,
      },
      {
        id: 'i06',
        title: 'IGTV Ads',
        text: 'IGTV Ads on Instagram are video ads that appear in between the IGTV content of the accounts that users follow. These ads are up to 60 seconds long and can be in a vertical or horizontal format. IGTV Ads allow businesses to create immersive video content that captures their audience\'s attention and engages them with their brand message. With IGTV Ads, businesses can reach a large and engaged audience on Instagram and increase their brand visibility and awareness.',
        image: instagramImg6,
      },
      {
        id: 'i07',
        title: 'Reels Ads',
        text: 'Reels Ads on Instagram are a new way to reach a larger audience on the platform. As a short-form video format, Reels allows you to create engaging content in a fun and creative way. With Reels Ads, you can showcase your product or service to a wider audience and encourage them to take action. Reels Ads can be up to 30 seconds long and are placed in between organic Reels content. With the ability to target specific audiences, you can ensure that your Reels Ads are seen by the people who are most likely to be interested in your brand.',
        image: instagramImg7,
      },
    ],
  },
  {
    id: 3,
    name: 'Google',
    logo: googleLogo,
    content: [
      {
        id: 'g01',
        title: 'Search',
        text: 'These ads appear on the Google search results page when users search for specific keywords. They are great for targeting users who are actively looking for a particular product or service.',
        image: googleImg1,
      },
      {
        id: 'g02',
        title: 'Display',
        text: 'Display ads are banner ads that appear on websites across the internet. They can be used to build brand awareness, promote a product or service, or drive traffic to a website.',
        image: googleImg2,
      },
      {
        id: 'g03',
        title: 'Video',
        text: 'Google-owned YouTube is the primary platform for video ads. They can be skippable or non-skippable and can appear before, during, or after a video.',
        image: googleImg3,
      },
      {
        id: 'g04',
        title: 'Shopping',
        text: 'These ads appear at the top of Google search results and feature product images, prices, and store names. They are great for e-commerce businesses looking to drive sales.',
        image: googleImg4,
      },
      {
        id: 'g05',
        title: 'App',
        text: 'These ads promote mobile apps and can appear on Google search, Google Play, YouTube, and other Google network sites. They are effective in driving app installs and in-app actions.',
        image: googleImg5,
      },
      {
        id: 'g06',
        title: 'Smart',
        text: 'Smart Ads on Google use machine learning to automate ad creation and optimization for a wide range of ad formats. They analyze your website and create ads that are relevant to your business and audience, while adjusting bids and targeting in real-time to maximize performance. With Smart Ads, you can save time and effort while still getting the results you need to grow your business.',
        image: googleImg6,
      },
      {
        id: 'g07',
        title: 'Performance Max',
        text: 'Performance Max Ads on Google allows businesses to deliver ads across Google\'s properties, including YouTube, Google Search, Discover, and Gmail. With Performance Max Ads, businesses can maximize their reach and achieve their advertising goals with a variety of ad formats, including text, display, and video. The platform uses machine learning to optimize ad delivery and ensure the most effective use of advertising budgets.',
        image: googleImg7,
      },
    ],
  },
];