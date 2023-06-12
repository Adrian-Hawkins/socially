import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  @ViewChild('canvas', { static: true })
  private canvasRef!: ElementRef<HTMLCanvasElement>;
  private renderer!: WebGLRenderer;
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private cube!: Mesh;

  constructor(private auth: AuthService, private snackBar: MatSnackBar) {}
  ngOnInit(): void {
    this.renderer = new WebGLRenderer({alpha: true});
    // this.renderer = new WebGLRenderer();
    this.scene = new Scene();
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('assets/full.jpg');
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer.setSize(window.innerWidth/4, window.innerHeight/4);
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    const geometry = new BoxGeometry();
    const material = new MeshBasicMaterial({ color: 0xffffff, map: texture });
    this.cube = new Mesh(geometry, material);
    this.scene.add(this.cube);
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new PerspectiveCamera(20, aspect, 0.1, 1000);
    this.camera.position.z = 5;
    const animate = () => {
      requestAnimationFrame(animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  share(){
    const link = 'https://github.com/Adrian-Hawkins/socially';
    if(navigator.share) {
      navigator
        .share({
          title: 'Share link to repository',
          url: link
        })
        .then(() => {
          this.snackBar.open('Be sure to star the repo!', 'Close', { duration: 2000 });
        })
        .catch((error) => {
          console.error('Sharing failed:', error);
        });
    } else {
      navigator.clipboard.writeText(link).then(() => {
        this.snackBar.open('Be sure to star the repo!', 'Close', { duration: 2000 });
      });
    }
  }
}
