import Ilustra from "../../assets/ilust.svg"

const main = () => {
  return (
    <section className="flex ">
        <div className="relative">
            <div className="pt-[120px] pl-[120px] absolute">
                <h1 className="leading-none w-[720px]">
                    <span className="block text-blue-600 text-[56px]">Unlock Your Potential</span>
                    <span className="block text-black-900 text-[56px]">with Strategic</span>
                    <span className="block text-black-900 text-[56px]">Consulting</span>
                </h1>
                <br />
                <p>Guiding Your Success Journey Through Expertise and Innovation</p>

                <div className="mt-[48px] flex gap-4">
                    <a href="/" className="flex gap-3 w-[320px] h-[56px]  rounded-3xl justify-center items-center bg-white text-xs text-gray-400">
                        <i class="bi bi-envelope text-xl" ></i>
                        Enter your email to get started
                    </a>

                    <a href="/" className="flex gap-3 w-[208px] h-[56px]  rounded-3xl justify-center items-center bg-blue-600 text-white text-base">
                        GET STARTED
                        <i class="bi bi-arrow-up-right-circle-fill text-4xl"></i>
                    </a>  
                </div>
            </div>

            <div className='absolute w-[750px] top-0 left-190  '>
                <img src={Ilustra} alt="" />
            </div>

            

        </div>
    </section>
  )
}

export default main