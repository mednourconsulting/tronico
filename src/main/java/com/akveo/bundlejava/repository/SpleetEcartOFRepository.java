package com.akveo.bundlejava.repository;


import com.akveo.bundlejava.model.SpleetEcartOF;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository //CRud
public interface SpleetEcartOFRepository extends JpaRepository<SpleetEcartOF, Long> {
    public List<SpleetEcartOF> findByYear(Long year);
    public List<SpleetEcartOF> findByComment(String comment);


}
