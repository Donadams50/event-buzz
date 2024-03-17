import { Redirect } from "expo-router";

// The entry point of the app. It then routes to the home page which is the landing page.
export default function Index() {
    return <Redirect href="/home" />;
}


