// src/app/user/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor.model';



@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  fetchDoctorByCode(selectedDoctor: string) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8082/api/doctor_profile';


  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getAll`);
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/getById/${id}`);
  }

  updatedoctor(doctor: Doctor): Observable<Doctor> {

    return this.http.put<Doctor>(`${this.apiUrl}/updateById`, doctor);
  }

  saveDoctor(doctor: Doctor): Observable<Doctor> {
    (doctor);
    return this.http.post<Doctor>(`${this.apiUrl}/add`, doctor);
  }

  deleteDoctor(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/deleteById/${id}`, { responseType: 'text' });
  }





}

