function Button({text}) {
    return (
        <>

            <button type="button" className="text-white bg-[#2CB1BC] hover:bg-[#5fa5ac] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-[#2CB1BC] dark:hover:bg-[#2CB1BC] dark:focus:bg-[#55898e]">
                {text}
            </button>
        </>
    )
}
export default Button;