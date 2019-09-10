import * as React from "react";
import { $TabView, $TabViewItem, $StackLayout, $Label } from "react-nativescript";

export const rootRef: React.RefObject<any> = React.createRef<any>();

// See the testComponents directory for many examples of components (and ref-forwarding).
const AppContainer = () => (
    // Do NOT forget to pass in this rootRef, otherwise your app will crash on startup! :)
    <$TabView ref={rootRef} selectedIndex={0}>
        <$TabViewItem title={"One"}>
            <$StackLayout height={{ value: 100, unit: "%"}} width={{ value: 100, unit: "%"}}>
                <$Label>Uno</$Label>
            </$StackLayout>
        </$TabViewItem>
        <$TabViewItem title={"Two"}>
            <$StackLayout height={{ value: 100, unit: "%"}} width={{ value: 100, unit: "%"}}>
                <$Label>Dos</$Label>
            </$StackLayout>
        </$TabViewItem>
    </$TabView>
);

export default AppContainer;