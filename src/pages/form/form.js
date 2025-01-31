import graniteForm from "../../granite/form/graniteForm";
import graniteMultiSelect from "../../granite/plugins/form/multiSelect/graniteMultiSelect";

import "../../granite/form/graniteForm.css";
import "../../granite/plugins/form/multiSelect/graniteMultiSelect.css";

const jsonBlock = {
  id: "form__field-demo",
  options: {
    title: "",
    step_form: false,
    edit_form: false,
    addapptation_action: "/score",
    description: "",
    title_font_size: "40px",
    position_form: "center",
    description_font_size: "20px",
    db_action: "",
    db_object: "",
    db_id: "",
    db_redirect: "",
    flash_message: "",
    form_id: "",
    button_1_label: "",
    button_1_href: "",
    submit_label: "Submit",
    submit_classes: "g__btn g__btn-primary",
    cancel_label: "Cancel",
    max_width: "",
    enctype: "application/x-www-form-urlencoded",
    method: "POST",
    visibility_settings: "",
    hide_submit: false,
    allow_cancel: false,
    default_picklists: true,


  },
  records: [
    {
      id: "checkbox-demo",
      name: "checkbox-demo",
      title: "Checkbox Demo",
      type: "checkbox",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "color-demo",
      name: "color-demo",
      title: "Color",
      type: "color",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "currency-demo",
      name: "currency-demo",
      title: "Currency",
      type: "currency",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "bombora-topics",
      name: "bombora-topics",
      title: "What competitive topics would you like to track?",
      type: "custom",
      custom_function: graniteMultiSelect("competitive-topics"),
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "bombora-topics",
      name: "bombora-topics",
      title: "What adjacent topics would you like to track?",
      type: "custom",
      custom_function: graniteMultiSelect("adjacent-topics"),
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "date-demo",
      name: "date-demo",
      title: "Date",
      type: "date",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "email-demo",
      name: "email-demo",
      title: "Email",
      type: "email",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "file-demo",
      name: "file-demo",
      title: "File",
      type: "file",
      required: false,
      value: "",
      classes: "",
    },
    // {
    //   type: "picklist",
    //   id: "multiselect-demo",
    //   name: "multiselect-demo",
    //   title: "Multiselect",
    //   required: true,
    //   multiple: true,
    //   options: [
    //     "Finance",
    //     "Education",
    //     "Software",
    //     "Manufacturing",
    //     "Technology",
    //     "Option 3",
    //     "Option 4",
    //   ],
    //   value: "",
    //   placeholder: "",
    //   classes: "g__form-width-50",
    // },
    {
      id: "number-demo",
      name: "number-demo",
      title: "Number",
      type: "number",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "password-demo",
      name: "password-demo",
      title: "Password",
      type: "password",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "picklist-demo",
      name: "picklist-demo",
      title: "Picklist",
      type: "picklist",
      options: [
        ["option-1", "Option 1"],
        ["option-2", "Option 2"],
        ["option-3", "Option 3"],
      ],
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "radio-demo",
      name: "radio-demo",
      title: "Radio",
      type: "radio",
      options: [
        ["option-1", "Option 1"],
        ["option-2", "Option 2"],
        ["option-3", "Option 3"],
      ],
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "range-demo",
      name: "range-demo",
      title: "Range",
      type: "range",
      min: 0,
      max: 100,
      required: false,
      value: "30",
      classes: "",
    },
    {
      type: "tags",
      label: "tags",
      title: "Tags",
      id: "tags-demo",
      name: "tags-demo",
      required: true,
      options: "",
      value: "",
      placeholder: "",
      classes: "",
    },
    {
      id: "tel-demo",
      name: "tel-demo",
      title: "Telephone",
      type: "tel",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "textarea-demo",
      name: "textarea-demo",
      title: "Textarea",
      type: "textarea",
      required: false,
      value: "",
      classes: "",
    },
    {
      id: "text-demo",
      name: "text-demo",
      title: "Text",
      type: "text",
      required: false,
      value: "",
      classes: "",
    },
  ],
};

graniteForm(jsonBlock);
