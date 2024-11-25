import React from "react";

export default function Loader() {
    return (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}
