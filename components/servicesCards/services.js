/* eslint-disable react/display-name */
import { IoMdBuild } from 'react-icons/io'
import { FaMobileAlt } from 'react-icons/fa'
import { RiPencilRuler2Fill } from 'react-icons/ri'
import { GrTechnology } from 'react-icons/gr'
import { RiEqualizerLine } from 'react-icons/ri'
import { GrCloudSoftware } from 'react-icons/gr'

export const services = [
    {   
        icon: function() {
            return (<IoMdBuild size={50}/>)
        },
        service: 'Custom Software Development',
        paragraph: 'We develop and design custom software solutions for your company or startup. We work with you using the newest technologies to deliver solutions that fit the needs of their users on any platform.',
        list: ['Website Development', 'Mobile App Development', 'Single Page Applications & Progressive Web Apps']
    },
    {
        icon: function() {
            return (<FaMobileAlt size={50}/>)
        },
        service: 'Mobile App Development',
        paragraph: 'We help you develop creative and innovative mobile apps that deliver a cutting edge experience to users. We can help you from any stage of product development, from design and creating an MVP to maintenance.',
        list: ['Native App Development', 'Cross-Platform App Development', 'Mobile Web App Development']
    },
    {
        icon: function() {
            return (<RiPencilRuler2Fill size={50}/>)
        },
        service: 'UI/UX Design',
        paragraph: 'We help design the user interface and user experience for your software to ensure an effective app for your users. Using innovative tools and design procedures, we make sure your software is top notch.',
        list: ['Wireframes', 'Mockups', 'Prototyping']
    },
    {
        icon: function() {
            return (<GrTechnology size={50}/>)
        },
        service: 'IT Consulting',
        paragraph: 'We ensure that your tech workflow is effective and optimized by implementing the newest and innovative technology to remove handicaps, points of headache, and help grow your business.',
        list: ['System and Platform Integration', 'IoT Solutions', 'Project Management Consulting']
    },
    {
        icon: function() {
            return (<RiEqualizerLine size={50}/>)
        },
        service: 'Testing & QA',
        paragraph: 'We make sure that your custom software works the way it is meant to work. We use effective testing and quality assurance strategies to eliminate problems with your product to ensure the highest quality software.',
        list: ['Multi-Stage Unit Testing', 'Functional & End to End Testing', 'Quality Assurance Consulting']
    },
    {
        icon: function() {
            return (<GrCloudSoftware size={50}/>)
        },
        service: 'Application Services',
        paragraph: 'We help connect and integrate software systems and services with the development and maintenance of your application solutions to make sure they are optimized and always up and running.',
        list: ['API Integrations', 'Cloud Service Integration', 'Software Deployment']
    }
]