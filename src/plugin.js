
const { registerPlugin } = wp.plugins;
import { useEffect, useState } from "@wordpress/element";
import { blockIcon } from "./utils/icons";
const { PluginSidebar } = wp.editPost;
import { __ } from "@wordpress/i18n";
import useWPAjax from "./utils/useWPAjax";
const { PanelBody, Button, __experimentalInputControl: InputControl } = wp.components;


registerPlugin("open-map", {
    icon: blockIcon.src,
    render: () => {

        const [api, setApi] = useState(null);
        const { data, saveData, isLoading } = useWPAjax("openStreetMap", { nonce: window.wpApiSettings.nonce }, true);
        useEffect(() => {
            if (!isLoading && data) {
                setApi(data);
            }
        }, [isLoading, data]);

        const onSaveData = () => {
            if (!isLoading) {
                saveData({ api, name: "Shamim" });
            }
        }

        return (
            <PluginSidebar title={__("OpenStreetMap", "open-street-map")}>
                <PanelBody title={__("Connection", "open-street-map")} initialOpen={true}>
                    <div style={{ marginBottom: "5px" }}>
                        <InputControl
                            value={api}
                            onChange={(val) => setApi(val)}
                        />
                    </div>

                    <Button className=" button-primary"
                        disabled={isLoading}
                        onClick={onSaveData}
                    >
                        {__("Save Now", "open-street-map")}
                    </Button>
                </PanelBody>
            </PluginSidebar>
        )
    }
})