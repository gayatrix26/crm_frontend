import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/interfaces/user.model';
import { PageResponse } from '../../models/interfaces/page-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // ==========================
  // Create User
  // ==========================

  loginUserObject(
  username: string,
  password: string
): Observable<User> {

  const params = new HttpParams()
    .set('username', username)
    .set('password', password);

  return this.http.post<User>(
    `${this.apiUrl}/login`,
    {},
    { params }
  );

}


  createUserObject(
    user: User
  ): Observable<User> {

    return this.http.post<User>(
      this.apiUrl,
      user
    );
  }

  





  // ==========================
  // Update User
  // ==========================
updateUserObject(userId:number,user:User){

  return this.http.put<User>(
    `${this.apiUrl}/${userId}`,
    user
  );

}
 
  // ==========================
  // Delete User
  // ==========================

  deleteUser(
    userId: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${userId}`
    );
  }

  // ==========================
  // Get User By Id
  // ==========================

getUserByIdObject(userId:number){

  return this.http.get<User>(
    `${this.apiUrl}/${userId}`
  );

}
  // ==========================
  // Get All Users
  // ==========================

  getAllUsersPage(
    page = 0,
    size = 10
  ): Observable<PageResponse<User>> {

    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<User>>(
      this.apiUrl,
      { params }
    );
  }

 
  // ==========================
  // Search Users
  // ==========================

  searchUsersPage(
    keyword: string,
    page = 0,
    size = 10
  ): Observable<PageResponse<User>> {

    const params = new HttpParams()
      .set('keyword', keyword)
      .set('page', page)
      .set('size', size);

    return this.http.get<PageResponse<User>>(
      `${this.apiUrl}/search`,
      { params }
    );
  }

  // ==========================
  // Activate User
  // ==========================

  activateUserObject(
    userId: number
  ): Observable<User> {

    return this.http.patch<User>(
      `${this.apiUrl}/${userId}/activate`,
      {}
    );
  }

  // ==========================
  // Deactivate User
  // ==========================

  deactivateUserObject(
    userId: number
  ): Observable<User> {

    return this.http.patch<User>(
      `${this.apiUrl}/${userId}/deactivate`,
      {}
    );
  }

}