package com.pavan.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pavan.model.Images;

public interface UploadRepo extends JpaRepository<Images, Integer> {

}
