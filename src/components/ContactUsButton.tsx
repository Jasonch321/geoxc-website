import React from 'react'
import clsx from 'clsx'

const ContactUsButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href="mailto:jason@geoxc.com">
            <button
                type="button"
                className={clsx(
                    "flex items-center justify-center min-w-[180px] mt-3 px-6 h-12 rounded-full w-full sm:w-fit font-semibold transition",
                    {
                        "text-white bg-black hover:bg-gray-800": dark,
                        "text-black bg-white hover:bg-gray-100 border border-gray-300": !dark
                    }
                )}
            >
                Contact Us
            </button>
        </a>
    )
}

export default ContactUsButton
