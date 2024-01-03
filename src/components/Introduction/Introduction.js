import { Button, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import badge from '../../assets/images/badge.png';
import callCenter from '../../assets/images/call-center.png';
import expert from '../../assets/images/expert.png';
import pricing from '../../assets/images/pricing.png';
import milestone from '../../assets/images/milestone.png';
import certificationImg from "../../assets/images/certification-bro.svg";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Introduction = () => {
    const companyName = 'Gayathri\'s company';
    const API_ACCESS_KEY = '90eca71f-00aa-4c4c-bb40-2cfe0d701fb3';
    const benefitsWithUs = [
        {heading: 'Top Notch Quality', subText: 'No Compromise on Quality; Customer satisfaction guaranteed', icon: badge},
        {heading: 'Industry experts', subText: 'Seasoned experts h decades of experience across multiple domains', icon: expert},
        {heading: 'Fair Pricing', subText: 'Our solutions are afforable and easy on your pocket', icon: pricing},
        {heading: 'Always Available', subText: 'High quality support. Night or day, rain or snow, we\'ve got your back', icon: callCenter},
    ]
    return (
        <>
            <Box className="flex justify-center items-center flex-col w-full px-10 py-32" 
                style={{
                    background: `url('https://cdn.dribbble.com/users/1100256/screenshots/7124464/media/94a5e074f80ae9466705cf4c833c3432.gif')`,
                    backgroundSize: 'cover'    
                }}>
                    <div className="w-1/2 font-bold text-6xl text-center text-gray-700">
                        Trusted Security Partner for your Business
                    </div>
                    <div className="w-1/2 text-center">
                        We help you focus on your core business while we take care of your
                        security by delivering Specialized Cyber Security services with the
                        utmost quality.
                    </div>
                    <Button variant="contained">See how we can help you</Button>
            </Box>

            <div className="px-4 width-full">
                <div className="text-5xl text-center mt-6">Why choose us? </div>
                <div className="text-center mb-8">Benefits of engaging with {companyName}</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 content-center justify-around lg:px-32">
                    {benefitsWithUs.map(d => {
                        return (
                        <div 
                            className="border rounded-md border-slate-200 flex items-center justify-center flex-col p-6
                            col-span-1">
                            <img src={d.icon} style={{height: '64px'}} alt=''></img>
                            <div className="text-2xl font-semibold text-center text-gray-700">{d.heading}</div>
                            <div className="text-center text-gray-600">{d.subText}</div>
                        </div>)
                    })}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-2 items-center">
                <div className="flex items-center justify-center m-32">
                    <img src={milestone} alt="Milestone" />
                </div>
                <div className="p-4">
                    <div className="text-5xl text-left mt-6 text-gray-700 mb-4">Get a free roadmap to secure your business in 5 days </div>
                    <div className="text-left text-gray-600">We help in building a customized security program to meet your business needs and align with the industry best practices. We try to identify your risk and where you should focus your efforts using some of the best security practices and frameworks.</div>
                    <ul >
                        <li className="my-2"><CheckBoxIcon sx={{color: '#1583e7'}}/>Assess current security posture</li>
                        <li className="my-2"><CheckBoxIcon sx={{color: '#1583e7'}}/>Perform gap analysis</li>
                        <li className="my-2"><CheckBoxIcon sx={{color: '#1583e7'}}/>Identify critical risks along with business priorities</li>
                        <li className="my-2"><CheckBoxIcon sx={{color: '#1583e7'}}/>Build tailored security roadmap</li>
                        <li className="my-2"><CheckBoxIcon sx={{color: '#1583e7'}}/>Execute, Monitor, Enhance</li>
                    </ul>
                </div>
            </div>
            <div className="bg-black">
                <form action="https://api.web3forms.com/submit" method="POST" className="flex items-center justify-around p-6">
                    <input className="border rounded-md h-10 w-[300px] px-5" placeholder="Enter  here" type="hidden" name="access key" value={API_ACCESS_KEY} />
                    <input className="border rounded-md h-10 w-[300px] px-5" placeholder="Enter Name here" type="text" name="name" required />
                    <input className="border rounded-md h-10 w-[300px] px-5" placeholder="Enter Email here" type="email" name="email" required />
                    <div class="h-captcha" data-captcha="true"></div>
                    <Button variant="contained" sx={{height: '2.5rem', width: '200px'}} type="submit">Submit Form</Button>
                </form>
            </div>

            <div className="flex">
                <div className="w-1/2 flex items-start justify-center flex-col p-16 text-2xl text-gray-600">
                Gayathri Devi - A CERT-In empanelled vendor, determines the effectiveness of IT Security controls over information resources and assets that support operations in the auditee organisations, and will identify vulnerabilities in their IT infrastructure. 
                Indian Computer Emergency Response Team (CERT-In) empanels IT Security Auditing Organisations for auditing, including vulnerability assessment and penetration testing of computer systems, networks and applications of various organisations of the Government and those in other sectors of the Indian economy.
                <Button variant="contained" sx={{height: '2.5rem', width: 'auto', marginTop: '25px'}} type="submit">
                    Get CERT-IN safe to host certificate
                </Button>
                </div>
                <img src={certificationImg} alt="Certification" className="w-1/2" />
            </div>
            <div className="flex flex-col justify-center items-center p-16 ">
                <div className="text-3xl font-semibold text-gray-600">Choose Your Right Solution</div>
                <div className="text-xl text-gray-600">We understand that every business is unique. That is why we collaborate with you to create cybersecurity solutions that complement your business while also meeting your specific security requirements.</div>
                <div className="font-semibold text-xl">At CYBERNERDS, we provide tailored services for every business, including:</div>
            </div>


            <script src="https://web3forms.com/client/script.js" async defer></script>
        </>
    )
}

export default Introduction