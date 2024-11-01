package com.rishi.scm.services;

import java.util.List;

import org.springframework.data.domain.Page;

import com.rishi.scm.entity.Contact;
import com.rishi.scm.entity.User;


public interface ContactService {
    //save contacts
    Contact saveContact(Contact contact);

    //update contacts
    Contact updateContact(Contact contact);

    //get all contacts
    List<Contact> getAll();

    //get Contact by id
    Contact getById(String id);

    //delete contact
    void deleteContact(String id);

    //search contact
    // List<Contact> search(String name, String email, String phoneNumber);
       // search contact
       Page<Contact> searchByName(String nameKeyword, int size, int page, String sortBy, String order, User user);

       Page<Contact> searchByEmail(String emailKeyword, int size, int page, String sortBy, String order, User user);
   
       Page<Contact> searchByPhoneNumber(String phoneNumberKeyword, int size, int page, String sortBy, String order,
               User user);

    //get contact by User Id
    List<Contact> getByUserId(String userId);

    //without pageable
    // List<Contact> getByUser(User user);

    Page<Contact> getByUser(User user, int page, int size, String sortField, String sortDirection);

}
