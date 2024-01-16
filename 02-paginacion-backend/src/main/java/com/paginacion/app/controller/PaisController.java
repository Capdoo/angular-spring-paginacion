package com.paginacion.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paginacion.app.model.PaisModel;
import com.paginacion.app.service.PaisService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PaisController {

	
	@Autowired
	PaisService paisService;
	
	
	@GetMapping("/paises")
	public ResponseEntity<Page<PaisModel>> paginas(
													@RequestParam(defaultValue="0") int page,
													@RequestParam(defaultValue="10") int size,
													@RequestParam(defaultValue="nombre") String order,
													@RequestParam(defaultValue="true") boolean asc
												){
		Page<PaisModel> paises = paisService.paginas(PageRequest.of(page, size, Sort.by(order)));
		
		if(!asc) {
			paises = paisService.paginas(PageRequest.of(page, size, Sort.by(order).descending()));
		}
		
		return new ResponseEntity<Page<PaisModel>>(paises,HttpStatus.OK);
	}
	
	
}
