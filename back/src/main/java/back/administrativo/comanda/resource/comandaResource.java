package back.administrativo.comanda.resource;


import back.administrativo.comanda.domain.DTO.comandaDTO;
import back.administrativo.comanda.domain.entity.Comanda;
import back.administrativo.comanda.service.comandaService;
import back.servicos.domain.DTO.servicoDTO;
import back.servicos.domain.entity.Servicos;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/comandas")
public class comandaResource {


    @Autowired
    public ModelMapper mapper;

    @Autowired
    public comandaService service;

    @PostMapping
    public ResponseEntity<comandaDTO> create(@RequestBody comandaDTO DTO){
        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(
                        service.create(DTO)
                ).toUri();
        return ResponseEntity.created(uri).body(DTO);
    }

    @GetMapping
    public ResponseEntity<List<Comanda>> findAll(){
        return ResponseEntity.ok().body(
                service.findAll()
                        .stream().map(x -> mapper.map(
                                x, Comanda.class)
                        ).toList()
        );
    }

}
