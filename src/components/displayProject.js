const DisplayProject = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);
    
    useEffect(() => {
        const handleHover = (e) => {
            
        };
        btnRef.current.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            btnRef.current.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    
}