import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./Pages/Auth/Login";
import { loginUserAction } from "./Components/Auth/LoginForm";
import { logoutAction } from "./Pages/Auth/Logout";
import { tokenLoader } from "./Util/auth";

import UserDetailPage, { getUserLoader } from "./Pages/User/UserDetail";

import { getCustomersByAgencyLoader } from "./Pages/Customer/CustomerByAgency";
import { getCarsByAgencyLoader } from "./Pages/Car/CarByAgency";
import { getStaffsByAgencyLoader } from "./Pages/Staff/StaffByAgency";

import { getAgenciesloader } from "./Pages/Agency/AllAgencies";
import { getStaffsLoader } from "./Pages/Staff/AllStaffs";
import { getCarsLoader } from "./Pages/Car/AllCars";
import { getCarsForLeasingLoader } from "./Pages/Car/CarForLeasing";

import RootLayout from "./Components/Layout/RootLayout";
import AgencyLayout from "./Components/Layout/AgencyLayout";
import StaffLayout from "./Components/Layout/StaffLayout";
import CarLayout from "./Components/Layout/CarLayout";
import CustomerLayout from "./Components/Layout/CustomerLayout";
import ContractLayout from "./Components/Layout/ContractLayout";

import NewContractPage from "./Pages/Contract/NewContract";
import NewStaffPage from "./Pages/Staff/NewStaff";
import NewAgencyPage from "./Pages/Agency/NewAgency";
import NewCarPage from "./Pages/Car/NewCar";
import NewCustomerPage from "./Pages/Customer/NewCustomer";

import { newContractAction } from "./Components/Contract/ContractForm";
import { newAgencyAction } from "./Components/Agency/AgencyForm";
import { newCarAction } from "./Components/Car/CarForm";
import { newCustomerAction } from "./Components/Customer/CustomerForm";
import { addStaffToAgencyAction } from "./Components/Staff/StaffForm";

import EditAgencyPage from "./Pages/Agency/EditAgency";
import EditCarPage from "./Pages/Car/EditCar";
import EditCustomerPage from "./Pages/Customer/EditCustomer";
import EditContractPage from "./Pages/Contract/EditContract";

import AgencyByUserPage from "./Pages/Agency/AgencyByUser";
import CarForLeasingPage from "./Pages/Car/CarForLeasing";

import CarByAgencyPage from "./Pages/Car/CarByAgency";
import StaffByAgencyPage from "./Pages/Staff/StaffByAgency";
import CustomerByAgencyPage from "./Pages/Customer/CustomerByAgency";
import ContractByAgencyPage from "./Pages/Contract/ContractByAgency";

import AllCarsPage from "./Pages/Car/AllCars";
import AllStaffsPage from "./Pages/Staff/AllStaffs";
import AllAgenciesPage from "./Pages/Agency/AllAgencies";
import AllContractsPage, {
	getContractsLoader,
} from "./Pages/Contract/AllContracts";
import AllCustomersPage, {
	getCustomersLoader,
} from "./Pages/Customer/AllCustomers";

import StaffDetailPage, {
	getStaffDetailByAgencyLoader,
} from "./Pages/Staff/StaffDetail";

import CarDetailPage, {
	deleteCarAction,
	getCarDetailLoader,
} from "./Pages/Car/CarDetail";

import ContractPage, {
	getContractByAgencyLoader,
} from "./Pages/Contract/ContractByAgency";

import AgencyDetailPage, {
	getAgencyDetailLoader,
	deleteAgencyAction,
} from "./Pages/Agency/AgencyDetail";

import CustomerDetailPage, {
	deleteCustomerAction,
	getCustomerDetailLoader,
} from "./Pages/Customer/CustomerDetail";

import ContractDetailPage, {
	deleteContractAction,
	getContractDetailLoader,
} from "./Pages/Contract/ContractDetail";

import CarDetailForLeasingPage, {
	getCarDetailForLeasingLoader,
} from "./Pages/Car/CarDetailForLeasing";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		id: "root",
		loader: tokenLoader,
		children: [
			{
				index: true,
				element: <LoginPage />,
				action: loginUserAction,
			},
			{
				path: "logout",
				action: logoutAction,
			},

			{
				path: "user",
				children: [
					{ index: true },
					{
						path: ":userId",
						children: [
							{
								index: true,
								id: "user",
								element: <UserDetailPage />,
								loader: getUserLoader,
							},

							{
								path: "agency",
								element: <AgencyLayout />,
								children: [
									{
										index: true,
										element: <AgencyByUserPage />,
										loader: getAgenciesloader,
									},

									{
										path: ":agencyId",
										id: "agency",
										loader: getAgencyDetailLoader,
										children: [
											{
												index: true,
												element: <AgencyDetailPage />,
												action: deleteAgencyAction,
											},

											{
												path: "all",
												id: "agencies",
												element: <AllAgenciesPage />,
												loader: getAgenciesloader,
											},

											{
												path: "new",
												element: <NewAgencyPage />,
												action: newAgencyAction,
											},

											{
												path: "edit",
												element: <EditAgencyPage />,
												action: newAgencyAction,
											},

											{
												path: "customer",
												element: <CustomerLayout />,
												children: [
													{
														index: true,
														element: <CustomerByAgencyPage />,
														loader: getCustomersByAgencyLoader,
													},

													{
														path: "all",
														element: <AllCustomersPage />,
														loader: getCustomersLoader,
													},

													{
														path: "new",
														element: <NewCustomerPage />,
														action: newCustomerAction,
													},

													{
														path: ":customerId",
														id: "customer",
														loader: getCustomerDetailLoader,
														children: [
															{
																index: true,
																element: <CustomerDetailPage />,
																action: deleteCustomerAction,
															},

															{
																path: "edit",
																element: <EditCustomerPage />,
																action: newCustomerAction,
															},

															{
																path: "car",
																element: <CarForLeasingPage />,
																loader: getCarsForLeasingLoader,
																children: [
																	{
																		path: ":carId",
																		children: [
																			{
																				index: true,
																				element: <CarDetailForLeasingPage />,
																				loader: getCarDetailForLeasingLoader,
																			},
																			{
																				path: "new-contract",
																				element: <NewContractPage />,
																				action: newContractAction,
																			},
																		],
																	},
																],
															},
														],
													},
												],
											},

											{
												path: "contract",
												element: <ContractLayout />,
												children: [
													{
														index: true,
														loader: getContractByAgencyLoader,
														element: <ContractByAgencyPage />,
													},

													{
														path: "all",
														id: "contracts",
														element: <AllContractsPage />,
														loader: getContractsLoader,
													},

													{
														path: ":contractId",
														id: "contract",
														loader: getContractDetailLoader,
														children: [
															{
																index: true,
																element: <ContractDetailPage />,
																action: deleteContractAction,
															},

															// {
															// 	path: "edit",
															// 	element: <EditContractPage />,
															// 	action: newContractAction,
															// },
														],
													},
												],
											},

											{
												path: "car",
												element: <CarLayout />,
												children: [
													{
														index: true,
														element: <CarByAgencyPage />,
														loader: getCarsByAgencyLoader,
													},

													{
														path: "all",
														id: "cars",
														element: <AllCarsPage />,
														loader: getCarsLoader,
													},

													{
														path: "new",
														element: <NewCarPage />,
														action: newCarAction,
													},

													{
														path: ":carId",
														id: "car",
														loader: getCarDetailLoader,
														children: [
															{
																index: true,
																element: <CarDetailPage />,
																action: deleteCarAction,
															},

															{
																path: "edit",
																element: <EditCarPage />,
																action: newCarAction,
															},
														],
													},
												],
											},

											{
												path: "staff",
												element: <StaffLayout />,
												children: [
													{
														index: true,
														element: <StaffByAgencyPage />,
														loader: getStaffsByAgencyLoader,
													},

													{
														path: "all",
														id: "staffs",
														element: <AllStaffsPage />,
														loader: getStaffsLoader,
													},

													{
														path: "new",
														element: <NewStaffPage />,
														action: addStaffToAgencyAction,
													},

													{
														path: ":staffId",
														element: <StaffDetailPage />,
														loader: getStaffDetailByAgencyLoader,
														children: [
															{
																index: true,
																element: <StaffDetailPage />,
															},
														],
													},
												],
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
