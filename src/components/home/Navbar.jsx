import Logo from '../../assets/Logo.svg'

const navbarLinks = [
    {
        id: 1,
        title: "Services",
        link: "/"
    },

    {
        id: 2,
        title: "About Us",
        link: "/"
    },

    {
        id: 3,
        title: "Contact Us",
        link: "/"
    },
]

const Navbar = () => {
  return (
    <nav className=" w-full">
        <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
            {/*Logo*/}
        <div>
            <img src={Logo} alt="" />
        </div>


        {/*links de navegacion*/}
        <div>
            <ul className='flex sm:space-x-8 space-x-4 px-4'>
                
                {navbarLinks.map((link) => (
                    <li key={link.id} >
                        <a 
                            href={link.link}
                            className='text-base '
                        
                        
                        >{link.title}</a>

                    </li>
                ))}
            </ul>
       
        </div>

        <button>
            <a className='bg-transparent border-2 border-blue-600 w-[200px] h-[56px] rounded-3xl text-blue-700 font-bold flex items-center justify-center cursor-pointer'>(987)-749-5403</a>
        </button>

        </div>


    </nav>
  )
}

export default Navbar