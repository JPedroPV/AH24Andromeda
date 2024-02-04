import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() authorName: string | undefined;
  @Input() authorImg: string | undefined;
  @Input() authorEmail: string | undefined;
  @Input() authorRole: string | undefined;
}
