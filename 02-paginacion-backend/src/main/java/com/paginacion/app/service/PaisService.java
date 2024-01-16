package com.paginacion.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.paginacion.app.model.PaisModel;
import com.paginacion.app.repository.PaisRepository;

import org.springframework.transaction.annotation.Transactional;


import org.springframework.data.domain.Pageable;

@Service
@Transactional
public class PaisService {

	@Autowired
	PaisRepository paisRepository;
	
	public Page<PaisModel> paginas(Pageable pageable){
		System.out.println(pageable);
		return paisRepository.findAll(pageable);
	}
	
	
}






