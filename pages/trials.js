import styled from "styled-components"
import Layout from "../components/layouts/Layout.component"
import Section from "../components/sections/Trials/Section.component"
import { Gifts, Upload,Relax,Download, Discount } from "../components/utils/Icons"
import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef, useState } from "react"

const Trials = () => {
    return (
       <Layout route="Trials">
            <Section 
             Icon={Gifts}
             bgColor="#f5f5f5"
             heading="Get your first 10 images free"
             description="Sign up today and get 10 free edits — no credit card required."
             btnTxt="upload free trial photos"
             />
             <Section 
             heading="How it works"
             description="Create your account, upload your images, define your image-editing needs and relax."
             >
                 <FeatureWrapper>
                    {
                        Data.map(sec => {
                            return <Feature key={sec.type} {...sec} />
                        })
                    }
                 </FeatureWrapper>
             </Section>
             <Section 
             bgColor="#f5f5f5"
             heading="Outsourced image editing benefits"
             description="Cost-efficient outsourcing, exceptional support, and perfect results for thousands of images per day, delivered within 24 hours by highly trained professionals."
             >
                 <FeatureWrapper>
                    {
                        OutSurgedImg.map(sec => {
                            return <Feature key={sec.type} {...sec} />
                        })
                    }
                 </FeatureWrapper>
             </Section>
             <Section 
             heading="Pricing FAQs"
             >
                 <FeatureWrapper>
                  {
                      AccordionData.map(acc => {
                          return <AccordionItem key={acc.name} {...acc} />
                      })
                  }
                 </FeatureWrapper>
             </Section>
             <Section 
             heading="Find the support you need"
             description="Do you need help getting started? Our team is happy to answer all your questions."
             btnTxt="Get in touch"
             margin="12rem 0"
             />
       </Layout>
    )
}

export default Trials

const FeatureWrapper = styled.div`
max-width : 120rem;
margin : 0 auto;
margin-top: 5rem;
`

const AccordionData = [
    {
        name : 'How much does it costs',
        desc : `The price depends on the kind of editing you are looking for but usually starts at $1,25 per image for basic editing. With each additional adjustment, the price increases slightly. In case you are uploading a bigger amount of images per month, a 'one price fits all' principle will be applied. This way we meet your custom editing needs and include suitable discounts based on the required editing and the number of images.`
    },
    {
        name : 'Do you have a free trial?',
        desc : `The price depends on the kind of editing you are looking for but usually starts at $1,25 per image for basic editing. With each additional adjustment, the price increases slightly. In case you are uploading a bigger amount of images per month, a 'one price fits all' principle will be applied. This way we meet your custom editing needs and include suitable discounts based on the required editing and the number of images.`
    },
    {
        name : 'How are the prices composed?',
        desc : `The price depends on the kind of editing you are looking for but usually starts at $1,25 per image for basic editing. With each additional adjustment, the price increases slightly. In case you are uploading a bigger amount of images per month, a 'one price fits all' principle will be applied. This way we meet your custom editing needs and include suitable discounts based on the required editing and the number of images.`
    },
    {
        name : 'How can I pay ?',
        desc : `The price depends on the kind of editing you are looking for but usually starts at $1,25 per image for basic editing. With each additional adjustment, the price increases slightly. In case you are uploading a bigger amount of images per month, a 'one price fits all' principle will be applied. This way we meet your custom editing needs and include suitable discounts based on the required editing and the number of images.`
    },
    {
        name : 'Do I go for Pay-as-you-go or Enterprise?',
        desc : `The price depends on the kind of editing you are looking for but usually starts at $1,25 per image for basic editing. With each additional adjustment, the price increases slightly. In case you are uploading a bigger amount of images per month, a 'one price fits all' principle will be applied. This way we meet your custom editing needs and include suitable discounts based on the required editing and the number of images.`
    }
]

const OutSurgedImg = [
    {
        Icon : Gifts,
        type : 'The first 10 images are free',
        desc : 'If you are a first time customer, your new account provides the first ten images for free. In this way we make it possible for you to test our service and all its features, no questions asked and no strings attached.'
    },
    {
        Icon : Gifts,
        type : 'The first 10 images are free',
        desc : 'If you are a first time customer, your new account provides the first ten images for free. In this way we make it possible for you to test our service and all its features, no questions asked and no strings attached.'
    },
    {
        Icon : Gifts,
        type : 'The first 10 images are free',
        desc : 'If you are a first time customer, your new account provides the first ten images for free. In this way we make it possible for you to test our service and all its features, no questions asked and no strings attached.'
    },
    {
        Icon : Gifts,
        type : 'The first 10 images are free',
        desc : 'If you are a first time customer, your new account provides the first ten images for free. In this way we make it possible for you to test our service and all its features, no questions asked and no strings attached.'
    },
    {
        Icon : Gifts,
        type : 'The first 10 images are free',
        desc : 'If you are a first time customer, your new account provides the first ten images for free. In this way we make it possible for you to test our service and all its features, no questions asked and no strings attached.'
    },
    {
        Icon : Gifts,
        type : 'The first 10 images are free',
        desc : 'If you are a first time customer, your new account provides the first ten images for free. In this way we make it possible for you to test our service and all its features, no questions asked and no strings attached.'
    }
]

const Data = [
    {
        Icon : Upload,
        type : '1. Upload.',
        desc: 'Create an account, upload your images, and start using our services.'
    },
    {
        Icon : Relax,
        type : '2. Relax',
        desc: 'You can relax and let us worry about image specs, deadlines, and quality.'
    },
    {
        Icon : Download,
        type : '3. Download.',
        desc: 'Perfect results, time, and time again. Just by the press of a button.'
    }
]

const Feature = ({ Icon,type,desc }) => {
    return(
        <FeatureFig>
            <Icon />
            <h2 className="feature-head">
                {type}
            </h2>
            <p>
                {desc}
            </p>
        </FeatureFig>
    )
}

const AccordionItem = ({ name,desc }) => 
{
    const [isOpen,setOpen] = useState(false);
    const [height,setHeight] = useState(0);

    const contentRef = useRef(null);

    useEffect(() => {
        if(isOpen){
            setHeight(contentRef.current.scrollHeight);
        }
    },[isOpen])
    const dropDownToggler = _ => {
        setOpen(!isOpen);
    }
    
    return(<Accordion
    maxHeight={height} 
    active={isOpen}>
    <button onClick={dropDownToggler}>
        <h2>
            {name}
        </h2>
        <FaChevronDown />
    </button>
    <div className="content" ref={contentRef}>
        <p>
            {desc}
        </p>
    </div>
</Accordion>)}

const FeatureFig = styled.div`
text-align : center;
width: 33.3%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
float: left;
margin-top: 4rem;
padding : 4rem;
h2{
    font-size : 2rem;
    margin-top: 1.5rem;
}
svg{
    width: 15rem;
    height: max-content;
}
p{
    text-align: center;
    margin: 0;
    max-width: 35rem;
}
`

const Accordion = styled.div`
max-width: 80rem;
border-bottom : 1px solid #D0D0D0;
margin: 0 auto;
button{
    display: flex;;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    padding: 2.5rem 2rem;
    background-color: var(--baseBg);
    h2{
        font-size : 2rem;
        margin: 0;
    }
    svg{
        transition : 0.3s all;
        transform : ${props => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
}
.content{
    text-align : left;
    overflow : hidden;
    max-height: ${props => props.active ? `${props.maxHeight}px` : '0px'};
    transition : 0.3s all;
    p{
        margin: 0rem 2rem 3rem 2rem;
    }
}
&:first-child{
    border-top : 1px solid #D0D0D0;
}
`