import Header from '../components/Header';
import Footer from '../components/Footer';


function Contact() {

    return (
        <div className="min-h-full bg-gray-100 font-serif">
            <div className="flex flex-col">
                <Header />  
            </div>

            <div className="text-center" >
                <h1 className="text-4xl text-red-900 font-bold mt-10">Contact Us</h1>
            </div>

            <div className=" bg-gray-100 mx-2 flex flex-col mt-14 md:mt-20 md:mb-20">
                <div className="max-w-md w-full mx-auto mt-4 p-5 rounded-md bg-gray-200 border-gray-300">
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Full Name</label>
                            <input placeholder="Your Name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email Address</label>
                            <input placeholder="Email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Comments</label>
                            <input placeholder="Comments" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>

                        <div className="text-center">
                            <butoon className="w-full py-2 px-4 transition duration-300 font-bold bg-gray-300 hover:bg-gray-400 rounded-md text-md cursor-pointer">Send</butoon>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-12 mb-4">
                    <h2 className="p-2 font-semibold text-xl"> <span className="text-red-900" > Address </span>: NH-2, Mathura-Delhi Highway, Mathura </h2>
                    <h2 className="p-2 font-semibold text-xl"> <span className="text-red-900" > Phone Number </span> : 9999999999 </h2>
                    <h2 className="p-2 font-semibold text-xl"> <span className="text-red-900" > Email  </span>: hardrockcafe@gmail.com</h2>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Contact;