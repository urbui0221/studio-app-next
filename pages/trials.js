import styled from "styled-components"
import Section from "../components/sections/Trials/Section.component"
import { Gifts } from "../components/utils/Icons"

const Trials = () => {
    return (
        <div>
            <Section 
            Icon={Gifts}
            bgColor="#D0D0D0"
            heading="Get your first 10 images free"
            description="Sign up today and get 10 free edits — no credit card required."
            btnTxt="upload free trial photos"
            />
            <Section 
            heading="How it works"
            description="Create your account, upload your images, define your image-editing needs and relax."
            btnTxt="upload free trial photos"
            />
        </div>
    )
}

export default Trials

const FeatureWrapper = styled.div`

`

const Feature = ({ Icon,type,desc }) => {
    return(
        <FeatureFig>
            <div className="feature-icon">
                <Icon />
            </div>
            <h2 className="feature-head"></h2>
        </FeatureFig>
    )
}

const FeatureFigure = styled.div`
text-align : center;
`