import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  baseUsrl = environment.apiUrl;
  private http = inject(HttpClient);
  likeIds = signal<number[]>([]);

  toggleLike(targetId: number) {
    return this.http.post(`${this.baseUsrl}likes/${targetId}`, {});
  }

  getLikes(predicate: string) {
    return this.http.get(`${this.baseUsrl}likes?predicate=${predicate}`);
  }

  getLikeIds() {
    this.http.get<number[]>(`${this.baseUsrl}likes/list`).subscribe({
      next: (ids) => {
        this.likeIds.set(ids);
      },
    });
  }
}
