package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.TrsCMS;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrsTrepository extends JpaRepository<TrsCMS,Long> {
}
