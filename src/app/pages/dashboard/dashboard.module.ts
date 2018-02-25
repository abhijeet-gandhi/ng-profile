import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {SkillComponent} from './skill/skill.component';
import {AboutMeComponent} from './about/about.component';
import {ChartjsPieComponent} from './chart/pie-chart.component';
import {ChartModule} from 'angular2-chartjs';
import {EchartsBarComponent} from './chart/bar-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {EchartsPieComponent} from './chart/echarts-pie-chart.component';


@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    NgxChartsModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    ChartjsPieComponent,
    EchartsBarComponent,
    EchartsPieComponent,
    SkillComponent,
    AboutMeComponent,
  ],
})
export class DashboardModule {
}
