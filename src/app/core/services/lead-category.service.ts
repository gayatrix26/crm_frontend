import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LeadCategory } from '../../models/interfaces/lead-category.model';

@Injectable({
  providedIn: 'root'
})
export class LeadCategoryService {

  private readonly apiUrl = 'http://localhost:8080/api/lead-categories';

  constructor(private http: HttpClient) { }

  // ==========================
  // Create Category
  // ==========================

  createCategoryObject(category: LeadCategory): Observable<LeadCategory> {
    return this.http.post<LeadCategory>(this.apiUrl, category);
  }

  // ==========================
  // Update Category
  // ==========================

  updateCategoryObject(
    categoryId: number,
    category: LeadCategory
  ): Observable<LeadCategory> {

    return this.http.put<LeadCategory>(
      `${this.apiUrl}/${categoryId}`,
      category
    );
  }

  // ==========================
  // Delete Category
  // ==========================

  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${categoryId}`);
  }

  // ==========================
  // Get Category By Id
  // ==========================

  getCategoryByIdObject(categoryId: number): Observable<LeadCategory> {
    return this.http.get<LeadCategory>(`${this.apiUrl}/${categoryId}`);
  }

  // ==========================
  // Get All Categories
  // ==========================

  getAllCategoriesList(): Observable<LeadCategory[]> {
    return this.http.get<LeadCategory[]>(this.apiUrl);
  }

}