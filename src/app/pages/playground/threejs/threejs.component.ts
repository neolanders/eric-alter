import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-threejs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #container class="threejs-container"></div>
  `,
  styles: [`
    .threejs-container {
      width: 100%;
      height: 400px;
      background: #000;
    }
  `]
})
export class ThreejsComponent implements OnInit {
  @ViewChild('container') private container!: ElementRef;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;

  ngOnInit() {
    this.initThree();
    this.animate();
  }

  private initThree() {
    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, 400);
    this.container.nativeElement.appendChild(this.renderer.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, 400);
    });
  }

  private animate() {
    requestAnimationFrame(() => this.animate());

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }
} 