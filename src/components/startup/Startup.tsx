import React from 'react';
import { Auth } from "@/services/api/Auth";
import { withStore } from "@/store/withStore";
import { IRootState } from "@/store/States";
import { ISetState } from "@/store";
import { Theme } from '@/services/providers/theme';

export interface IStartupProps {
    rootState?: IRootState['state'],
    setState?: ISetState,
}

export interface IStartupState {
    authServiceReady: boolean,
    themeServiceReady: boolean,
}

class Startup extends React.Component<IStartupProps, IStartupState> {
    constructor(props: IStartupProps) {
        super(props);

        this.state = {
            authServiceReady: false,
            themeServiceReady: false,
        };

        this.initAuthData = this.initAuthData.bind(this);
    }

    private initAuthData(): void {
        Auth.getLocalAuthData().then((data) => {
            if (data !== null && data !== "") {
                let authData = JSON.parse(data);
                if (typeof authData === "object") {
                    if (this.props.setState) {
                        this.props.setState("authData", {
                            loggedIn: true,
                            ...authData,
                        });
                    }
                }
            }
            this.setState({
                authServiceReady: true,
            });
            Auth.getLocalUserData().then((data) => {
                if (data !== null && data !== "") {
                    let userData = JSON.parse(data);
                    if (typeof userData === "object") {
                        if (this.props.setState) {
                            this.props.setState("userData", {
                                ...userData,
                            });
                        }
                    }
                }
            })
        }).catch(() => {
            this.setState({
                authServiceReady: true,
            });
        });
    }
    private initThemeData(): void {
        Theme.getTheme().then((themeValue) => {
            if (themeValue !== null && themeValue !== "") {
                if (themeValue !== null) {
                    if (this.props.setState) {
                        this.props.setState("appSettings", {
                            theme: themeValue,
                        });
                    }
                }
            }
            this.setState({
                themeServiceReady: true,
            });
        }).catch(() => {
            this.setState({
                themeServiceReady: true,
            });
        });
    }

    public componentDidMount(): void {
        this.initAuthData();
        this.initThemeData()
    }

    render() {
        return (
            <React.Fragment>
                {this.state.authServiceReady && this.state.themeServiceReady && this.props.children}
            </React.Fragment>
        );
    }
}

const __Startup = withStore(Startup);

export { __Startup as Startup };
