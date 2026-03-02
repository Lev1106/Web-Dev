import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap } from 'rxjs/operators';

import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotosComponent {
  albumId$!: Observable<number>;
  photos$!: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {
    this.albumId$ = this.route.paramMap.pipe(
      map(pm => Number(pm.get('id'))),
      shareReplay(1)
    );

    this.photos$ = this.albumId$.pipe(
      switchMap(id => this.albumService.getAlbumPhotos(id)),
      catchError((err: unknown) => {
        console.error('getAlbumPhotos failed:', err);
        return of([] as Photo[]);
      }),
      shareReplay(1)
    );
  }

  back(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
