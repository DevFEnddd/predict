import React from 'react'

const DefaultLayout = ({children}) => {
    return (
        <>
            {children}


            <footer className="bg-white rounded-lg shadow mt-12">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#"
                           className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap ">CookingRecipe</span>
                        </a>
                        
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8"/>
                    <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a
                        href="#"
                        className="hover:underline">CookingRecipe™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}
export default DefaultLayout
