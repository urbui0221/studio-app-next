import React from 'react'
import styled from 'styled-components'
import useInput from '../../../custom/hooks/useInput'

const Form = () => {
    const name = useInput("")
    const subject = useInput("")
    const email = useInput("")
    const message = useInput("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Name: ",name.value)
        console.log("Subject: ",subject.value)
        console.log("Email: ",email.value)
        console.log("Message: ",message.value)
    }
    return (
        <Container>
        <div className="section pt-12 mb-10">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="contact-info">
                       {ContactInformationData.map((info, index) => (
                        <div className="icon-boxes" key={index}>
                        <div className="icon-boxes-inner">
                            <h5 className="icon-boxes-title">{info.title}</h5>
                            <div className="icon-boxes-content" dangerouslySetInnerHTML={{__html: info.info}}>
                            </div>
                        </div>
                    </div>
                       ))} 
                        <ul className="film-social">
                        {ContactLinksData.map((link, index) => (
                            <li key={index}><a href={link.href} target="_blank"><i className={link.className}></i></a></li>
                        ) )}
                    </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <h3 className="section-title bottom-line mb-5">Get In Touch</h3>
                    <form method="post" onSubmit={onSubmit} className="contact-form">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" name="your-name" className="mb-3" placeholder="Name" value={name.value} onChange={name.onChange} />
                            </div>
                            <div className="col-md-4">
                                <input type="text" name="your-subject" className="mb-3" placeholder="Subject" value={subject.value} onChange={subject.onChange} />
                            </div>
                            <div className="col-md-4">
                                <input type="email" name="your-email" className="mb-3" placeholder="Email" value={email.value} onChange={email.onChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea name="your-message" className="mb-3 text-area" placeholder="Message" value={message.value} onChange={message.onChange}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <input type="submit" value="SEND US NOW" className="button" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </Container>
    )
}

export default Form

const ContactLinksData = [
    {
        name: 'Facebook',
        href:'/',
        className:'fa fa-facebook'
    },
    {
        name: 'Twitter',
        href:'/',
        className:'fa fa-twitter'
    },
    {
        name: 'Vine',
        href:'/',
        className:'fa fa-vine'
    },
    {
        name: 'Youtube',
        href:'/',
        className:'fa fa-youtube-play'
    },
]

const ContactInformationData = [
    {
        title: 'Address',
        info: '1800 Abbot Kinney Blvd. Unit D &amp; E <br /> Venice, CA 90291',
    },
    {
        title: 'Phone',
        info: 'Mobile: (+88) – 1990 – 6886 <br /> Hotline: 1800 – 1102',
    },
    {
        title: 'Email',
        info: 'support@9studio.com <br /> contact@9studio.com',
    },
]

const Container = styled.div`
.contact-info .icon-boxes {
    margin-bottom: 30px;
	padding-bottom: 30px;
	border-bottom: 1px solid #f4f4f4;
}
.contact-info .icon-boxes .icon-boxes-inner {
    display: table-cell;
    vertical-align: top;
}
.contact-info .icon-boxes .icon-boxes-title {
    margin-top: 0;
	margin-bottom: 10px;
    letter-spacing: .05em;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
	font-family: Montserrat,Helvetica,Arial,sans-serif;
}
.contact-info .icon-boxes .icon-boxes-content {
    font-family: var(--font3);
    color: #696969;
}

.film-social li {
    margin-right: 10px;
	position: relative;
    display: inline-block;
}
.film-social a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    border: 1px solid #f4f4f4;
    border-radius: 20px;
    font-size: 14px;
    color: #696969;
}
.film-social li:hover > a {
    background-color: #da0e2b;
	color: #fff;
}
.film-social .tooltip.top .tooltip-arrow {
    border-top-color: #da0e2b;
}
.film-social .tooltip-inner {
    background-color: #da0e2b;
}

.section-title {
	font-size: 34px;
    color: #333333;
    line-height: 1.4em;
    font-family: var(--head);
    font-weight: 400;
    font-style: normal;
    text-transform: none;
}

.section-title.bottom-line:after {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: var(--primary);
    margin-top: 5px;
}

.button {
    background-color: var(--primary);
    color: #fff;
    padding: 0 20px;
    display: inline-block;
    font-size: 14px;
    font-family: var(--display);
    font-weight: 400;
    line-height: 46px;
    height: 48px;
    border: 1px solid var(--primary);
    text-transform: uppercase;
    letter-spacing: .05em;
    :hover {
    background-color: var(--baseBg);
    color: var(--primary);
  }
}

.text-area{
    width: 100%;
    height: 21vh;
}

`