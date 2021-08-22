import Header from '../components/Header';
import Footer from '../components/Footer';

import Chef from '../assets/chef.jpg'

function About() {

    return (
        <div className="min-h-full bg-gray-100 font-serif">
            <div className="flex flex-col">
                <Header />  
            </div>

            <div className="mb-20 text-center">
                <h1 className="text-2xl font-bold text-red-900 mt-8 mb-8">About Us</h1>
                <figure className="md:flex bg-gray-50 rounded-xl m-5 p-8 md:p-10 md:m-8 border">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src={Chef} alt="" width="384" height="512"/>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <p className="text-lg font-semibold">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis earum cupiditate necessitatibus amet eligendi accusamus sequi laborum odit id commodi, natus minus labore eveniet a quo. Distinctio excepturi veniam unde dignissimos beatae quos facere qui assumenda dolorem maxime placeat, voluptatem harum cupiditate, provident consequuntur cum quod soluta quia. Beatae, vitae!
                        </p>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-50 rounded-xl m-5 p-8 md:p-10 md:m-8 border">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src={Chef} alt="" width="384" height="512"/>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <p className="text-lg font-semibold">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis earum cupiditate necessitatibus amet eligendi accusamus sequi laborum odit id commodi, natus minus labore eveniet a quo. Distinctio excepturi veniam unde dignissimos beatae quos facere qui assumenda dolorem maxime placeat, voluptatem harum cupiditate, provident consequuntur cum quod soluta quia. Beatae, vitae!
                        </p>
                    </div>
                </figure>
                <figure className="md:flex bg-gray-50 rounded-xl m-5 p-8 md:p-10 md:m-8 border">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src={Chef} alt="" width="384" height="512"/>
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <p className="text-lg font-semibold">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis earum cupiditate necessitatibus amet eligendi accusamus sequi laborum odit id commodi, natus minus labore eveniet a quo. Distinctio excepturi veniam unde dignissimos beatae quos facere qui assumenda dolorem maxime placeat, voluptatem harum cupiditate, provident consequuntur cum quod soluta quia. Beatae, vitae!
                        </p>
                    </div>
                </figure>
            </div>


            <Footer />

        </div>
    )
}

export default About;