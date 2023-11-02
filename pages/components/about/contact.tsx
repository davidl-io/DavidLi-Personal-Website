import React, { FC, ChangeEvent, FormEvent } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { HiOutlineMail } from "react-icons/hi"; 
import { RxAvatar } from "react-icons/rx"; 



type FormData = {
    name: string;
    email: string;
    message: string;
};

const initialFormData: FormData = {
    name: '',
    email: '',
    message: ''
};

const Contact: FC = () => {
    const [formData, setFormData] = React.useState<FormData>(initialFormData);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Send formData to your backend
        console.log(formData);
        alert("Message sent! We'll be in touch soon.");
        setFormData(initialFormData);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="bg-gray-100 p-14 rounded-lg shadow-md mt-32 w-7/12">
            <h1 className="text-center text-2xl font-semibold mb-2">Want to work with me?</h1>
            <h3 className="text-center text-xl mb-4">Let's talk</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <RxAvatar size={32} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <Input
                        className="pl-12 border rounded-md w-full py-2"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="relative">
                    <HiOutlineMail size={32} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <Input
                        className="pl-12 border rounded-md w-full py-2"
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <Textarea
                    className="w-full border rounded-md py-2 px-3"
                    placeholder="Your message ..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md transition duration-300"
                    type="submit"
                >
                    Send Message
                </Button>
            </form>
        </div>
    );
};

export default Contact;
