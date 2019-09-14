import * as React from "react";
import { $Page, $Label, $ActionBar, $GridLayout, $FormattedString, $Span } from "react-nativescript";
import { Page } from "tns-core-modules/ui/page/page";

interface Props {
    forwardedRef: React.RefObject<Page>,
}

interface State {

}

class AppContainer extends React.Component<Props, State> {
    componentDidMount(){
        const page = this.props.forwardedRef.current;
        page!.addCssFile("./AppContainer.scss");
    }

    render(){
        const { forwardedRef } = this.props;

        return (
            <$Page ref={forwardedRef} className="page">
                <$ActionBar className="action-bar">
                    <$Label className="action-bar-title">Home</$Label>
                </$ActionBar>
        
                <$GridLayout>
                    <$Label className="info" horizontalAlignment="center" verticalAlignment="middle">
                        <$FormattedString>
                            <$Span className="fa" text="&#xf135; "/>
                            <$Span text="message"/>
                        </$FormattedString>
                    </$Label>
                </$GridLayout>
            </$Page>
        );
    }
}

export default AppContainer;