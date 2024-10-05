import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { styles } from "../styles"; // Import the styles object
import { SectionWrapper } from "../hoc"; // Assuming you have this HOC to wrap sections
import { slideIn } from "../utils/motion"; // Importing the motion variant

const SpamDetection = () => {
    const [emailContent, setEmailContent] = useState("");
    const [errors, setErrors] = useState({});
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        if (!emailContent.trim()) {
            newErrors.emailContent = "Email content is required";
        }
        return newErrors;
    };

    // Handle textarea change and clear error
    const handleChange = (e) => {
        setEmailContent(e.target.value);

        // Clear error as the user types
        if (errors.emailContent) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                emailContent: "",
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setLoading(true);

        try {
            // Send a POST request to the spam detection API
            const response = await axios.post('https://backend.codewithjuliano.com/api/predict', {
                email: emailContent,
            });

            // Set the prediction result to state
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error making the request:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`xl:mt-12 xxs:mt-10 md:flex justify-center items-center xl:flex-row flex-col-reverse gap-10 overflow-hidden w-full`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="bg-black-100 p-8 rounded-2xl w-full"
            >
                <p className={styles.sectionSubText}>Spam Detection</p>
                <h3 className={styles.sectionHeadText}>Detect spam emails</h3>

                <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8 w-full">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Email Content</span>
                        <textarea
                            rows={7}
                            name="emailContent"
                            value={emailContent}
                            onChange={handleChange}
                            placeholder="Paste the email content here..."
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
                        />
                        {errors.emailContent && <span className="text-red-500 mt-2">{errors.emailContent}</span>}
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Checking..." : "Check Spam"}
                    </button>

                    {prediction && (
                        <div className="mt-6 text-white">
                            <p className={`${prediction === "Not Spam" ? "bg-green-600" : "bg-red-600"} w-fit p-4 rounded-md`}>
                                The email is predicted to be: <strong>{prediction}</strong>
                            </p>
                        </div>
                    )}
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-[600px] md:h-[550px] h-[350px]"
            >
                {/* You can add a relevant 3D visual or image related to email/spam detection here */}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(SpamDetection, "spam-detection");
