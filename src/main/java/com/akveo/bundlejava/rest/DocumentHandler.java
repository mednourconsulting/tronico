package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.Document;
import com.akveo.bundlejava.service.DocumentService;
import com.akveo.bundlejava.service.ResponseMetadata;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

@RestController
@CrossOrigin("http://127.0.0.1:4200")
@RequestMapping("/documentHandler")
public class DocumentHandler {

    private static final Logger LOG = Logger.getLogger(String.valueOf(DocumentHandler.class));

    @Autowired
    DocumentService documentService;

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/upload")
    public @ResponseBody
    ResponseMetadata handleFileUpload(@RequestParam MultipartFile file) throws IOException {
        System.out.println(file);
        return documentService.save(file);
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public HttpEntity<byte[]> getDocument(@PathVariable Long id) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.IMAGE_JPEG);
        return new ResponseEntity<byte[]>(documentService.getDocumentFile(id), httpHeaders, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    List<Document> getDocument() {
        return documentService.findAll();
    }

}