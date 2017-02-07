import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
// ag-grid
import {AgGridModule} from "ag-grid-ng2/main";
// application
import {AppComponent} from "./app.component";
// typeahead
import {TypeaheadComponent} from "./typeahead-master.component";
import {TypeaheadEditorComponent} from "./typeahead-editor.component";
import {Typeahead} from "ng2-typeahead";

const appRoutes: Routes = [
    {path: 'typeahead-example', component: TypeaheadComponent, data: {title: "Typeahead Example"}},
    {path: '', redirectTo: 'typeahead-example', pathMatch: 'full'}
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        AgGridModule.withComponents(
            [
                TypeaheadEditorComponent
            ])
    ],
    declarations: [
        AppComponent,
        Typeahead,
        TypeaheadComponent,
        TypeaheadEditorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
