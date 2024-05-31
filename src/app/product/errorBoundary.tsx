"use client";
import React, { ReactNode, ErrorInfo } from "react";

// Define the props interface
interface ErrorBoundaryProps {
    fallback: ReactNode;
    children: ReactNode;
}

// Define the state interface
interface ErrorBoundaryState {
    hasError: boolean;
}

const tes : number = 1


// Extend React.Component with the defined props and state interfaces
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false }; // Initialize state
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
    
