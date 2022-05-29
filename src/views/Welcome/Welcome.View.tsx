import React from 'react'
import { WelcomeScreen } from "@/components/screens/Welcome"

const WelcomeView = ({ navigation }: any) => {

    return (
        <React.Fragment>
            <WelcomeScreen navigation={navigation} />
        </React.Fragment>
    );
};

export default WelcomeView;
