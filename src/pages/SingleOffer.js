import { useGlobalContext } from "../AppContext";
import Nav from "../components/Navbar/Nav";
import OfferContent from "../components/Offers/OfferContent";
function SingleOffer() {
	// const { carsData } = useGlobalContext();

	const { isLoading } = useGlobalContext();

	// const { id } = useParams();
	// console.log(carsData);
	// console.log(id);

	// const findCarById = carsData.find((car) => car.id === id);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			<Nav />
			<OfferContent />
		</>
	);
}
export default SingleOffer;
