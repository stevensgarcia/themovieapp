import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddMovieDialogUtils } from '../../shared/utils/add-movie-dialog-utils';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {

  // SUT
  let fixture: ComponentFixture<ToolbarComponent>;
  let compClass: ToolbarComponent;

  // Dependencies
  let movieDialogUtils: AddMovieDialogUtils;
  let router: RouterTestingModule;

  // Spies
  let movieDialogUtilsSpy: jasmine.Spy;

  // Mocks
  class AddMovieDialogUtilsFake {
    openAddMovieDialog() {}
  }

  /*============================================================================
  =                                GLOBAL SET UP                              =
  ============================================================================*/
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: AddMovieDialogUtils, useClass: AddMovieDialogUtilsFake }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // ASSEMBLE
    fixture   = TestBed.createComponent(ToolbarComponent);
    compClass = fixture.componentInstance;

    // Dependency injection
    movieDialogUtils = TestBed.get(AddMovieDialogUtils);
    router           = TestBed.get(RouterTestingModule);

  });

  it('should create', () => {
    expect(compClass).toBeTruthy();
  });

  /*============================================================================
  =                                  CLASS API                                =
  ============================================================================*/
  describe('#openAddMovieDialog()', () => {

    it('should call addMovie dialog from utils', () => {

      // ASSEMBLE
      movieDialogUtilsSpy = spyOn(movieDialogUtils, 'openAddMovieDialog');

      // ACT
      compClass.openAddMovieDialog();

      // ASSERT
      expect(movieDialogUtilsSpy).toHaveBeenCalled();

    });

  });

  describe('#onSidenavToggle()', () => {

    it('should emit an event when invoked', () => {

      // ASSEMBLE
      const sidenavToggleSpy = spyOn(compClass.sidenavToggle, 'emit');

      // ACT
      compClass.onSidenavToggle();

      // ASSERT
      expect(sidenavToggleSpy).toHaveBeenCalled();

    });

  });

});
