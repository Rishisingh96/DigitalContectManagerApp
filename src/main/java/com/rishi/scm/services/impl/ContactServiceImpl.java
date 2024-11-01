package com.rishi.scm.services.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.rishi.scm.entity.Contact;
import com.rishi.scm.entity.User;
import com.rishi.scm.helpers.ResourceNotFoundException;
import com.rishi.scm.repository.ContactRepo;
import com.rishi.scm.services.ContactService;

@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactRepo contactRepo;

    @Override
    public Contact saveContact(Contact contact) {
        
        String contactId = UUID.randomUUID().toString();
        contact.setId(contactId);
        return contactRepo.save(contact);
    }

    @Override
    public Contact updateContact(Contact contact) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    @Override
    public Contact getById(String id) {
        var contact = contactRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Contact not found id" + id));
        return contact;
    }

    @Override
    public List<Contact> getAll() {
        return contactRepo.findAll();
    }

    @Override
    public void deleteContact(String id) {
        var contact = contactRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Contact not found id" + id));
        contactRepo.delete(contact);
    }

    // @Override
    // public List<Contact> search(String name, String email, String phoneNumber) {
    //     throw new UnsupportedOperationException("Not supported yet.");
    // }

    @Override
    public List<Contact> getByUserId(String userId) {
        return contactRepo.findByUserId(userId);
    }

    // @Override
    // public List<Contact> getByUser(User user) {
    //    return contactRepo.findByUser(user);
    // }

    @Override
    public Page<Contact> getByUser(User user, int page, int size, String sortBy, String direction) {
        
        Sort sort = direction.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();

        var pageable = PageRequest.of(page, size, sort);
        return contactRepo.findByUser(user, pageable);
    }

    @Override
    public Page<Contact> searchByName(String nameKeyword, int size, int page, String sortBy, String order, User user) {
       
        Sort sort = order.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        var pageable = PageRequest.of(page, size, sort);
        return contactRepo.findByUserAndNameContaining(user, nameKeyword, pageable);
    }

    @Override
    public Page<Contact> searchByEmail(String emailKeyword, int size, int page, String sortBy, String order,
            User user) {
                Sort sort = order.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
                var pageable = PageRequest.of(page, size, sort);
                return contactRepo.findByUserAndEmailContaining(user, emailKeyword, pageable);
    }

    @Override
    public Page<Contact> searchByPhoneNumber(String phoneNumberKeyword, int size, int page, String sortBy, String order,
            User user) {
                Sort sort = order.equals("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
                var pageable = PageRequest.of(page, size, sort);
                return contactRepo.findByUserAndPhoneNumberContaining(user, phoneNumberKeyword, pageable);
    }
}
