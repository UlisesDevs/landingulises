import API_URL from '../config';

const VisitorCounter = () => {
    const [visits, setVisits] = useState(1024);

    useEffect(() => {
        fetch(`${API_URL}/api/visitors/count`)
            .then(res => res.json())
            .then(data => setVisits(data.count))
            .catch(err => console.error('Error fetching visitor count:', err));
    }, []);

    return (
        <div className="visitor-container">
            <div className="visitor-count">
                {visits.toLocaleString()}
            </div>
            <div className="visitor-label">
                Visits
            </div>
        </div>
    );
};

export default VisitorCounter;
