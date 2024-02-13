import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
        {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers ",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    },
       
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}

    >
        {/* Header */}
    <motion.div 
    className="md:my-5 md:w-3/5"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5}}
    transition={{ duration: 0.5 }}
    variants={{
        hidden: { opacity: 0, x:-50}, 
        visible:{opacity: 1, x: 0 },
    }}
    >
     <HText>MORE THAN JUST A GYM.</HText>
     <p className="my-5 text-sm">
        We provide world class fitness equipment, trainers and classes get you to your ultimate fitness goals with ease. We provide true care into each and every member
     </p>
    </motion.div>

       {/*Benefits  */}
       <motion.div 
       className="mt-5 items-center justify-between gap-8 md:flex"
       initial='hidden'
       whileInView='visible'
       viewport={{ once: true, amount: 0.5}}
       variants={container}
       >
        {benefits.map((benefit: BenefitType) => (
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
        ))}
       </motion.div>

       {/* Graphic and Description */}
       <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* Graphic */}
        <img 
        className="mx-auto"
        src={BenefitsPageGraphic} 
        alt="benefits-page-graphic" 
        />

        {/* Description */}
        <div>
           {/* Title */}
           <div className="relative">
             <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves ">
              <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5}}
              transition={{ duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, x:50}, 
                  visible:{opacity: 1, x: 0 },
              }}
              >
                <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                    <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
             </div>
           </div>
  
          {/* Descript */}
             <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5}}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
                 hidden: { opacity: 0, x:50}, 
                 visible:{opacity: 1, x: 0 },
             }}
             >
                <p className="my-5">
                Mauris purus velit, suscipit quis feugiat ut, malesuada sit amet odio. Nam mattis elit nec ipsum commodo, quis ornare eros aliquet. Vestibulum tincidunt sodales rutrum. Fusce porttitor vulputate lectus, et molestie sapien laoreet et. Curabitur velit dui, vehicula eleifend nibh at, dignissim tincidunt risus. Integer imperdiet et neque vitae luctus. Nam faucibus nisl purus, eget viverra nibh elementum at. Praesent quis consectetur felis.
                </p>
                <p className="mb-5">
                Morbi laoreet eget nunc sed tincidunt. Proin blandit diam arcu. Donec erat diam, fermentum at sapien quis, sagittis malesuada sem. Donec facilisis sit amet massa id ullamcorper. Quisque aliquam vestibulum dolor vel semper. Ut pellentesque arcu dui, quis mollis nisl convallis nec. Morbi ultricies, sapien vitae pellentesque ultricies, mi risus euismod nulla, a congue leo dui sit amet libero. Cras eu odio augue.
                </p>
             </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
        </div>
       </div>
    </motion.div>
    </section>
  )
}

export default Benefits