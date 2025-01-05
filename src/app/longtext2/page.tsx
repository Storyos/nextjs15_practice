import { Content } from "@/components/texts/Content";
import { ScrollIndicator, ScrollIndicatorProps } from "@/components/ui/ScrollIndicator";

export default function page() {
    const ScrollIndicatorProps: ScrollIndicatorProps = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        backgroundColor: "#ff0088",
        originX: 0,
    }

    return (
        <div>
            <ScrollIndicator props={ScrollIndicatorProps}/>
            <Content/>
        </div>
    );
}