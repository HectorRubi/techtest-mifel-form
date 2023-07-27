import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss'],
})
export class MapDialogComponent implements OnInit {
  image: SafeUrl;

  constructor(
    public dialogRef: MatDialogRef<MapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lat: string; lng: string },
    private mapService: MapService,
    private sanitizer: DomSanitizer,
  ) {
    this.image = '';
  }

  ngOnInit(): void {
    this.mapService
      .getMap(this.data.lat, this.data.lng)
      .subscribe((response) => {
        const objectURL = URL.createObjectURL(response);
        this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
  }
}
