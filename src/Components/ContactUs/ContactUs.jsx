const ContactUs = () => {
    return (
        <div className="mt-12">
            <h2 className="text-5xl text-center mb-8 font-bold">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-evenly">
                <div>
                    <img className="h-20 mx-auto" src={'https://i.ibb.co/mNrxmwX/address-orange.jpg'} alt="" />
                    <p className="mt-4 text-xl font-bold text-center">House #44, 4th Floor, Shyampur, Faridabad, <br /> Kadamtoli, 1204, Dhaka,
                        Bangladesh</p>
                </div>
                <div>
                    <img className="h-20 mx-auto" src={'https://i.ibb.co/3fzwV6F/mobile-orange.png'} alt="" />
                    <p className="mt-4 text-xl font-bold text-center">01764199181</p>
                </div>
                <div>
                    <img className="h-20 mx-auto" src={'https://i.ibb.co/6ncdP4v/email-orange.png'} alt="" />
                    <p className="mt-4 text-xl font-bold text-center">kowshikchakraborty6@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;