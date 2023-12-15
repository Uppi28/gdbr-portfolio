import { Box } from "@mui/system"

const Introduction = () => {
    return (
        <>
            <Box className="flex justify-center items-center flex-col w-full px-10 py-32" style={{background: `url('https://cdn.dribbble.com/users/1100256/screenshots/7124464/media/94a5e074f80ae9466705cf4c833c3432.gif')`}}>
                    <div className="w-1/2 font-bold text-6xl">
                        Trusted Security Partner for your Business
                    </div>
                    <div className="w-1/2">
                        We help you focus on your core business while we take care of your
                        security by delivering Specialized Cyber Security services with the
                        utmost quality.
                    </div>
            </Box>
        </>
    )
}

export default Introduction