package com.akveo.bundlejava.service;

import com.akveo.bundlejava.model.Document;
import com.akveo.bundlejava.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class DocumentService {

    @Autowired
    private DocumentRepository documentRepository;

    public ResponseMetadata save(MultipartFile file) throws IOException {

        Document doc = new Document();
        doc.setDocName(file.getOriginalFilename());
        doc.setFile(file.getBytes());
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