package com.paginacion.app.repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.paginacion.app.model.PaisModel;


public interface PaisRepository extends JpaRepository<PaisModel,Long>{

	Page<PaisModel> findAll(Pageable pageable);

	
	
	
}
