package com.rishi.scm.services;

import java.util.List;

import com.rishi.scm.entity.Contact;


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
    List<Contact> search(String name, String email, String phoneNumber);

    //get User Id
    List<Contact> getByUserId(String userId);

}
