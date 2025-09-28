import { SelectCreateDialog } from "@web/views/view_dialogs/select_create_dialog";
import { patch } from "@web/core/utils/patch";

patch(SelectCreateDialog.prototype, {
    
    get viewProps() {
        let props = super.viewProps;
        if (props.context?.view_mode === "kanban") {
            if ("allowSelectors" in props) {
                delete props.allowSelectors;
            }
            props.type = "kanban";
        }
        props.display.searchPanel = props.display.searchPanel || props.context.show_search_panel;
        return props;
    }

});
