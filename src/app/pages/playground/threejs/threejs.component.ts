// Threejs samples https://threejs.org/examples/#webgl_geometry_cube

/// <reference path="../../../../../typings/globals/three/index.d.ts" />
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-threejs', // ps-scene
  templateUrl: './threejs.component.html',
  styleUrls: ['./threejs.component.scss']
})
export class ThreejsComponent implements OnInit {
  // renderer: THREE.WebGLRenderer;
  hostElement: ElementRef;
  constructor(el:ElementRef) {
    this.hostElement = el;
  }

  ngOnInit() {
    // this.renderer = new THREE.WebGLRenderer({ alpha: true});
    // this.renderer.setSize(500,500);
    // this.renderer.setClearColor(0xFFAAAAFF,1);
    // this.hostElement.nativeElement.appendChild(this.renderer.domElement);
    // this.renderer.clear();
  }

}
