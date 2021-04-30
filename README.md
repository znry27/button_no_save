# button_no_save

## Trigger the onchange function when clicking an odoo button instead of saving the document and go to read-only mode

When we are creating or editing a document in odoo and then click a button, odoo will save that document and go to the read-only mode. If the document is opened in a modal, the modal will be closed. In some scenarios, this behavior feels not right.

With this module, you can configure your button to prevent that behavior. This module will trigger the **onchange** function instead of the **save** function, so you can review your document and make some editing before saving it. And the biggest advantage is, with this module you can prevent odoo to close the modal when you click a button.

How it works ?

First, you must provide a **Char** field with any name. This field will be used to trigger the onchange function

`trigger_field = fields.Char()`

Then provide one or two methods. The first method must be decorated with **@api.onchange**. This method will be called by odoo when you click your desired button in edit mode. This method is mandatory.

```
@api.onchange('trigger_field')
def onchange_trigger_field(self):
    print('This method will be called in edit mode')
```

The second method is optional. This method will be called by odoo when you click your desired button in read-only mode.

```
def recompute_total(self):
    print('This method will be called in readonly mode')
```

Then in your form/view write the triggered field, please set it to invisible.

`<field name="trigger_field" invisible="1" />`

The next step is to write your **object type** button and set your second method as **name** if you want odoo to call the different method when you click your desired button

`<button name="recompute_total" string="Compute Result" type="object" />`

But if you want odoo to call the same method both in edit and read-only mode please write your **onchange** method as your button name

`<button name="onchange_trigger_field" string="Compute Result" type="object" />`

The final step is to add this module special attribute to your button. It is the **triggeronchange** with the value of your **Char** trigger field

`<button name="onchange_trigger_field" string="Compute Result" type="object" triggeronchange="trigger_field" />`


![Trigger onchange function when click an odoo button](https://en.ngasturi.id/wp-content/uploads/2021/04/trigger_onchange_when_click_a_button.png)

![No closing modal when click an odoo button](https://en.ngasturi.id/wp-content/uploads/2021/04/no_closing_modal_when_click_a_button.png)

Please download the demo module [here](https://github.com/znry27/ngasturi-blog-english/tree/master/tutorial_button_no_save)

This module is tested in odoo v14. If you found any bug please report it to me.




