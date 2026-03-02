import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetailComponent implements OnInit {
  album?: Album;
  newTitle = '';
  loading = true;
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('DETAIL id=', this.albumId);

    this.loading = true;
    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        console.log('DETAIL loaded', data);
        this.album = data;
        this.newTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        console.error('getAlbum failed:', err);
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.newTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album!.title = this.newTitle;
      },
      error: (err) => console.error('updateAlbum failed:', err),
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}
