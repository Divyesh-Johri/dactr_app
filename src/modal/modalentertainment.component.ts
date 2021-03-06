import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "modalentertainment",
    template: `
		<StackLayout class="p-20">
            <Label class="h2 text-center" text="Entertainment Options" textWrap="true"></Label>
            <Button class="btn btn-outline" text="Close Modal" (tap)="close()"></Button>
        </StackLayout>
	`
})
export class ModalEntertainmentComponent implements OnInit {

    constructor(private params: ModalDialogParams) {}

    ngOnInit() {}

    close() {
        this.params.closeCallback();
    }
}