const DisplayProject = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);
    
    useEffect(() => {
        btnRef.current.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            btnRef.current.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    
}