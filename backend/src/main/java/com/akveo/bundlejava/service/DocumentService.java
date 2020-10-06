package com.akveo.bundlejava.service;

import com.akveo.bundlejava.model.Document;
import com.akveo.bundlejava.repository.DocumentRepository;
import com.akveo.bundlejava.rest.DocumentHandler;
import org.codehaus.plexus.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.logging.Logger;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;
    private static final Logger logger = Logger.getLogger(DocumentHandler.class.getName());

    public ResponseMetadata save(MultipartFile file) throws IOException {
        InputStream inputStream = file.getInputStream();
        String originalName = file.getOriginalFilename();
        String name = file.getName();
        String contentType = file.getContentType();
        Path path= Paths.get("C:\\Users\\OMEN\\Documents"+file.getOriginalFilename());
        long size = file.getSize();
        byte[] input=file.getBytes();
        Files.write(path,input);
        logger.info("inputStream: " + inputStream);
        logger.info("originalName: " + originalName);
        logger.info("name: " + name);
        logger.info("contentType: " + contentType);
        logger.info("size: " + size);

        Document doc = new Document();
        doc.setDocName(file.getOriginalFilename());
        doc.setFile(file.getBytes());
        FileOutputStream fos=new FileOutputStream("C:\\Users\\OMEN\\Images");
        fos.write(file.getBytes());
        documentRepository.save(doc);
        ResponseMetadata metadata = new ResponseMetadata();
        metadata.setMessage("success");
        metadata.setStatus(200);
        return metadata;
    }

    public byte[] getDocumentFile(Long id) {
        return documentRepository.findById(id).get().getFile();
    }

    public List<Document> findAll() {
        return (List<Document>) documentRepository.findAll();
    }

}