package com.akveo.bundlejava.repository;

import com.akveo.bundlejava.model.DashboardFrag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DashboardFragRepository extends JpaRepository<DashboardFrag,Long> {
}
