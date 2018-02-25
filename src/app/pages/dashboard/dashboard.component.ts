import {Component} from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  public problemSolvingSkill: any = {
    name: 'Problem Solving',
    value: 85,
  };
  public analyticsalSkill: any = {
    name: 'Analytical Skill',
    value: 80,
  };
  public produceDevelopmentSkill: any = {
    name: 'Product Development',
    value: 90,
  };

  public competencies: any = {
    names: ['Problem Solving', 'Analytical', 'Leadership',
      'Product Development', 'Mentoring', 'Coding',
      'Designing & Modeling'],
    values: [90, 85, 75,
      85, 70, 90,
      75],
  }

  public dailyLife: any = {
    names: ['Coding', 'Helping Team', 'Studying', 'Having Fun'],
    values: [{value: 300, name: 'Helping Team'},
      {value: 100, name: 'Studying'},
      {value: 100, name: 'Having Fun'},
      {value: 500, name: 'Coding'}],
  }

  public passion: any = {
    names: ['Cycling', 'Trekking', 'Swimming', 'Programming'],
    values: [{value: 400, name: 'Cycling'},
      {value: 200, name: 'Trekking'},
      {value: 100, name: 'Swimming'},
      {value: 600, name: 'Programming'}],
  }

  public languages: any = {
    names: ['C#', 'JavaScript', 'HTML5', 'CSS/SCSS', 'XAML'],
    values: [90, 70, 65, 60, 85],
  }

  public frameworks: any = {
    names: ['WPF', 'ASP.NET', 'Angular', 'XAMARIN', 'WPF'],
    values: [90, 80, 75, 80, 90],
  }

  constructor() {
  }
}
