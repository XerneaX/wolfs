package com.kurslarvadisi.wolfsvalley.repository;

import com.kurslarvadisi.wolfsvalley.domain.Course;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Course entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {}
