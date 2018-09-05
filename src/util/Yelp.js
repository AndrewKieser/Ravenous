const apiKey = '2VRiWMJ6jHfAreUGpdoATHcrfM7ZEfxGO7v0RDBWLH-wTQ8TVod0yIEYXBCglybXsY72o-Hr9I9MjS1Ou50aHZbgBZkpF3ue7LNpjlBkP_Sxh97Kna151kCw2uyFW3Yx';

const yelp = {
	search: (term, location, sortBy) => {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
					headers: { 
						Authorization: `Bearer ${apiKey}`
					}
				}).then(response => {
					return response.json();
				}).then(jsonResponse => { 
					if (jsonResponse.businesses){ 
						return jsonResponse.businesses.map(business => ({ 
							id: business.id
							, imageSrc: business.image_url
							, name: business.name
							, address: business.location.address1
							, city: business.location.city
							, state: business.location.state
							, zipCode: business.location.zip_code
							, category: business.categories[0].title
							, rating: business.rating
							, reviewCount: business.review_count
						}));
					} 
				});
	}
};

export default yelp;