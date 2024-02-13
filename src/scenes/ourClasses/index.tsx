import { SelectedPage, ClassType } from '@/shared/types'
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpg"
import image4 from "@/assets/image4.jpg"
import image5 from "@/assets/image5.jpg"
import image6 from "@/assets/image6.jpg"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from "./Class";


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Ipsum dolor sit amet consectetur adipisicing elit. Quos minima reiciendis sed adipisci commodi quidem explicabo neque, temporibus delectus modi natus, qui eaque hic. Assumenda, ducimus amet eligendi necessitatibus dignissimos dolorem porro magni soluta eum, quae quo hic alias molestias!",
        image: image1,  
    },
    {
        name: "Yoga Classes",
        image: image2,  
    },
    {
        name: "Ab Core Classes",
        description: "Ipsum dolor sit amet consectetur adipisicing elit. Quos minima reiciendis sed adipisci commodi quidem explicabo neque, temporibus delectus modi natus, qui eaque hic. Assumenda, ducimus amet eligendi necessitatibus dignissimos dolorem porro magni soluta eum, quae quo hic alias molestias!",
        image: image3,  
    },
        {
        name: "Adventure Classes",
        description: "Ipsum dolor sit amet consectetur adipisicing elit. Quos minima reiciendis sed adipisci commodi quidem explicabo neque, temporibus delectus modi natus, qui eaque hic. Assumenda, ducimus amet eligendi necessitatibus dignissimos dolorem porro magni soluta eum, quae quo hic alias molestias!",
        image: image4,  
    },
                {
        name: "Fitness Classes",
        image: image5,  
    },
                                {
        name: "Training Classes",
        description: "Ipsum dolor sit amet consectetur adipisicing elit. Quos minima reiciendis sed adipisci commodi quidem explicabo neque, temporibus delectus modi natus, qui eaque hic. Assumenda, ducimus amet eligendi necessitatibus dignissimos dolorem porro magni soluta eum, quae quo hic alias molestias!",
        image: image6,  
    },
    
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Ourclasses) }
        >
         <motion.div
         className='mx-auto w-5/6'
         initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50}, 
                visible:{opacity: 1, x: 0 },
            }}
         >
         <div className='md:w-3/5'>
            <HText>OUR CLASSES</HText>
            <p className='py-5'>
            Ut ultricies ipsum erat, nec auctor arcu placerat at. Sed ut odio augue. Ut id tempor purus. Mauris nisi velit, varius sit amet lobortis quis, faucibus ut orci. Nullam dignissim mollis dui, ut suscipit odio malesuada id. Donec quis consectetur eros. Praesent tempor purus dui. Proin vel tristique orci. Nunc id risus massa. Vivamus aliquet sodales magna.
            </p>
         </div>
         </motion.div>
         <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item: ClassType,index) => (
                    <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    />
                ))}
            </ul>
         </div>
        </motion.div>
    </section>
  )
}

export default OurClasses