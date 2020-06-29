import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddMovieDialogUtils } from '../../shared/utils/add-movie-dialog-utils';

import { SideNavigationComponent } from './side-navigation.component';

describe('SideNavigationComponent', () => {

  // SUT
  let fixture: ComponentFixture<SideNavigationComponent>;
  let compClass: SideNavigationComponent;

  // Dependencies
  let movieDialogUtils: AddMovieDialogUtils;

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
      declarations: [ SideNavigationComponent ],
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
    fixture   = TestBed.createComponent(SideNavigationComponent);
    compClass = fixture.componentInstance;

    // Dependency injection
    movieDialogUtils  = TestBed.get(AddMovieDialogUtils);

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

});
