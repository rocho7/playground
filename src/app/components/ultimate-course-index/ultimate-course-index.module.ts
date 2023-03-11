import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UltimateCourseIndexRoutingModule } from "./ultimate-course-index-routing.module";
import { UltimateCourseIndexComponent } from "./ultimate-course-index.component";

@NgModule({
  declarations: [UltimateCourseIndexComponent],
  imports: [CommonModule, UltimateCourseIndexRoutingModule],
})
export class UltimateCourseIndexModule {}
