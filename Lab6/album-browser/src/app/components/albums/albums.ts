import {Component, OnInit} from '@angular/core';
import {Album} from '../../models/album.model';
import {AlbumService} from '../../services/album';
import {RouterLink} from '@angular/router';
import {AsyncPipe, NgFor} from '@angular/common';
import {async, BehaviorSubject, Observable, shareReplay} from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
    loading: boolean = true;
    albumsSubject = new BehaviorSubject<Album[]>([]);
    albums$: Observable<Album[]> = this.albumsSubject.asObservable();

    constructor(private albumService: AlbumService) {}
    ngOnInit(): void {
      this.loading = true;

      this.albumService.getAlbums().subscribe({
        next: (albums: Album[]) => {
          this.albumsSubject.next(albums);
          this.loading = false;
        },
        error: (err) => {
          console.error('getAlbums failed:', err);
          this.loading = false;
        }
      });
    }
    deleteAlbum(id: number): void {
      this.albumsSubject.next(this.albumsSubject.value.filter(a => a.id !== id));
      this.albumService.deleteAlbum(id).subscribe(() => {
        this.albumsSubject.next(this.albumsSubject.value.filter(a => a.id != id))
      });
    }
}
