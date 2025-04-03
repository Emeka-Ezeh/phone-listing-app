import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],

})
export class PhoneListComponent implements OnInit {
  phones: any[] = [];
  searchQuery: string = '';
  isSearching: boolean = false;
  searchError: string | null = null;

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPhones();
  }

  loadPhones() {
    this.isSearching = true;
    this.searchError = null;

    this.phoneService.getPhones().subscribe({
      next: (data) => {
        this.phones = data;
        this.isSearching = false;
      },
      error: (err) => {
        console.error('Error loading phones:', err);
        this.searchError = 'Failed to load phones. Please try again.';
        this.isSearching = false;
      }
    });
  }

  search() {
    const query = this.searchQuery.trim();

    if (!query) {
      this.loadPhones();
      return;
    }

    this.isSearching = true;
    this.searchError = null;

    console.log('Searching for:', query);

    this.phoneService.searchPhones(query).subscribe({
      next: (results) => {
        console.log('Search results:', results);
        this.phones = results;
        this.isSearching = false;

        if (results.length === 0) {
          this.searchError = 'No phones found matching your search.';
        }
      },
      error: (err) => {
        console.error('Error searching phones:', err);
        this.searchError = 'Search failed. Please try again.';
        this.phones = [];
        this.isSearching = false;
      }
    });
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchError = null;
    this.loadPhones();
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
