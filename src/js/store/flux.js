const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			userStock: [],
			userReceta: [],
			userRecetaCaloria: [],
			userIngrediente: [{ calory: 0, id: "", name: "" }],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			users: [
				{
					username: "",
					name: "",
					profile: ""
				}
			]
		},
		actions: {
			buildStock: myStock => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/add_stock", {
					method: "POST",
					body: JSON.stringify(myStock),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					fetch(
						"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/stock/" +
							myStock[0].id_profile
					)
						.then(response => response.json())
						.then(data => {
							setStore({ userStock: data });
						});
				});
			},

			deleteStock: myDelete => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/delete_stock", {
					method: "DELETE",
					body: JSON.stringify(myDelete),
					headers: {
						"Content-Type": "application/json"
					}
				}).then(() => {
					fetch(
						"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/stock/" +
							myDelete[0].id_profile
					)
						.then(response => response.json())
						.then(data => {
							setStore({ userStock: data });
						});
				});
			},

			generateReceta: myStock => {
				fetch(
					"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/recetafiltro/" +
						myStock[0].id_profile
				)
					.then(response => response.json())
					.then(data => {
						setStore({ userReceta: data });
					});
			},

			recetaCaloria: () => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/recetacalorias/")
					.then(response => response.json())
					.then(data => {
						setStore({ userRecetaCaloria: data });
					});
			},

			ingredientePrecio: myIngrediente => {
				fetch(
					"https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/ingredienteId/" + myIngrediente
				)
					.then(response => response.json())
					.then(data => {
						setStore({ userIngrediente: data });
					});
			},

			savePrecio: myPrecio => {
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/add_precio", {
					method: "POST",
					body: JSON.stringify(myPrecio),
					headers: {
						"Content-Type": "application/json"
					}
				});
			},

			logout: () => {
				setStore({ token: null, currentUserId: null });
			},
			isButtonEnabled: (first_name, last_name, email, password) => {
				return first_name === "" || last_name === "" || email === "" || password === "";
			},
			onLogin: (email, password, history) => {
				let settings = {
					email: email,
					password: password
				};
				fetch("https://3000-d0bb3e54-e3d5-4122-8b7a-3b99d2325a27.ws-us1.gitpod.io/login", {
					method: "POST",
					body: JSON.stringify(settings),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						if (data.msg == "User Already Exists") {
							setStore({ errorStatus: data.msg });
						}
						setStore({ token: data.jwt, currentUserId: data.id });
						/*console.log(data.id);*/
					})
					.then(async () => {
						let store = getStore();
						const resp = await fetch(backend_url + "/profile", {
							method: "POST",
							body: JSON.stringify({
								user_id: store.currentUserId
							}),
							headers: {
								"Content-Type": "application/json",
								authorization: "Bearer " + store.token
							}
						});
						if (resp.status === 200) {
							return resp.json();
						} else {
							throw new Error("Incorrect Profile usage");
						}
					})
					.then(data => {
						let store = getStore();
						let profile = store.profile;
						/*console.log(
							"firstname" +
								data.first_name +
								" | " +
								data.last_name +
								" | " +
								data.created_date +
								" | " +
								data.currentUserId
						);*/
						profile.first_name = data.first_name;
						profile.last_name = data.last_name;
						profile.createdDate = data.created_date;
						profile.currentUserId = data.currentUserId;
						setStore({ profile: profile });
					})
					.catch(error => {
						/*console.log("PROFILE's ERROR: ", error);*/
					})
					.then(() => {
						let store = getStore();
						if (store.token !== undefined) {
							history.push("/home");
						}
					});
			}
		}
	};
};

export default getState;
