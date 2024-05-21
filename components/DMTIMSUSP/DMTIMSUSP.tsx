import USPCard from "../USPCard/USPCard";
import uspcard1 from './images/uspcard1.png'
import uspcard2 from './images/uspcard2.svg'
import uspcard3 from './images/USPBg.svg'
import uspcard4 from './images/uspcard4.svg'
import uspcard5 from './images/uspcard3.svg'
import uspcard6 from './images/uspcard6.svg'
import uspcard7 from './images/uspcard7.svg'
import uspcard8 from './images/uspcard8.svg'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

import "swiper/css/grid"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/free-mode"

// import Swiper core and required modules
import SwiperCore, {
  Grid,Pagination,Scrollbar,FreeMode,Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Grid,Pagination,Scrollbar,FreeMode,Autoplay]);

const DMTIMSUSP = () => {

    const uspcards = [
        { id:0, title: '01', text: 'Industry focused International Curriculum in lines of AACSB & AMBA ', img:uspcard1, bgColor: 'bg-[#4C477A]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:1, title: '03', text: 'Industry Institute Research Project of 3 Months', img:uspcard3, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:2, title: '05', text: 'Duration: 24 months (including Industry Exposure and International Immersions) ', img:uspcard5, bgColor: 'bg-[#4C477A]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:3, title: '07', text: 'Mentoring with Industry Experts and the Academia: Continuous Process ', img:uspcard7, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:4, title: '09', text: 'Campus located within 2 kms of Railway station & Bus stops making travel convenient', img:uspcard1, bgColor: 'bg-[#4C477A]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:5, title: '11', text: 'Affordable and highly competitive fees with international academic quality.', img:uspcard3, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:6, title: '13', text: 'Year long corporate interface.', img:uspcard5, bgColor: 'bg-[#4C477A]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:7, title: '15', text: 'Additional 10 plus free certifications to augment technical, domain and soft skills and graded as per student performance.', img:uspcard7, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:8, title: '17', text: 'Alumni Buddy System for knowledge-based interactions.', img:uspcard1, bgColor: 'bg-[#4C477A]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:9, title: '19', text: 'Pre placement grooming with extempore, mock group discussions and interview workshops.', img:uspcard3, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:10, title: '21', text: 'Live Industry / Business Projects.', img:uspcard5, bgColor: 'bg-[#4C477A]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:11, title: '02', text: 'Trimester Modules: 7 Trimesters of 3 months each (Classroom Trimesters) ', img:uspcard2, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:12, title: '04', text: 'Global Opportunities & Threat Analysis (GOTA).', img:uspcard4, bgColor: 'bg-[#EE3768]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:13, title: '06', text: 'Winter Internship of 1 month with an NGO ', img:uspcard6, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:14, title: '08', text: 'International Industry Engagement & Internship. ', img:uspcard8, bgColor: 'bg-[#FFB800]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:15, title: '10', text: 'Shopping malls, hospitals, medical care & multi cuisine. restaurants available within 1 kms range of campus', img:uspcard2, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:16, title: '12', text: 'Intensive 20 days structured and 3 phase Induction  Module. ', img:uspcard4, bgColor: 'bg-[#EE3768]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:17, title: '14', text: 'Scope of International Industrial Visit. ', img:uspcard6, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:18, title: '16', text: 'Three months paid Internship in Trimester IV.. ', img:uspcard8, bgColor: 'bg-[#FFB800]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:19, title: '18', text: 'Psychometic tests and personality development programs. ', img:uspcard2, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
        { id:20, title: '20', text: 'Industrial visits covering interactions with top management.', img:uspcard4, bgColor: 'bg-[#EE3768]',titleColor: 'text-[#f2f2f2]', textColor: 'text-[#f2f2f2]'},
        { id:21, title: '22', text: 'Online Library of leading  research databases, e-journals, magazine subscriptions, e-books and discovery service of EBSCO,Proquest & J Gate.', img:uspcard6, bgColor: 'bg-white',titleColor: 'text-[#BDBDBD]', textColor: 'text-[#28314A]'},
    ]

    return (  
        <section className='relative bg-[#F2F2F2]'>
            <div className='flex flex-col px-4'>
                <div className='mx-auto w-full max-w-screen-2xl py-4 lg:my-4'>
                    <h2 id="DMTIMS-USP" className='dmtims-title py-12'>DMTIMS USPs</h2>
                    <Swiper className='usp-swiper pb-6' slidesPerView={1} scrollbar={{draggable: true}} grid={{"rows": 2, 'fill': 'row'}} autoplay={{
                        "delay": 10000,
                        "disableOnInteraction": false 
                    }} breakpoints={{
                    "768": {
                        "slidesPerView": 2,
                    },
                    "991": {
                        "slidesPerView": 3,
                    },
                    "1200": {
                        "slidesPerView": 4,
                    }
                    }}>
                        {uspcards.map(({id,title,text,img,bgColor,titleColor,textColor}) => (
                            <SwiperSlide key={id} className='flex flex-col'>
                                <USPCard title={title} text={text} bgColor={bgColor} titleColor={titleColor} textColor={textColor} img={img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
 
export default DMTIMSUSP;