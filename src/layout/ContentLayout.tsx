import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListZoomLink from "../pages/ListZoomLink";

export default function ContentLayout() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route path="zoom-link" element={<ListZoomLink />} />
					{/* <Route path="blogs" element={<Blogs />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}