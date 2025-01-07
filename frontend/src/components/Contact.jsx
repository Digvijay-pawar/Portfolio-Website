import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center p-12">
            {/* Header */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-8">Contact Me</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
                I’d love to hear from you! Whether it’s a question, a project, or just to say hello, feel free to reach out.
            </p>

            {/* Contact Form */}
            <div className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h2>
                <form className="space-y-6">
                    <div>
                        <label className="block text-lg text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-lg text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>

                    <div>
                        <label className="block text-lg text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Message"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
