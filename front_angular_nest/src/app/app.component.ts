import { appConfig } from './app.config';
import { config } from 'dotenv';
import { ApplicationConfig, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { withFetch } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front_angular_nest';
}
export const appConfig:ApplicationConfig={
  proviaders :[proviaderRouter(routers),providerHttpClient(withFetch())]
}
