"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nonRestoringDivision } from "../utils/nonRestoringAlgo";

export default function Home() {
    const [dividend, setDividend] = useState(0);
    const [divisor, setDivisor] = useState(1);
    const [steps, setSteps] = useState([]);
    const [finalResult, setFinalResult] = useState({ quotient: "", remainder: "" });
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const handleCalculate = () => {
        if (divisor === 0) {
            alert("Divisor cannot be zero");
            return;
        }

        const resultSteps = nonRestoringDivision(parseInt(dividend), parseInt(divisor));
        setSteps(resultSteps);
        setCurrentStepIndex(0);

        let lastRelevantStep = resultSteps[resultSteps.length - 1];
        if (lastRelevantStep.N === "Restoration") {
            lastRelevantStep = resultSteps[resultSteps.length - 2];
        }

        const finalQ = parseInt(lastRelevantStep.Q, 2);
        const finalA = parseInt(lastRelevantStep.A, 2);

        setFinalResult({ quotient: finalQ, remainder: finalA });
    };

    useEffect(() => {
        if (steps.length === 0) return;

        const interval = setInterval(() => {
            setCurrentStepIndex((prev) => {
                if (prev < steps.length - 1) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 1200);

        return () => clearInterval(interval);
    }, [steps]);

    const currentStep = steps[currentStepIndex] || {};

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Non-Restoring Division Algorithm</h1>
            <div className="mb-4">
                <input
                    type="number"
                    className="w-full p-2 border rounded-lg mb-2"
                    placeholder="Enter Dividend"
                    value={dividend}
                    onChange={(e) => setDividend(e.target.value)}
                />
                <input
                    type="number"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Divisor"
                    value={divisor}
                    onChange={(e) => setDivisor(e.target.value)}
                />
            </div>
            <button
                onClick={handleCalculate}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full mb-6"
            >
                Calculate
            </button>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">N</th>
                            <th className="border border-gray-300 px-4 py-2">M</th>
                            <th className="border border-gray-300 px-4 py-2">A</th>
                            <th className="border border-gray-300 px-4 py-2">Q</th>
                            <th className="border border-gray-300 px-4 py-2">Quotient Bit</th>
                            <th className="border border-gray-300 px-4 py-2">Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {steps.map((step, index) => (
                            <tr key={index} className="text-center odd:bg-white even:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{step.N}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.M}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.A}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.Q}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.QuotientBit}</td>
                                <td className="border border-gray-300 px-4 py-2">{step.Operation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {steps.length > 0 && (
                <>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-inner text-center">
                        <h2 className="text-xl font-semibold mb-2">Final Result</h2>
                        <p className="text-lg">
                            Quotient (Decimal): <span className="font-mono">{finalResult.quotient}</span>
                        </p>
                        <p className="text-lg">
                            Remainder (Decimal): <span className="font-mono">{finalResult.remainder}</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold mb-4 text-center">Bitwise Operation Animation</h2>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {["A", "Q", "M"].map((reg) => (
                                <motion.div
                                    key={reg}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="p-4 border rounded-lg bg-gray-100 shadow-md"
                                >
                                    <h3 className="text-sm font-bold text-gray-600">{reg} Register</h3>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep[reg]}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-xl font-mono text-blue-700"
                                        >
                                            {currentStep[reg]}
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-center"
                        >
                            <p className="text-md">
                                <span className="font-semibold">Operation:</span>{" "}
                                <motion.span
                                    key={currentStep.Operation}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="font-mono bg-yellow-100 px-2 py-1 rounded"
                                >
                                    {currentStep.Operation}
                                </motion.span>
                            </p>
                            <p className="mt-2 text-gray-500">
                                Step {currentStepIndex + 1} / {steps.length}
                            </p>
                        </motion.div>
                    </div>
                </>
            )}
        </div>
    );
}
