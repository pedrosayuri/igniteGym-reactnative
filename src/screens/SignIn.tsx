import { Image, VStack } from "@gluestack-ui/themed";

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

export function SignIn() {
    return (
        <VStack flex={1} bg="$gray_700">
            <Image
                source={BackgroundImg}
                alt="Pessoas treinando"
                resizeMode="contain"
                style={{ width: '100%', height: '80%' }}
            />

            <LogoSvg />
        </VStack>
    );
}