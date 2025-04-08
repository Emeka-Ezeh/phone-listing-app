// phone-list.component.ts
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
  filteredPhones: any[] = [];
  searchQuery: string = '';
  isSearching: boolean = false;
  searchError: string | null = null;

  // Brand dropdown properties
  brands: string[] = [];
  selectedBrand: string = 'all';

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
        this.filteredPhones = [...data];
        this.extractBrands();
        this.isSearching = false;
      },
      error: (err) => {
        console.error('Error loading phones:', err);
        this.searchError = 'Failed to load phones. Please try again.';
        this.isSearching = false;
      }
    });
  }

  extractBrands() {
    // Get unique brands from phones
    this.brands = [...new Set(this.phones.map(phone => phone.brand))];
    this.brands.sort(); // Sort alphabetically
  }

  filterByBrand() {
    if (this.selectedBrand === 'all') {
      this.filteredPhones = [...this.phones];
    } else {
      this.filteredPhones = this.phones.filter(phone =>
        phone.brand === this.selectedBrand
      );
    }
    this.applySearchFilter();
  }

  applySearchFilter() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) return;

    this.filteredPhones = this.filteredPhones.filter(phone =>
      phone.brand.toLowerCase().includes(query) ||
      phone.model.toLowerCase().includes(query) ||
      phone.number.includes(query)
    );
  }

  search() {
    this.filterByBrand(); // Apply brand filter first
    this.applySearchFilter(); // Then apply search query

    if (this.searchQuery.trim()) {
      if (this.filteredPhones.length === 0) {
        this.searchError = 'No phones found matching your search.';
      } else {
        this.searchError = null;
      }
    }
  }

  clearSearch() {
    this.searchQuery = '';
    this.selectedBrand = 'all';
    this.searchError = null;
    this.filteredPhones = [...this.phones];
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
