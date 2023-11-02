import React from 'react';  

const Interest: React.FC = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex h-screen">
                    <div className="text-left">
                        <h1 className="text-5xl font-futura-bold leading-tight">
                            Smart Grids - Protection and Control
                        </h1>
                    </div>
                </div>
                <div className="flex h-screen">
                    <div className="text-left">
                        <h1 className="text-5xl font-futura-bold leading-tight">
                            Power system analysis  
                        </h1>
                    </div>
                </div>
                <div className="flex h-screen">
                    <div className="text-left">
                        <h1 className="text-5xl font-futura-bold leading-tight">
                            Machine Learning and Artificial Intelligence
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Interest;
