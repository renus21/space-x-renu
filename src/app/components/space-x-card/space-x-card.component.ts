import { Component, OnInit, Input } from '@angular/core';
import { SpaceXDataResponse } from 'src/app/services/space-x-data.service';

@Component({
  selector: 'app-space-x-card',
  templateUrl: './space-x-card.component.html',
  styleUrls: ['./space-x-card.component.scss']
})
export class SpaceXCardComponent implements OnInit {

  @Input()
  spaceXListItem: SpaceXDataResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
