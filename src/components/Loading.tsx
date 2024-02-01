import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
    return (
        <Center flex={1} bg="$gray_700">
            <Spinner color="$green_500"/>
        </Center>
    );
}